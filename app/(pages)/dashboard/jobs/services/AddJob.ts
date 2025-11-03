import { JobFormData } from "@/app/types";
import axios from "axios";

const AddJob = async (jobData: JobFormData): Promise<JobFormData> => {
  const { data } = await axios.post<JobFormData>("/api/jobs", jobData);
  return data;
};

export default AddJob;
