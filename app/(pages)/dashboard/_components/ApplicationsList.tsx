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
};
const ApplicationsList = ({ status, position, companyName, title, color, date }: JobApplication) => {
  const statusColor = getStatusColor(status);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className={`${color}`}>{title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
        <CardAction className="px-3">Status</CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col flex-wrap gap-3 max-h-[20vh] overflow-y-auto">
          <ul>
            <li className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>{companyName}</span>
                <div className="space-y-1 flex-col">
                  <span className="text-sm text-muted-foreground block">{position}</span>
                  <span className="text-sm text-muted-foreground">{date}</span>
                </div>
              </div>
              <Badge className={`${statusColor.text} ${statusColor.bg} ${statusColor.badge} px-2 py-1 rounded-md`} variant="outline">
                {status}
              </Badge>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationsList;
