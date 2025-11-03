export interface PostalAddress {
  addressCountry: string;
  addressLocality: string | null;
  addressRegion: string | null;
  streetAddress: string | null;
}

export interface JobLocation {
  address: PostalAddress;
  latitude: number;
  longitude: number;
  location_type: string;
}

export interface LocationRequirement {
  name: string;
}

export interface JobResponse {
  id: string;
  date_posted: string;
  date_created: string;
  title: string;
  organization: string;
  organization_url: string | null;
  date_validthrough: string;
  locations_raw: JobLocation[];
  location_requirements_raw: LocationRequirement[];
  salary_raw: string | null;
  employment_type: string[];
  url: string;
  source_type: string;
  source: string;
  source_domain: string;
  organization_logo: string | null;
  cities_derived: string[];
  counties_derived: string[] | null;
  regions_derived: string[];
  countries_derived: string[];
  locations_derived: string[];
  timezones_derived: string[];
  lats_derived: number[];
  lngs_derived: number[];
  remote_derived: boolean;
  linkedin_org_employees: number | null;
  linkedin_org_url: string | null;
  linkedin_org_size: string | null;
  linkedin_org_slogan: string | null;
  linkedin_org_industry: string | null;
  linkedin_org_followers: number | null;
  linkedin_org_headquarters: string | null;
  linkedin_org_type: string | null;
  linkedin_org_foundeddate: string | null;
  linkedin_org_specialties: string[];
  linkedin_org_locations: string[];
  linkedin_org_description: string | null;
  linkedin_org_recruitment_agency_derived: boolean;
  seniority: string | null;
  directapply: boolean;
  linkedin_org_slug: string | null;
  no_jb_schema: boolean | null;
  external_apply_url: string | null;
  ats_duplicate: boolean;
  description_text: string;
}

export interface JobsApiResponse {
  data: JobResponse[];
}

export interface JobApplication {
  id: number;
  applied_at: string;
  user_id: string;
  job_id: string;
  status: "applied" | "accepted" | "pending" | "rejected" | "";
  jobs: Job;
}
