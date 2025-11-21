import { JobApplication } from "@/app/types";
import axios from "axios";

const updateJobStatus = async (id: number, status: string): Promise<JobApplication> => {
  const { data } = await axios.put<JobApplication>("/api/fetchjob", { id, status });
  return data;
};

export default updateJobStatus;
