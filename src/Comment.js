class Comment {
  addComment(url) {
    const commentsList = document.querySelector("#comments")
    const input = document.querySelector("#comment_input")
    const newComment = document.createElement("li")
    newComment.innerText = input.value
    commentsList.append(newComment)
    input.value = ""

    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({image_id:10, content: newComment.innerText})
    })
  }
}
