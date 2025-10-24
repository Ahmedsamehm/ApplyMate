import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import React from "react";

export type JobStatusCardTypes = {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  action: string;
  content: string;
  footer: string;
};
const JobStatusCard = ({ title, content, footer, color, icon }: JobStatusCardTypes) => {
  return (
    <Card className=" w-full hover:border-blue-400/80  transition outline-2 dark:outline-0 ">
      <CardHeader>
        <CardTitle className={`${color} font-bold text-xl flex gap-2 `}>
          {icon} {title}
        </CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  );
};

export default JobStatusCard;
