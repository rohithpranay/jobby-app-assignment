import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import "./Jobs.css"; // Add appropriate CSS for jobs container

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://testapi.getlokalapp.com/common/jobs?page=${page}`
      );
      setJobs((prevJobs) => [...prevJobs, ...response.data.results]);
    } catch (err) {
      setError("Failed to load jobs");
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  const handleBookmark = (job) => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(job);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    alert("Job bookmarked!");
  };

  return (
    <div className="jobs-list">
      {error && <p className="message error-message">{error}</p>}
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onBookmark={handleBookmark} />
      ))}
      {isLoading && (
        <p className="message loading-message">Loading more jobs...</p>
      )}
    </div>
  );
};

export default Jobs;
