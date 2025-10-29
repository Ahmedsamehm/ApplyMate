"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { JobApplicationsState } from "../types";
import { GetJobs } from "../utils/jobStorage";

export interface JobApplicationsContextType {
  jobApplications: JobApplicationsState;
  setJobApplications: React.Dispatch<React.SetStateAction<JobApplicationsState>>;

  isSheetOpen: boolean;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refreshJobs: () => void;
}
export const JobApplicationsContext = createContext<JobApplicationsContextType | null>(null);

const JobApplicationsProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialJobApplications = () => ({
    applied: [],
    pending: [],
    accepted: [],
    rejected: [],
  });

  const [jobApplications, setJobApplications] = useState<JobApplicationsState>(getInitialJobApplications);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Retrieve stored job applications when the component mounts
  useEffect(() => {
    const storedJobs = GetJobs();
    if (storedJobs) {
      setJobApplications(storedJobs);
    }
  }, []);

  // Save job applications to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("jobApplications", JSON.stringify(jobApplications));
  }, [jobApplications]);
  // Function to refresh the job applications
  const refreshJobs = () => {
    const storedJobs = GetJobs();
    setJobApplications(storedJobs);
  };

  const values = {
    jobApplications,
    setJobApplications,

    isSheetOpen,
    setIsSheetOpen,
    refreshJobs,
  };

  return <JobApplicationsContext.Provider value={values}>{children}</JobApplicationsContext.Provider>;
};

// This is a custom hook to access the JobApplicationsContext.
// It ensures the context is not null and throws an error if used outside the provider.
// Returns the context object containing jobApplications and setJobApplications.
export const useJobApplicationsContext = () => {
  const context = useContext(JobApplicationsContext);
  if (!context) throw new Error("useJobApplications must be used inside JobApplicationsProvider");
  return context;
};

export default JobApplicationsProvider;
