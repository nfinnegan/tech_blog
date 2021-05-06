const newPostHandler = async (event) => {
  event.preventDefault();

  const newTitle = document.querySelector("#newPostTitle").value.trim();
  const newContent = document.querySelector("#newPostContent").value.trim();

  if (newTitle && newContent) {
    const response = await fetch("/dashboard", {
      method: "POST",
      body: JSON.stringify({ newTitle, newContent }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); //should this be /dashboard?
    } else {
      alert("Failed to post!");
    }
  }
};

document
  .querySelector(".newPostCard")
  .addEventListener("submit", newPostHandler);
