document.addEventListener('DOMContentLoaded', function() {

  const imageId = 6 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageCardSelector = document.querySelector('#image_card #image')
  const nameSelector = document.querySelector('#image_card #name' )
  const formSelector = document.querySelector('#comment_form' )
  const formField = formSelector.querySelector('#comment_input')
  const formComments = document.querySelector('#comments')
  const likeBtn = document.querySelector('#like_button')

  let commentContainer = []

  formSelector.addEventListener('submit', ev => {
    ev.preventDefault()
    console.log("I'm working!")
    comment = formField.value

    if (comment !== "")
    {
      addComment(comment)
    }
    
  })

  likeBtn.addEventListener('click', ev =>{
    console.log("I'm working too!")


    item = {
      image_id: 6
    }

  })

  function fetchData (data) {
    return fetch(data).then( resp => resp.json())
  }

  fetchData(imageURL).then( obj => {
    console.log(obj.comments)
    imageCardSelector.src = obj.url
    nameSelector.innerText = obj.name
    commentContainer = obj.comments
    displayComments(commentContainer)
  })

  function displayComments (commentContainer) {
    commentContainer.forEach( comment => console.log(comment.content))
  }

  function addComment (comment) {
    let newComment = document.createElement('li')
    newComment.innerText = comment

    item = {
      image_id: 6,
      content: comment
    }

    formComments.appendChild(newComment)
    post(commentsURL, item)
  }
  
  function post (link, item) {

    options = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }

    return fetch(link, options)

  }

  function patch (link, item) {

    options = {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }

    return fetch(link, options)
    
  }

})

