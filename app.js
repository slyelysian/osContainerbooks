console.log("loaded!")

const demoform = document.querySelector("form")
const submit = document.querySelector("input")
const messageOne = document.querySelector("#messageDemo")


demoform.addEventListener("submit", (e) => {
    e.preventDefault() //no refresh bro
    const volume = submit.value
    if(volume>7||volume<1){
        messageOne.textContent="error , not publish"
    } else {
        {
            fetch(`/books/${volume}`).then((response) => {
                response.json().then((data) => {
                    if (data.error) {
                        messageOne.textContent = data.error
                    } else {
                        messageOne.textContent = "got volume : "+ volume +"\n"+"name : "+data.name 
                    }
                })
            })
        }
    }

    messageOne.textContent = demoword

})