document.addEventListener('DOMContentLoaded', function() {

  const imageId = 5 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
  let pageImage

  fetch(imageURL).
  then(res => res.json()).
  then(json => {
    let pageImage = new Image(json)
    return pageImage
    })

})
