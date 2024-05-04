const music = new Audio("so.mp3");

function check(){
    fetch("https://quintessential-star-waltz.glitch.me/check")
    .then(response =>{
        if (!response.ok){
            console.log("error")
        }else{
            return response.json()
        }
    })
    .then(data =>{
        console.log(data);
        if (data.calling === true){
            music.play()
        }
    })
}

setInterval(check,5000)