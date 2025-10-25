export const GetJobs = () => {
  const data = localStorage.getItem("jobApplications");

  return data ? JSON.parse(data) : { applied: [], pending: [], accepted: [], rejected: [] };
};

export const UpdateJobStatus = (id: string, newStatus: string) => {
  const data = GetJobs();

  let jobToMove = null;
  for (const status in data) {
    const index = data[status].findIndex((j: any) => j.id === id);
    if (index !== -1) {
      jobToMove = data[status][index];
      data[status].splice(index, 1);
      break;
    }
  }

  if (jobToMove) {
    jobToMove.status = newStatus;
    data[newStatus].push(jobToMove);
  }

  localStorage.setItem("jobApplications", JSON.stringify(data));
};

export const DeleteJob = (id: string) => {
  const data = GetJobs();

  for (const status in data) {
    data[status] = data[status].filter((j: any) => j.id !== id);
  }

  localStorage.setItem("jobApplications", JSON.stringify(data));
};
