// JobDetail.js
import React from "react";
import { useLocation } from "react-router-dom";

const JobDetail = () => {
  const location = useLocation();
  const { job } = location.state; // Getting job data from the route state

  return (
    <div className="job-detail">
      <img
        src={job.creatives[0]?.thumb_url}
        alt={job.title}
        className="job-image"
      />
      <h1>{job.title}</h1>
      <p>Company: {job.company_name}</p>
      <p>Location: {job.primary_details?.Place}</p>
      <p>Salary: {job.primary_details?.Salary || "Not disclosed"}</p>
      <p>Role: {job.job_role}</p>
      <p>Experience: {job.primary_details?.Experience}</p>
      <p>Vacancies: {job.openings_count}</p>
    </div>
  );
};

export default JobDetail;
