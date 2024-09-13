export const handleBookmark = (job) => {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push(job);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};
