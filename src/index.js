document.addEventListener('DOMContentLoaded', function() {

  const imageId = 7 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/7`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageCard = document.querySelector("#image_card")

  let object;

function fetchImageData() {
  fetch(imageURL)
    .then(resp => resp.json())
    .then(data => {
      object = data
      showImageData(data)
    })
}
fetchImageData()

function showImageData(obj){
  imageCard.innerHTML =
  `
  <img src="http://blog.flatironschool.com/wp-content/uploads/2015/10/laptop-352x200.jpg" id="7" data-id/>
  <h4 id="Turing Tables"></h4>
  <span>Likes:
    <span id="likes">${obj.like_count}</span>
  </span>
  <button id="like_button">Like</button>
  <form id="comment_form">
    <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
    <input type="submit" value="Submit"/>
  </form>
  <ul id="comments">
    <li>first comment!</li>
  </ul>
  `

}

const likeSpan = document.querySelector("#likes")

imageCard.addEventListener("click", event => {
  if (event.target.id === "like_button") {
    object.like_count += 1
    console.log(object)
    showImageData(object)
    // likeImage(obj)

  }
})

function likeImage(obj){
  fetch(likeURL, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({image_id: 7})
  })
  .then(res => res.json())
  .then(console.log)
}


let form = document.querySelector("form")
form.addEventListener("submit", event => {
  event.preventDefault()
  let comment = event.target.comment.value
  createComment(comment)
})

function createComment(comment){
  fetch(commentsURL, {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
      },
      body: JSON.stringify({image_id: 7,comment: comment})
  })
  .then(res => res.json())
  .then(data => {
    showImageData(obj)
  })
}



})
