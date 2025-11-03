import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import getJobData from "../services/GetJobData";

export const useJobList = () => {
  return useSuspenseQuery({
    queryKey: ["jobApplications"],
    queryFn: () => getJobData(),
  });
};

export default useJobList;
