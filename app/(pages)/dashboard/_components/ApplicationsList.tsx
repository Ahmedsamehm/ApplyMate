"use client";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { useJobList } from "../_hooks/useJobList";
import { getStatusColor } from "@/utils/getStatusColor";
import { useState } from "react";
import SelectedJob from "./SelectedJob";
import { Button } from "@/app/components/ui/button";
import { JobApplication } from "@/app/types";

import Image from "next/image";
import { JobStatusCards } from "@/utils/FilterState";

const ApplicationsList = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobApplication | null>(null);
  const { data: jobApplications, error, refetch } = useJobList();
  const applications = JobStatusCards({ jobApplications });
  if (error)
    return (
      <div>
        Error: {(error as any).message}. <Button onClick={() => refetch()}>Retry</Button>
      </div>
    );

  return (
    <>
      <div className="grid w-full max-w-7xl mx-auto gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {applications.map((application) => (
          <Card
            key={application.title}
            className="w-full hover:border-blue-400/80 transition outline-2 dark:outline-0 min-h-[50vh] overflow-auto"
          >
            <CardHeader>
              <CardTitle className={`${application.color} font-bold text-xl flex gap-2 capitalize`}>
                {application.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col max-h-[40vh] overflow-y-auto">
                {application.data.map((item: JobApplication) => {
                  if (!item) return;
                  const {
                    id,
                    jobs: { employer_name, job_title, employer_logo },
                    applied_at,
                    status,
                  } = item;
                  const statusColor = getStatusColor(status);

                  return (
                    <li
                      key={id}
                      className="flex justify-between items-center cursor-pointer hover:bg-muted/50 rounded-md px-2"
                      onClick={() => {
                        setSelectedJob(item as any);
                        setIsSheetOpen(true);
                      }}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          {employer_logo && (
                            <Image
                              src={employer_logo}
                              alt={`${employer_name} logo`}
                              width={24}
                              height={24}
                              className="w-6 h-6 rounded-full"
                            />
                          )}
                          <span className="text-sm font-medium">{employer_name}</span>
                        </div>

                        <span className="text-sm text-muted-foreground">{job_title}</span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(applied_at).toLocaleDateString()}
                        </span>
                      </div>
                      <Badge
                        className={`${statusColor.text} ${statusColor.bg} px-2 py-1 rounded-md capitalize`}
                        variant="outline"
                      >
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

      {selectedJob && (
        <SelectedJob selectedJob={selectedJob} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
      )}
    </>
  );
};

export default ApplicationsList;
