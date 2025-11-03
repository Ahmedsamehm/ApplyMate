import { useSuspenseQuery } from "@tanstack/react-query";
import GetJobs from "../services/GetJobs";

export function useFetchJobs(query: string) {
  const { data, isPending } = useSuspenseQuery({
    queryKey: ["jobs", query],
    queryFn: () => {
      if (!query) {
        return { data: [] };
      }
      return GetJobs(query);
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return { data, isPending };
}
