import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateJobStatus from "./updateJobStatus";
import { toast } from "sonner";

const useUpdateJobStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) => updateJobStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobApplications"] });
      toast.success("Status updated successfully!");
    },
    onError: (error) => {
      toast.error(`Failed to update status: ${error.message}`);
    },
  });
};

export default useUpdateJobStatus;
