"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Hourglass, UserRoundCheck, UserSearch, UserX } from "lucide-react";
import React from "react";
import useJobList from "../_hooks/useJobList";
import { JobApplication } from "@/app/types";
import { Spinner } from "@/app/components/ui/spinner";
import { FilterState, JobStatusCards } from "@/utils/FilterState";

export type JobStatusCardTypes = {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  count: number;
};
const JobStatusCard = () => {
  const { data: jobApplications, isPending } = useJobList();
  // Filter job applications by status using FilterState utility

  const jobStatus = JobStatusCards({ jobApplications });

  if (isPending) return <Spinner />;
  return (
    <div className="grid w-full max-w-7xl mx-auto gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {jobStatus.map((card, index) => (
        <Card key={index} className="w-full hover:border-blue-400/80 transition outline-2 dark:outline-0">
          <CardHeader>
            <CardTitle className={`${card.color} font-bold text-xl flex gap-2 `}>
              <card.icon className={card.color} /> {card.title}
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
