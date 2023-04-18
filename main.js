// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
userLikes = document.querySelectorAll(".like-glyph")
//userLikes.forEach((el) => {
//  el.addEventListener("click", updateHeart)
//})

for(const el of userLikes ) {
  el.addEventListener("click", updateHeart)
}

function updateHeart(event) {
    const hidden = document.querySelector("#modal")
    let response = mimicServerCall()
    // switch (response) { 
    // case (event.target === EMPTY_HEART):
    if (event.target.innerHTML === EMPTY_HEART) {
    response.then((success) => {
        event.target.classList.add("activated-heart")
        event.target.textContent = FULL_HEART
    }).catch((error) => {
        hidden.classList.remove("hidden")
        document.querySelector("#modal-message").textContent = error.message
        setTimeout((error) => hidden.classList.add("hidden"), 3000)
    })
    // break
    } else {
    //case (event.target === FULL_HEART):
    //  event.target.innerHTML = FULL_HEART
      response.then((success) => {
        event.target.classList.remove("activated-heart")
        event.target.textContent = EMPTY_HEART
    }).catch((error) => {
        hidden.classList.remove("hidden")
        document.querySelector("#modal-message").textContent = error.message
        setTimeout((error) => hidden.classList.add("hidden"), 3000)
    })
    //break
    }
    
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
