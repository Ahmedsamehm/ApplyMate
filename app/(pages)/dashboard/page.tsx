import { Metadata } from "next";
import JobStatusCard, { JobStatusCardTypes } from "./_components/JobStatusCard";
import { Hourglass, UserRoundCheck, UserSearch, UserX } from "lucide-react";
import ApplicationsList, { JobApplication } from "./_components/ApplicationsList";

export const metadata: Metadata = {
  title: "Dashboard | ApplyMate",
  description: "Access your ApplyMate dashboard to manage job applications, monitor progress, update your profile, and explore new opportunities in one place.",
};

const jobStatusData: JobStatusCardTypes[] = [
  {
    title: "Applied",
    icon: <UserSearch />,
    color: "text-white",
    description: "your number of job applications",
    action: "View Offer",
    content: "1",
    footer: "Last updated 2 days ago",
  },
  {
    title: "Accepted",
    icon: <UserRoundCheck />,
    color: "text-green-600 ",
    description: "Your application has been approved",
    action: "View Offer",
    content: "1",
    footer: "Last updated 2 days ago",
  },

  {
    title: "Pending",
    icon: <Hourglass />,
    color: "text-yellow-600",
    description: "Waiting for recruiter response",
    action: "Withdraw Application",
    content: "1",
    footer: "Last updated 1 day ago",
  },
  {
    title: "Rejected",
    icon: <UserX />,
    color: "text-red-600",
    description: "Your application was not successful",
    action: "View Details",
    content: "1 ",
    footer: "Last updated 5 days ago",
  },
];
const jobApplicationsData = {
  Accepted: [
    { status: "Accepted", date: "2 Oct 2023", position: "UI/UX Designer", companyName: "Pixel Labs" },
    { status: "Accepted", date: "10 Nov 2023", position: "Frontend Developer", companyName: "TechWave" },
    { status: "Accepted", date: "21 Dec 2023", position: "Product Designer", companyName: "DesignPro" },
    { status: "Accepted", date: "21 Dec 2023", position: "Product Designer", companyName: "DesignPro" },
  ],
  Pending: [
    { status: "Pending", date: "5 Jan 2024", position: "React Developer", companyName: "CodeCrafters" },
    { status: "Pending", date: "18 Feb 2024", position: "UI Designer", companyName: "Creative Minds" },
    { status: "Pending", date: "7 Mar 2024", position: "Frontend Engineer", companyName: "NextVision" },
  ],
  Rejected: [
    { status: "Rejected", date: "10 Apr 2024", position: "Web Developer", companyName: "DigitalHub" },
    { status: "Rejected", date: "25 May 2024", position: "UX Researcher", companyName: "Insight Labs" },
    { status: "Rejected", date: "3 Jun 2024", position: "Junior Developer", companyName: "BrightCode" },
  ],
};

// Combined structure for display
const jobApplications: JobApplication[] = [
  { title: "Accepted", color: "text-green-600", data: jobApplicationsData.Accepted } as JobApplication,
  { title: "Pending", color: "text-yellow-600", data: jobApplicationsData.Pending } as JobApplication,
  { title: "Rejected", color: "text-red-600", data: jobApplicationsData.Rejected } as JobApplication,
];

const DashBoard = () => {
  return (
    <div className="flex flex-col flex-1 p-4 gap-8">
      {/* Job Status Cards */}
      <div className="grid w-full max-w-7xl mx-auto gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {jobStatusData.map((data, index) => (
          <JobStatusCard key={index} {...data} />
        ))}
      </div>

      {/* Job Applications List */}
      <div className="grid w-full max-w-7xl mx-auto gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {jobApplications.map((data, index) => (
          <ApplicationsList key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
