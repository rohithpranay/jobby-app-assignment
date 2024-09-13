import React from "react";
import { Link } from "react-router-dom";
import "./JobCard.css";

const JobCard = ({ job, onBookmark }) => {
  return (
    <>
      {job && (
        <div className="job-card">
          <Link to={`/jobs/${job.id}`} state={{ job }}>
            <img
              src={job.creatives[0]?.thumb_url}
              alt={job.title}
              className="job-image"
            />
            <div className="job-content">
              <h3 className="job-title">{job?.title}</h3>
              <p className="job-company">Company: {job?.company_name}</p>
              <p className="job-location">
                📍 Location: {job?.primary_details?.Place}
              </p>
              <p className="job-salary">
                💰 Salary: {job?.primary_details?.Salary || "Not disclosed"}
              </p>
              <p className="job-role">🛠 Job Role: {job?.job_role}</p>
              <p className="job-experience">
                🧑‍💼 Experience: {job?.primary_details?.Experience}
              </p>
              <p className="job-openings">
                👥 Vacancies: {job?.openings_count}
              </p>
            </div>
          </Link>

          <button className="bookmark-btn" onClick={() => onBookmark(job)}>
            Bookmark Job
          </button>
        </div>
      )}
    </>
  );
};

export default JobCard;
