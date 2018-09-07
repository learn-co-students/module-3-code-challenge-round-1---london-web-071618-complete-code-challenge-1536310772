class Image {

  constructor(){
    this.id
    this.url
    this.name
    this.like_count
    this.comments = []
  }

  getImage() {
    const imageId = 3
    const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
    fetch(imageURL)
    .then(resp => resp.json())
    .then(json => {
      this.id = json.id
      this.url = json.url
      this.name = json.name
      this.like_count = json.like_count
      json.comments.forEach(comment => {
        const newComment = new Comment(comment)
        this.comments.push(newComment)
      })
    })
    .then(() => this.appendImageWithDetails())
  }

  appendImageWithDetails() {
    //render image card with image
    const imageCard = document.querySelector("#image_card")
    const img = imageCard.querySelector("img")
    img.src = this.url

    //render existing likes info
    const likes = document.querySelector("#likes")
    likes.innerText = this.like_count

    //add likes button
    const like_button = document.querySelector("#like_button")
    like_button.addEventListener("click", ()=> {
      ++likes.innerText
      ++this.like_count
      //add patch request function this.postLikes
      this.postLikes()
    })

    //render existing comments
    const commentsList = document.querySelector("#comments")
    this.comments.forEach(comment=> {
      comment.appendComment()
    } )

    //add Commenting functionality
    const commentForm = document.querySelector("#comment_form")
    const commentInput = document.querySelector("#comment_input")
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      //create new comment object
      const newComment = new Comment({content: commentInput.value})
      this.comments.push(newComment)

      //append new comment to page & post
      newComment.appendComment()
      newComment.postComment()
    })

  }

  postLikes() {
    fetch('https://randopic.herokuapp.com/likes', {
      method: "POST",
      headers:  {'Accept': 'application/json',
                 'Content-Type': 'application/json'},
      body: JSON.stringify({image_id: this.id,
                            like_count: this.like_count})
    })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

}
