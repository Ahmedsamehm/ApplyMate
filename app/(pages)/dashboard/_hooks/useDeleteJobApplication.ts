import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteJobApplication from "../services/DeleteJob";
import { toast } from "sonner";

const useDeleteJobApplication = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteJobApplication(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobApplications"] });
      toast.success("Job application deleted successfully!");
    },
    onError: (error: any) => {
      toast.error(`Failed to delete job application: ${error.message}`);
    },
  });
};

export default useDeleteJobApplication;
