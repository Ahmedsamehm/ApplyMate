"use client";
import { Button } from "@/app/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/app/components/ui/sheet";
import { ScrollArea } from "@/app/components/ui/scroll-area";

import { JobApplication } from "@/app/types";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
import useUpdateJobStatus from "../_hooks/useUpdateJobStatus";
import useDeleteJobApplication from "../_hooks/useDeleteJobApplication";
import { Spinner } from "@/app/components/ui/spinner";

const SelectedJob = ({
  selectedJob,
  isSheetOpen,
  setIsSheetOpen,
}: {
  selectedJob: JobApplication;
  isSheetOpen: boolean;
  setIsSheetOpen: (isOpen: boolean) => void;
}) => {
  const form = useForm({
    defaultValues: { status: selectedJob.status },
  });

  const { mutate: updateMutation, isPending: isUpdating } = useUpdateJobStatus();
  const { mutate: deleteMutation, isPending: isDeleting, isSuccess } = useDeleteJobApplication();

  useEffect(() => {
    form.reset({ status: selectedJob.status });
  }, [selectedJob, form]);

  const onSubmit = (data: { status: string }) => {
    const body = { id: selectedJob.id, status: data.status };
    updateMutation(body);
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this job application?");
    if (!confirmed) return;
    const body = selectedJob.id;
    deleteMutation(body);
    if (isSuccess) setIsSheetOpen(false);
  };

  const job = selectedJob.jobs;

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent side="right" className="w-full sm:max-w-2xl p-0 bg-background">
        <SheetHeader className="p-6 border-b border-border">
          <div className="flex items-start gap-4">
            <Image
              src={job.employer_logo || "/Logo.png"}
              alt={job.employer_name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <SheetTitle className="text-2xl mb-1">{job.job_title}</SheetTitle>
              <p className="text-lg font-semibold text-foreground">{job.employer_name}</p>
            </div>
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-140px)]">
          <div className="p-6 space-y-6">
            {/* Key Info Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-medium">Location</span>
                </div>
                <p className="text-sm font-semibold">
                  {job.job_city}, {job.job_state}, {job.job_country}
                </p>
              </div>

              <div className="bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs font-medium">Type</span>
                </div>
                <p className="text-sm font-semibold">{job.job_employment_type || "Full-time"}</p>
              </div>

              <div className="bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-medium">Applied</span>
                </div>
                <p className="text-sm font-semibold">{new Date(selectedJob.applied_at).toLocaleDateString()}</p>
              </div>

              <div className="bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-xs font-medium">Salary</span>
                </div>
                <p className="text-sm font-semibold">
                  {job.job_min_salary && job.job_max_salary
                    ? `$${(job.job_min_salary / 1000).toFixed(0)}k - $${(job.job_max_salary / 1000).toFixed(0)}k`
                    : "Not disclosed"}
                </p>
              </div>
            </div>

            {/* Full Description */}
            {job.job_description && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Full Job Description</h3>
                <div className="bg-secondary/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-6">
                    {job.job_description}
                  </p>
                  {job.job_apply_link && (
                    <a
                      href={job.job_apply_link}
                      className="text-primary hover:underline text-sm font-medium inline-block mt-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Link →
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Status Update Form */}
            <div className="pt-4 border-t space-y-4">
              <h3 className="font-semibold">Update Status</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="status"
                    rules={{ required: "Status is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="applied">Applied</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="accepted">Accepted</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between mt-6">
                    <Button type="submit" disabled={isUpdating}>
                      {isUpdating ? <Spinner className="size-4 animate-spin" /> : "Update Status"}
                    </Button>
                    <Button disabled={isDeleting} type="button" variant="destructive" onClick={handleDelete}>
                      {isDeleting ? <Spinner /> : "Delete"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            <div className="flex justify-end mt-4">
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default SelectedJob;
