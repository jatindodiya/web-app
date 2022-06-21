console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector("input")

const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

messageOne.textContent = ""
messageTwo.textContent = "Thank you."

weatherForm.addEventListener("submit", ( e ) =>{
    e.preventDefault()
    const location = search.value 

    console.log("testing " + location )

    messageOne.textContent = "Loading..."

    fetch("http://localhost:3000/weather?address="+ location ).then(( response )=>{

        response.json().then(( data )=>{

            // console.log(data) 

            if(data.error){

                console.log( data.error )
                messageOne.textContent = data.error
            }
            else{

                console.log( data.body )
                messageOne.textContent = data.body

            }
        
        })
    })

})