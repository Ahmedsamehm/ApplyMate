"use client";

import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";
import AddJob from "../jobs/services/AddJob";

export const useSaveJobApplication = () => {
  const { mutate: saveApplication, isPending } = useMutation({
    mutationFn: async (jobData: any) => {
      AddJob(jobData);
    },
    onSuccess: () => {
      toast.success("Job application saved successfully!");
    },
    onError: (error: any) => {
      toast.error(`Failed to save job application: ${error.message}`);
    },
  });
  return { saveApplication, isPending };
};
