import { JobsApiResponse } from "@/app/types/jobs";
import axios from "axios";

const GetJobs = async (query: string) => {
  if (query === "") return;
  const { data } = await axios.get<JobsApiResponse>("/api/jobs", { params: { search: query } });
  return data;
};

export default GetJobs;
