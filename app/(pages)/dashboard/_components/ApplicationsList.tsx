import { Badge } from "@/app/components/ui/badge";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { getStatusColor } from "@/app/utils/getStatusColor";

import React from "react";

export type JobApplication = {
  title: string;
  color: string;

  status: "Accepted" | "Rejected" | "Pending";
  date: string;
  position: string;
  companyName: string;
  data: { status: "Accepted" | "Rejected" | "Pending"; date: string; position: string; companyName: string }[];
};
const ApplicationsList = ({ title, color, data }: JobApplication) => {
  return (
    <Card className="w-full hover:border-blue-400/80  transition outline-2 dark:outline-0 ">
      <CardHeader>
        <CardTitle className={`${color} font-bold text-xl flex gap-2 `}>{title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
        <CardAction className="px-3">Status</CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col flex-wrap gap-3 min-h-[30vh] max-h-[40vh] overflow-y-auto">
          <ul>
            {data.map((item, index) => {
              const statusColor = getStatusColor(item.status);
              return (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span>{item.companyName}</span>
                    <div className="space-y-1 flex-col">
                      <span className="text-sm text-muted-foreground block">{item.position}</span>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                  </div>
                  <Badge className={`${statusColor.text} ${statusColor.bg} ${statusColor.badge} px-2 py-1 rounded-md`} variant="outline">
                    {item.status}
                  </Badge>
                </li>
              );
            })}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationsList;
