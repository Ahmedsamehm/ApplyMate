"use client";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form";
import { JobFormData } from "@/app/types";

import { v4 as uuidv4 } from "uuid";
import { useSaveJobApplication } from "../../_hooks/useSaveJobApplication";
import { Spinner } from "@/app/components/ui/spinner";
const AddJobForm = () => {
  const { saveApplication, isPending } = useSaveJobApplication();
  const form = useForm<JobFormData>({
    defaultValues: {
      companyName: "",
      jobTitle: "",
      status: "",
      applicationDate: "",
      notes: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: JobFormData) => {


    if (!data) return;
    const jobData = {
      job_id: uuidv4(),
      employer_name: data.companyName,
      job_title: data.jobTitle,
      job_description: data.notes || null,

      job_state: data.status,
    };
    saveApplication(jobData);
    // form.reset();
  };
  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <Card className="w-full max-w-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">Add Job Application</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={control}
                name="companyName"
                rules={{ required: "Company name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company name" {...field} />
                    </FormControl>
                    <FormMessage>{errors.companyName?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="jobTitle"
                rules={{ required: "Job title is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter job title" {...field} />
                    </FormControl>
                    <FormMessage>{errors.jobTitle?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="status"
                rules={{ required: "Status is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl className="w-full">
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
                    <FormMessage>{errors.status?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="applicationDate"
                rules={{ required: "Application date is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Application Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage>{errors.applicationDate?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter any notes" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button disabled={isPending} type="submit" className="w-full">
                {isPending ? <Spinner /> : "Submit Application"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddJobForm;
