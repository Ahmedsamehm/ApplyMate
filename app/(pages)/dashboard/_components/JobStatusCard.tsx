"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { useJobApplicationsContext } from "@/app/context/JobApplicationsProvider ";
import { Hourglass, UserRoundCheck, UserSearch, UserX } from "lucide-react";
import React from "react";

export type JobStatusCardTypes = {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  count: number;
};
const JobStatusCard = () => {
  const { jobApplications } = useJobApplicationsContext();

  const applied = jobApplications.applied.length;
  const pending = jobApplications.pending.length;
  const accepted = jobApplications.accepted.length;
  const rejected = jobApplications.rejected.length;

  const jobStatusCards: JobStatusCardTypes[] = [
    {
      title: "Applied",
      icon: <UserSearch />,
      color: "text-blue-600",
      description: "your number of job applications",

      count: applied,
    },

    {
      title: "Pending",
      icon: <Hourglass />,
      color: "text-yellow-600",
      description: "Waiting for recruiter response",

      count: pending,
    },
    {
      title: "Accepted",
      icon: <UserRoundCheck />,
      color: "text-green-600 ",
      description: "Your application has been approved",

      count: accepted,
    },
    {
      title: "Rejected",
      icon: <UserX />,
      color: "text-red-600",
      description: "Your application was not successful",

      count: rejected,
    },
  ];
  return (
    <div className="grid w-full max-w-7xl mx-auto gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {jobStatusCards.map((card, index) => (
        <Card key={index} className="w-full hover:border-blue-400/80 transition outline-2 dark:outline-0">
          <CardHeader>
            <CardTitle className={`${card.color} font-bold text-xl flex gap-2 `}>
              {card.icon} {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Applications: {card.count}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JobStatusCard;
