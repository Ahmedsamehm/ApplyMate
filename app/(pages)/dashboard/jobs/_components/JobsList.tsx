"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import jobsDemo from "@/app/data/JobsDemo.json";
import JobDetailsSheet from "./JobDetailsSheet";

import { useFetchJobs } from "../_hooks/useFetchJobs";
import { Label } from "@/app/components/ui/label";
import { Spinner } from "@/app/components/ui/spinner";
import { Job } from "@/app/types";

const JobsList = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const [search, setSearch] = useState("");

  const [submittedSearch, setSubmittedSearch] = useState("");

  const { data, isPending } = useFetchJobs(submittedSearch);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) {
      alert("Please enter a job title");
      return;
    }

    setSubmittedSearch(search.trim());
  };

  const hasApiResults = data && data.data && data.data.length > 0;
  const hasSearched = submittedSearch;

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <header className="mx-auto w-full p-3 items-center justify-center flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-xl">
            <Label htmlFor="search" className="block mb-1 text-sm font-medium">
              Job Title <span className="text-red-500">*</span>
            </Label>
            <Input type="text" id="search" name="search" value={search} placeholder="Frontend Developer as example" onChange={handleSearch} className="w-full" required />
          </div>
          <div className="w-full lg:w-auto lg:self-end">
            <Button type="submit" className="w-full lg:w-auto" disabled={isPending || !search.trim()}>
              {isPending ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Searching... <Spinner />
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </>
              )}
            </Button>
          </div>
        </header>
      </form>

      <div className="container mx-auto space-y-3 p-3">
        {!hasSearched && (
          <>
            <h2 className="text-2xl font-semibold text-foreground">Latest 10 Jobs</h2>
            {jobsDemo.data.map((job: any) => (
              <Card onClick={() => setSelectedJob(job)} key={job.job_id} className="p-4 cursor-pointer hover:border-primary/50 hover:bg-secondary/5 transition-colors">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Image src={job.employer_logo || "/Logo.png"} alt={job.employer_name} width={50} height={50} className="size-16 rounded-lg object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{job.employer_name}</h3>
                        <p className="text-sm text-muted-foreground">{job.job_title}</p>
                      </div>
                      <Badge variant="secondary" className="shrink-0">
                        {job.job_min_salary && job.job_max_salary ? `$${(job.job_min_salary / 1000).toFixed(0)}k - $${(job.job_max_salary / 1000).toFixed(0)}k` : "N/A"}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.job_location}
                      </div>
                      <span>{job.job_posted_human_readable}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </>
        )}

        {isPending && hasSearched && (
          <div className="text-center py-8">
            <div className="animate-spin text-4xl mb-2">⏳</div>
            <p className="text-muted-foreground">Searching for jobs...</p>
          </div>
        )}

        {hasSearched && !isPending && hasApiResults && (
          <>
            <div className="text-sm text-muted-foreground mb-2">
              Found {data.data.length} results for "{submittedSearch}" in {submittedSearch}
            </div>
            {data.data.map((job: any) => (
              <Card onClick={() => setSelectedJob(job)} key={job.job_id} className="p-4 cursor-pointer hover:border-primary/50 hover:bg-secondary/5 transition-colors">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Image src={job.employer_logo || "/Logo.png"} alt={job.employer_name} width={50} height={50} className="size-16 rounded-lg object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{job.employer_name}</h3>
                        <p className="text-sm text-muted-foreground">{job.job_title}</p>
                      </div>
                      <Badge variant="secondary" className="shrink-0">
                        {job.job_min_salary && job.job_max_salary ? `$${(job.job_min_salary / 1000).toFixed(0)}k - $${(job.job_max_salary / 1000).toFixed(0)}k` : "N/A"}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.job_location}
                      </div>
                      <span>{job.job_posted_human_readable}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </>
        )}

        {hasSearched && !isPending && !hasApiResults && (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              No jobs found for "{submittedSearch}" in {submittedSearch}
            </p>
            <p className="text-sm text-muted-foreground">Try adjusting your search terms or location</p>
          </div>
        )}
      </div>

      <JobDetailsSheet job={selectedJob} open={!!selectedJob} setOpen={(isOpen) => !isOpen && setSelectedJob(null)} />
    </section>
  );
};

export default JobsList;
