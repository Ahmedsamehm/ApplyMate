import axios from "axios";

export async function deleteJobApplication(id: number) {
  try {
    const { data } = await axios.delete("/api/fetchjob", {
      data: { id },
    });
    return data;
  } catch (error: any) {
    console.error("Error deleting job application:", error);
    throw new Error(error.response?.data?.error || "Failed to delete job application");
  }
}

export default deleteJobApplication;
