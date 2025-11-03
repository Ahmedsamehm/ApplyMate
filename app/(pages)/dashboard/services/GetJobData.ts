import { JobApplication } from "@/app/types";
import axios from "axios";

export async function getJobData(): Promise<JobApplication[]> {
  try {
    const { data } = await axios.get<JobApplication[]>(`/api/fetchjob?`);
    return data;
  } catch (error) {
    console.error("Error fetching job data:", error);
    throw error;
  }
}

export default getJobData;
