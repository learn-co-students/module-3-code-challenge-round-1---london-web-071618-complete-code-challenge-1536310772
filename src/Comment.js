let commentId = 0

class Comment {

  // {
  //     "id": 1,
  //     "content": "first comment!",
  //     "created_at": "2017-09-27T18:18:05.623Z",
  //     "updated_at": "2017-09-27T18:18:05.623Z"
  //   }

  constructor(obj) {
    this.id = ++commentId
    this.imageId = 3
    this.content = obj.content
  }

  appendComment() {
    //add comment to page
    const commentsList = document.querySelector("#comments")
    const newLi = document.createElement("li")
    newLi.innerText = this.content
    commentsList.append(newLi)

    //add delete function for each comment
    newLi.addEventListener("dblclick", () => {
      newLi.remove;
      this.deleteComment()
    })
  }

  postComment() {
    fetch('https://randopic.herokuapp.com/comments', {
      method: "POST",
      headers:  {'Accept': 'application/json',
                 'Content-Type': 'application/json'},
      body: JSON.stringify({image_id: this.imageId,
                            content: this.content})
    })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  deleteComment() {
    fetch(`https://randopic.herokuapp.com/comments/${this.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

}
