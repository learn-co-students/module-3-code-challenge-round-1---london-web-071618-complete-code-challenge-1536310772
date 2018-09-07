class Image {
  constructor(obj) {
    this.id = obj.id
    this.container = document.getElementById('image')
    this.likeButton = document.getElementById('like_button')
    this.showLikes = document.getElementById('likes')
    this.showComments = document.getElementById('comments')
    this.commentForm = document.getElementById('comment_form')
    this.commentInput = document.getElementById('comment_input')
    this.url = obj.url
    this.name = obj.name
    this.likeCount = obj.like_count
    this.comments = obj.comments
    this.appendToPage()
    this.handleLike()
    this.handleNewComment()
  }

  appendToPage() {
    this.container.src = this.url
    this.showLikes.innerText = this.likeCount
    this.comments.forEach(comment => {
    const newLi = document.createElement('li')
    newLi.innerHTML = `<p>${comment.content}<button>x</button>`
    this.showComments.appendChild(newLi)
    newLi.lastElementChild.addEventListener('click', ()=> {
      newLi.remove()
        fetch(`https://randopic.herokuapp.com/comments/${comment.id})`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'DELETE'
        }).then(res => console.log(res))
      })
    })
  }

  handleLike() {
    this.likeButton.addEventListener('click', () => {
      this.likeCount ++
      this.showLikes.innerText = this.likeCount
      fetch('https://randopic.herokuapp.com/likes', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          image_id: this.id
        })
      }).then(res => res.json()).
      then(json => console.log(json))
    })
  }

  handleNewComment() {
    this.commentForm.addEventListener('submit', (e) => {
      fetch('https://randopic.herokuapp.com/comments', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          image_id: this.id,
          content: this.commentInput.value
        })
      }).then(res => res.json()).
      then(json => console.log(json))
    })
  }
}
