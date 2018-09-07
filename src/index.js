document.addEventListener('DOMContentLoaded', function() {

  const imageId = 4 //Enter your assigned imageId here 4

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`



function getImage() {
  return fetch("https://randopic.herokuapp.com/images/4")
    .then(resp => resp.json())
    .then(image => appendImage(image))
}

function appendImage(image) {
  const imageCard = document.querySelector('#image_card')
  // const imageEl = document.createElement('div')
  const allComments = image.comments.forEach(comment => {return comment.content})


  imageCard.innerHTML =
  `
  <img src="${image.url}">
  <h4 id="name">${image.name}</h4>
  <span>Likes:
    <span id="likes">${image.like_count}</span>
  </span>
  <button id="like_button">Like</button>
  <form id="comment_form">
    <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
    <input type="submit" value="Submit"/>
  </form>
  <ul id="comments">
    <li>${allComments}</li>
  </ul>
 </div>
  `
  const likesElement = document.querySelector('#likes')
  const likeButton = document.querySelector('#like_button')
  likeButton.addEventListener('click', event => {
    image.like_count++
    likesElement.innerText = `${image.like_count}`
  updateImageLikes()
  })


}

function submitComment() {
  let form = document.querySelector('#comment_form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    function getComments() {
    let input = document.querySelector('#comment_input')
    let newComment = {content: input.value}
    allComments.push(newComment)
  }
    updateImageComments(image)
  })
}

function addComments() {


}

function updateImageLikes(image) {
  const options = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(image)
  }
  fetch("https://randopic.herokuapp.com/images/4", options)
}

function updateImageComments(image) {
  const options = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(image)
  }
  fetch("https://randopic.herokuapp.com/images/4", options)
}



getImage()

})




const image = {
id: 4,
url: "http://blog.flatironschool.com/wp-content/uploads/2016/10/Code-Background-352x200.jpg",
name: "Info Hash",
like_count: 2,
comments: [
{
id: 205,
content: "first comment!",
image_id: 4,
created_at: "2018-09-06T21:54:16.868Z",
updated_at: "2018-09-06T21:54:16.868Z"
}
]
}
