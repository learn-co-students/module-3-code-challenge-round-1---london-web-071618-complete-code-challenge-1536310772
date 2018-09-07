document.addEventListener('DOMContentLoaded', function() {
// ___________________ LIKES __________________________
  const likeURL = `https://randopic.herokuapp.com/likes/`


//  - As a user, I can click to like an image, which will increase the number of likes that image has by one.

  const likeBtn = document.querySelector('#likes')
  likeBtn.addEventListener('click', () => {
    likeBtn++
  })


  // _________________COMMENTS__________________
  // - As a user I can fill out an input fields and submit the form to add a comment to an image. I should see my new comment below any previous comments.
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const commentContainer = document.querySelector('#comments')
  const form = document.querySelector('#comment_input')


  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const commentInput = document.querySelector('#comment_input')
    createComment()
  })


  function appendComment(comment) {
    const commentsList = document.getElementById('comments')
    const comEl = document.createElement('li')
    comEl.innerText = comment
    commentContainer.append(comEl)
  }

  function appendComments(comments) {
    comments.forEch(comment =>
      appendComment(comment))
  }
  // As a user I can fill out an input fields and submit the form to add a comment to an image. I should see my new comment below any previous comments.


  // As a user, when I refresh the page, any comments or likes I have added should be persisted to the backend API and I should see my changes on the page.
  // -----------------POST-------------------
  function createComment(comment) {
    fetch(`https://randopic.herokuapp.com/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          input: input
        })
        .then(response => response.json())
        .then(comment => appendComment(comment))
    })
  }

  //___________________ IMAGES ____________________________
  const imageId = 9 //Enter your assigned imageId here

  const imageURL = document.querySelector('#image_content')
  // `https://randopic.herokuapp.com/images/${imageId}`
  const imgContent = document.querySelector('#image_content')
  const imagesArray = []

  // As a user, when the page loads I will see an image, any comments that image has, and the number of likes that image has.
  getImages()
    .then(imageContent => {
      images = imgContent
    })
  // ------------------Fetch -----------------
  function getImages() {
    return fetch('https://randopic.herokuapp.com/images/9')
      .then(resp => resp.json())
      .then(object => object.array)
  }

  function appendImage(image) {
    const imgsList = document.getElementById('image_content')
    const imgEl = document.createElement('div')
    imgEl.innerText = name
    imgContainer.append(imgEL)
    imagesArray.push(imgEl)

  }

  function appendImages(images) {
    imgs.forEach(image => appendImage(image))
  }

})
