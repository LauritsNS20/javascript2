function getJoke() {

    fetch("https://pokeapi.co/api/v2/", {
        headers: {
         "accept": "application/json"
        },
        method: "GET" // optional 
    })
    .then(function(response) {
      if(response.status === 200) {
        return response.json()
      }
    })
    .then(function(result) {
        const amIaJoke2u = document.querySelector(".amIaJoke2u")
        amIaJoke2u.innerText = result.joke
    })
}

const button = document.querySelector(".jokeButton")

button.addEventListener("click", getJoke)

 



// en asyncron function
//setTimeout(function(){
   // console.log
//}, 5000)


//function myDisplayer(something) {
   // console.log(something)
//}

//function myCalculater(num1, num2, callback) {
 //   let sum = num1 + num2
 //   callback(sum)
//}

//myCalculater(3, 7781, function(something){
//    console.log(something)
//})