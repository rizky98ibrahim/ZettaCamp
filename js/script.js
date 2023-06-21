// ! Function to toggle the visibility of the dropdown menu

// Retrieve the dropdown button and the dropdown menu
const dropdownButton = document.getElementById("dropdownCommentButton");
const dropdownMenu = document.getElementById("dropdownComment");

// Add event listener to the dropdown button
dropdownButton.addEventListener("click", function () {
  // Check if the dropdown menu is visible
  const isDropdownVisible = dropdownMenu.style.display === "block";

  // Toggle the visibility of the dropdown menu
  if (isDropdownVisible) {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

const postedDate = document.getElementById("postedDate");
const commentDate = document.getElementById("commentDate");

// ! Function to get the current date and time
// Get the current date and time
const now = new Date();

// Retrieve the past 30 minutes
const thirtyMinutes = new Date(now.getTime() - 30 * 60000);
// Retrieve the past 20 minutes
const twentyMinutes = new Date(now.getTime() - 20 * 60000);

// Calculate the time difference between now and 30 minutes ago
const timeThirtyMinutes = Math.floor(
  (now.getTime() - thirtyMinutes.getTime()) / 60000
);

// Calculate the time difference between now and 20 minutes ago
const timeTwentyMinutes = Math.floor(
  (now.getTime() - twentyMinutes.getTime()) / 60000
);

// Display the result in the element
postedDate.textContent = `${timeThirtyMinutes} minutes ago`;
commentDate.textContent = `${timeTwentyMinutes} minutes ago`;

// ! Function to toggle the visibility of the reply form
const replyButton = document.getElementById("replyButton");
const commentForm = document.getElementById("commentForm");

// Add event listener to the reply button
replyButton.addEventListener("click", () => {
  replyButton.classList.add("hidden");
  commentForm.classList.remove("hidden");
});

// ! Function to post a comment
const postCommentButton = document.getElementById("postCommentButton");
const commentTextarea = document.getElementById("commentTextarea");

// Add event listener to the post comment button
postCommentButton.addEventListener("click", () => {
  const comment = commentTextarea.value;

  // TODO : Kirim komentar ke server
  console.log("Comment:", comment);

  // Reset the comment textarea
  commentTextarea.value = "";
  replyButton.classList.remove("hidden");
  commentForm.classList.add("hidden");
});
