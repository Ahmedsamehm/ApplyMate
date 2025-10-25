"use client";
import { Badge } from "@/app/components/ui/badge";

import { useJobApplicationsContext } from "@/app/context/JobApplicationsProvider ";
import { JobApplication, JobApplicationItem } from "@/app/types";
import { getStatusColor } from "@/app/utils/getStatusColor";

import { Card, CardHeader, CardTitle, CardContent, CardAction } from "@/app/components/ui/card";
import { useState } from "react";

import SelectedJob from "./SelectedJob";
const ApplicationsList = () => {
  const { isSheetOpen, setIsSheetOpen, jobApplications } = useJobApplicationsContext();

  const [selectedJob, setSelectedJob] = useState<JobApplicationItem | null>(null);

  const applications: JobApplication[] = [
    { title: "applied", color: "text-blue-600", data: jobApplications.applied },
    { title: "pending", color: "text-yellow-600", data: jobApplications.pending },
    { title: "accepted", color: "text-green-600", data: jobApplications.accepted },
    { title: "rejected", color: "text-red-600", data: jobApplications.rejected },
  ];

  return (
    <>
      <div className="grid w-full max-w-7xl mx-auto gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {applications.map((application) => (
          <Card key={application.title} className="w-full hover:border-blue-400/80 transition outline-2 dark:outline-0">
            <CardHeader>
              <CardTitle className={`${application.color} font-bold text-xl flex gap-2 capitalize`}>{application.title}</CardTitle>
              <CardAction>Status</CardAction>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col  max-h-[40vh] overflow-y-auto">
                {application.data.map((item) => {
                  const { id, companyName, position, date, status } = item;
                  const statusColor = getStatusColor(status);

                  return (
                    <li
                      key={id}
                      className="flex justify-between items-center cursor-pointer hover:bg-muted/50 rounded-md px-2 "
                      onClick={() => {
                        setSelectedJob(item as any);
                        setIsSheetOpen(true);
                      }}
                    >
                      <div className="flex flex-col">
                        <span>{companyName}</span>
                        <span className="text-sm text-muted-foreground">{position}</span>
                        <span className="text-sm text-muted-foreground">{date}</span>
                      </div>
                      <Badge className={`${statusColor.text} ${statusColor.bg} px-2 py-1 rounded-md capitalize`} variant="outline">
                        {status}
                      </Badge>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedJob && <SelectedJob selectedJob={selectedJob} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />}
    </>
  );
};

export default ApplicationsList;
