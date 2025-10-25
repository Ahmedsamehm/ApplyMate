import { Button } from "@/app/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/app/components/ui/sheet";
import { useJobApplicationsContext } from "@/app/context/JobApplicationsProvider ";
import { JobApplicationItem } from "@/app/types";
import { DeleteJob, UpdateJobStatus } from "@/app/utils/jobStorage";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const SelectedJob = ({ selectedJob, isSheetOpen, setIsSheetOpen }: { selectedJob: JobApplicationItem; isSheetOpen: boolean; setIsSheetOpen: (isOpen: boolean) => void }) => {
  const { refreshJobs } = useJobApplicationsContext();
  const form = useForm({
    defaultValues: { status: selectedJob.status },
  });

  useEffect(() => {
    form.reset({ status: selectedJob.status });
  }, [selectedJob, form]);

  const onSubmit = (data: { status: string }) => {
    UpdateJobStatus(selectedJob.id, data.status);
    refreshJobs();
    setIsSheetOpen(false);
  };

  const handleDelete = () => {
    DeleteJob(selectedJob.id);
    refreshJobs();
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {selectedJob.companyName} - {selectedJob.position}
          </SheetTitle>
          <SheetDescription>
            Status: {selectedJob.status}
            <br />
            Applied on: {selectedJob.date}
            <br />
            Notes: {selectedJob.notes}
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
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
              <Button type="submit">Save</Button>
              <Button type="button" variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex justify-end mt-4">
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SelectedJob;
