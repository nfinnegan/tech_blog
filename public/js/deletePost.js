const deletePostHandler = async (event) => {
  event.preventDefault();

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(id);
  if (id) {
    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    // if (response.ok) {
    //   document.location.replace("/dashboard");
    // } else {
    //   alert("Failed to delete!");
    // }
  }
};

document
  .querySelector(".deleteBtn")
  .addEventListener("submit", deletePostHandler);
