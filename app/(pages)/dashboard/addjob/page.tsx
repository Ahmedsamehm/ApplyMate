import { Metadata } from "next";
import React from "react";
import AddJobForm from "./_components/AddJobForm";

export const metadata: Metadata = {
  title: "Add Job | Dashboard",
  description: "Add a new job to your ApplyMate dashboard",
};
const AddJob = () => {
  return (
    <div>
      <AddJobForm />
    </div>
  );
};

export default AddJob;
