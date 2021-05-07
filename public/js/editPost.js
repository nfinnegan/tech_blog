const editPostHandler = async (event) => {
  event.preventDefault();

  const updatedTitle = document.querySelector("#editPostTitle").value.trim();
  const updatedContent = document
    .querySelector("#editPostContent")
    .value.trim();
  console.log(updatedContent, updatedTitle);
  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (updatedTitle && updatedContent) {
    const response = await fetch(`/api/blog/${id}`, {
      method: "PUT",
      body: JSON.stringify({ updatedTitle, updatedContent }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update!");
    }
  }
};

document
  .querySelector(".editPostCard")
  .addEventListener("submit", editPostHandler);
