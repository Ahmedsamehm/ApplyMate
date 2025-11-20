import { JobApplication } from "@/app/types";
import { Hourglass, UserRoundCheck, UserSearch, UserX } from "lucide-react";

export const FilterState = ({ jobApplications }: { jobApplications: JobApplication[] }) => {
  const applied = jobApplications.filter((job: JobApplication) => job.status === "applied").length;
  const pending = jobApplications.filter((job: JobApplication) => job.status === "pending").length;
  const accepted = jobApplications.filter((job: JobApplication) => job.status === "accepted").length;
  const rejected = jobApplications.filter((job: JobApplication) => job.status === "rejected").length;

  return { applied, pending, accepted, rejected };
};

export const JobStatusCards = ({ jobApplications }: { jobApplications: JobApplication[] }) => {
  const { accepted, pending, rejected, applied } = FilterState({ jobApplications });

  const jobStatusCards = [
    {
      title: "Applied",
      icon: UserSearch,
      color: "text-blue-600",
      description: "your number of job applications",
      count: applied,
    },
    {
      title: "Pending",
      icon: Hourglass,
      color: "text-yellow-600",
      description: "Waiting for recruiter response",
      count: pending,
    },
    {
      title: "Accepted",
      icon: UserRoundCheck,
      color: "text-green-600 ",
      description: "Your application has been approved",
      count: accepted,
    },
    {
      title: "Rejected",
      icon: UserX,
      color: "text-red-600",
      description: "Your application was not successful",
      count: rejected,
    },
  ];

  return jobStatusCards;
};
