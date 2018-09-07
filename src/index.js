const imageContainer = document.querySelector("#image")
const nameContainer = document.querySelector("#name")
const likesConatiner = document.querySelector("#likes")
const commentsContainer = document.querySelector("#comments")
const likeButton = document.querySelector("#like_button")
const commentForm = document.querySelector('#comment_form')
const input = document.querySelector('#comment_input')


document.addEventListener('DOMContentLoaded', function() {

  const imageId = 11 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  getImage(imageURL)



})

function getImage(url){
  fetch(url)
  .then(resp => resp.json())
  .then(json => {
    appendImg(json)
  })
}

function appendImg(imgObj){
  imageContainer.src = imgObj.url
  nameContainer.innerText = imgObj.name
  likesConatiner.innerText = imgObj.like_count
  commentsContainer.innerHTML = showComments(imgObj.comments)

  likeButton.addEventListener('click', function(){
    ++imgObj.like_count
    likesConatiner.innerText = imgObj.like_count
    updateImg(imgObj)
  })

  commentForm.addEventListener('submit', function (event) {
    event.preventDefault()
    imgObj.comments.push({content:input.value})
    commentsContainer.innerHTML = showComments(imgObj.comments)
    input.value = ""
    updateComments(imgObj)
  })

}

function showComments(list) {
  let content = ""
  list.forEach(comment =>{
    content += `<li>${comment.content}</li>`
  })
  return content
}

function updateImg(obj) {
  fetch('https://randopic.herokuapp.com/likes', {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({image_id: 11})
  })
}

function updateComments(obj) {
  fetch('https:randopic.herokuapp.com/comments', {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin',
    },
    body: JSON.stringify({image_id: 11, content: `${obj.comments}`})
  })
}
