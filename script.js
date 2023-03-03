window.addEventListener("load", function(){
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json) {
            const destination = document.getElementById("destination");
            let i=0
            destination.addEventListener("click", function(){
                destination.innerHTML = `
                    <div>
                    <h3>Planet ${json[i].name}</h3>
                    <img src=${json[i].image} height=250></img>
                    </div>
                `;
                i = (i+1) % json.length;
            });
         });
    });

 });