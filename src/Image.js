class Image {
  addImage(imageData) {
    const imageCard = document.querySelector("#image_card")
    const image = document.querySelector("#image")
    image.src = imageData.url

    const name = document.querySelector("#name")
    name.innerText = `${imageData.name}`

    const likes = document.querySelector("#likes")
    likes.innerText = `${imageData.like_count}`

    const commentsList = document.querySelector("#comments")
    imageData.comments.forEach(comment => {
      const commentEl = document.createElement("li")
      commentEl.innerText = `${comment.content}`
      commentsList.append(commentEl)
    })
  }

}
