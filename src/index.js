document.addEventListener('DOMContentLoaded', function() {

  const imageId = 10 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const myImage = new Image()

  // getImage(imageURL)
  fetch(imageURL)
  .then(res => res.json())
  .then(data => myImage.addImage(data))

  const button = document.querySelector("#like_button")

  button.addEventListener("click", event => {
  	const likesEl = document.querySelector("#likes")
    let likesNumber = likesEl.innerText
    likesNumber++
    likesEl.innerText = likesNumber
    addLikes(likeURL, likesNumber)
  })

  const form = document.querySelector("#comment_form")
  form.addEventListener("submit", event => {
    event.preventDefault()
    addComment(commentsURL)
  })
})

// function getImage(imageURL) {
//   fetch(imageURL)
//   .then(res => res.json())
//   .then(data => addImage(data))
// }

// function addImage(imageData) {
//   const imageCard = document.querySelector("#image_card")
//   const image = document.querySelector("#image")
//   image.src = imageData.url
//
//   const name = document.querySelector("#name")
//   name.innerText = `${imageData.name}`
//
//   const likes = document.querySelector("#likes")
//   likes.innerText = `${imageData.like_count}`
//
//   const commentsList = document.querySelector("#comments")
//   imageData.comments.forEach(comment => {
//     const commentEl = document.createElement("li")
//     commentEl.innerText = `${comment.content}`
//     commentsList.append(commentEl)
//   })
// }

function addLikes(url, number) {
  fetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({image_id:10})
  })
}

function addComment(url) {
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

// function changeCommentList(url, comment) {
//
// }
