export type JobStatus = "applied" | "accepted" | "pending" | "rejected" | "";

export interface JobApplicationItem {
  id: string;
  status: JobStatus;
  date: string;
  position: string;
  companyName: string;
  notes: string;
}

export interface JobApplication {
  title: JobStatus;
  color: string;
  data: JobApplicationItem[];
}

export interface JobApplicationsState {
  applied: JobApplicationItem[];
  accepted: JobApplicationItem[];
  pending: JobApplicationItem[];

  rejected: JobApplicationItem[];
}

export interface JobFormData {
  companyName: string;
  jobTitle: string;
  status: JobStatus;
  applicationDate: string;
  notes: string;
}
