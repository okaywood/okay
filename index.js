const button = document.getElementById("Call");
const url = "https://quintessential-star-waltz.glitch.me/call"

button.addEventListener("click",function(){
    const outp = fetch(url)
    .then(response =>{
        if (!response.ok){
            console.log("error")
        }else{
            return response.json();
        }
    })
    .then(data =>{
        if (data.success){
            if (data.status === true){
                button.textContent = "Calling";
                button.style.backgroundColor = "#4ccf40";
                button.style.border = ""
            }else{
                button.textContent = "CALL"
                button.style.backgroundColor = "#f79e02"
                button.style.border = "none"
            }
        }
    })
})