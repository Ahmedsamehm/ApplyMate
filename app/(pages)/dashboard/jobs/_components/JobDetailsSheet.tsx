"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { MapPin, Briefcase, Clock, DollarSign, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Badge } from "@/app/components/ui/badge";
import Link from "next/link";
import { GetPublisherIcon } from "@/utils/GetPublisherIcon";
import { useSaveJobApplication } from "../../_hooks/useSaveJobApplication";

type JobDetailsSheetProps = {
  job: any;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const JobDetailsSheet = ({ job, open, setOpen }: JobDetailsSheetProps) => {
  const { saveApplication, isPending } = useSaveJobApplication();
  const [applied, setApplied] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (applied) {
      const timer = setTimeout(() => setShowConfirm(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [applied]);
  if (!job) return null;
  const jobData = {
    job_id: job.job_id,
    employer_name: job.employer_name,
    employer_logo: job.employer_logo || "",
    employer_website: job.employer_website,
    job_title: job.job_title,
    job_location: job.job_location,
    job_city: job.job_city,
    job_state: job.job_state,
    job_country: job.job_country,
    job_description: job.job_description,
    job_apply_link: job.job_apply_link,
    job_employment_type: job.job_employment_type,
    job_min_salary: job.job_min_salary,
    job_max_salary: job.job_max_salary,
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full sm:max-w-2xl p-0 bg-background">
        <SheetHeader className="p-6 border-b border-border">
          <div className="flex items-start gap-4">
            <Image src={job.employer_logo || "/Logo.png"} alt={job.employer_name} width={64} height={64} className="w-16 h-16 rounded-lg object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <SheetTitle className="text-2xl mb-1">{job.job_title}</SheetTitle>
              <p className="text-lg font-semibold text-foreground">{job.employer_name}</p>
            </div>
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-140px)]">
          <div className="p-6 space-y-6">
            {/* Key Info Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-medium">Location</span>
                </div>
                <p className="text-sm font-semibold">{job.job_location || "Not specified"}</p>
              </div>

              <div className="bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs font-medium">Type</span>
                </div>
                <p className="text-sm font-semibold">{job.job_employment_type_text || "Full-time"}</p>
              </div>

              <div className="bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-medium">Posted</span>
                </div>
                <p className="text-sm font-semibold">{job.job_posted_human_readable || "Recently"}</p>
              </div>

              <div className="bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-xs font-medium">Salary</span>
                </div>
                <p className="text-sm font-semibold">
                  {job.job_min_salary && job.job_max_salary ? `$${(job.job_min_salary / 1000).toFixed(0)}k - $${(job.job_max_salary / 1000).toFixed(0)}k` : "Not disclosed"}
                </p>
              </div>
            </div>

            {/* Benefits */}
            {job.job_benefits && job.job_benefits.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {job.job_benefits.map((benefit: string, index: number) => (
                    <Badge key={index} variant="secondary" className="capitalize">
                      {benefit.replace(/_/g, " ")}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Qualifications */}
            {job.job_highlights?.Qualifications && job.job_highlights.Qualifications.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Required Qualifications</h3>
                <ul className="space-y-2">
                  {job.job_highlights.Qualifications.map((qual: string, index: number) => (
                    <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Responsibilities */}
            {job.job_highlights?.Responsibilities && job.job_highlights.Responsibilities.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {job.job_highlights.Responsibilities.map((resp: string, index: number) => (
                    <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Apply Options */}
            {job.apply_options && job.apply_options.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Apply Through</h3>
                  <Badge variant="outline" className="text-xs">
                    {job.apply_options.length} platforms
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {job.apply_options.map((option: any, index: number) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-between h-auto py-3 px-4 cursor-pointer  hover:bg-primary/5 hover:border-primary/50"
                      onClick={() => window.open(option.apply_link, "_blank")}
                    >
                      <div className="flex items-center gap-2 text-left  ">
                        <span className="text-lg ">{GetPublisherIcon(option.publisher)}</span>
                        <div className="flex flex-col items-start">
                          <span className="font-medium text-sm">{option.publisher}</span>
                          {option.is_direct && (
                            <Badge variant="secondary" className="text-xs mt-1">
                              Direct Apply
                            </Badge>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Full Description */}
            {job.job_description && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Full Job Description</h3>
                <div className="bg-secondary/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-6">{job.job_description}</p>
                  {job.job_apply_link && (
                    <Link href={job.job_apply_link} className="text-primary hover:underline text-sm font-medium inline-block mt-3" target="_blank">
                      Read full description →
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Apply Button */}
            {job.job_apply_link && (
              <div className="pt-4 border-t space-y-4">
                <Button
                  onClick={() => {
                    window.open(job.job_apply_link, "_blank");
                    setApplied(true);
                  }}
                  size="lg"
                  className="w-full"
                >
                  Quick Apply Now
                </Button>
                {showConfirm && (
                  <Button
                    disabled={isPending}
                    onClick={() => {
                      saveApplication(jobData);
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Did you apply? Yes, save the job
                  </Button>
                )}
                <p className="text-xs text-center text-muted-foreground">Or choose a platform above</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default JobDetailsSheet;
