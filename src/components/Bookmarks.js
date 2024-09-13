import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedJobs(savedBookmarks);
  }, []);

  return (
    <div>
      {bookmarkedJobs.length === 0 ? (
        <p>No bookmarked jobs.</p>
      ) : (
        bookmarkedJobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
};

export default Bookmarks;
