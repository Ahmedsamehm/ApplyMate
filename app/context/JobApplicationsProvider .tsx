"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { JobApplicationsState } from "../types";

export interface JobApplicationsContextType {
  jobApplications: JobApplicationsState;
  setJobApplications: React.Dispatch<React.SetStateAction<JobApplicationsState>>;
}
export const JobApplicationsContext = createContext<JobApplicationsContextType | null>(null);

const JobApplicationsProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialJobApplications = () => {
    return {
      applied: [],
      pending: [],
      accepted: [],
      rejected: [],
    };
  };
  const [jobApplications, setJobApplications] = useState<JobApplicationsState>(getInitialJobApplications);

  useEffect(() => {
    const stored = localStorage.getItem("jobApplications");
    if (stored) {
      setJobApplications(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobApplications", JSON.stringify(jobApplications));
  }, [jobApplications]);

  const values = { jobApplications, setJobApplications };
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
