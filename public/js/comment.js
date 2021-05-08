const commentPostHandler = async (event) => {
  event.preventDefault();

  const commentContent = document.querySelector("#commentContent").value.trim();
  console.log(commentContent);
  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (commentContent) {
    const response = await fetch(`/api/comments/`, {
      method: "POST",
      body: JSON.stringify({ id, commentContent }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to comment!");
    }
  }
};

document
  .querySelector(".commentBtn")
  .addEventListener("click", commentPostHandler);
