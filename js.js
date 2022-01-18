let randomNumber ;

const computerchoice  = ["STEN", "SAX", "PÅSE"];
let ichoose;
let myname;
let computerscore = 0;
let myscore = 0;


// DOM elements, de som skriver ut värde/text på hemsidan
const btn = document.querySelector("button");
const namn = document.querySelector(".myname");
const message = document.querySelector(".computerchoice");
const score = document.querySelector(".myscore");
const text = document.querySelector(".ichoose");
const Sten = document.querySelector(".Sten");
const Sax = document.querySelector(".Sax");
const Påse = document.querySelector(".Påse");
const result = document.querySelector(".result");
const cs = document.querySelector(".computerscore");
const knapp = document.querySelector(".restart")


Sten.addEventListener("click", function () {
    ichoose = "STEN";
    console.log(ichoose);
    startGame();
    text.innerHTML =  (myname) +  " valde: STEN";
    point();
    

    
});

Sax.addEventListener("click", function () {
    ichoose = "SAX"
    console.log(ichoose)
    startGame();
    text.innerHTML = (myname) +  " valde: SAX"
    point();
   

});

Påse.addEventListener("click", function () {
    ichoose = "PÅSE"
    console.log(ichoose)
    startGame();
    text.innerHTML =  (myname) +  " valde: PÅSE"
    point();
    


});

btn.addEventListener("click", function () {
    myname = document.querySelector("input").value
    console.log(document.querySelector("input").value);
    namn.innerHTML = (myname);
    


});




function startGame() {
    randomNumber = Math.round(Math.random()* 2);
    console.log(computerchoice[randomNumber]);
    message.innerHTML = "Motståndarens val: " + (computerchoice[randomNumber]);
    
}

function point(){
    if(ichoose == "STEN" && computerchoice[randomNumber] == "STEN"){
        console.log("LIKA")
    
        

    }
    else if(ichoose == "STEN" && computerchoice[randomNumber] == "SAX"){
        console.log(ichoose = "1 poäng")
        myscore += 1;
        score.innerHTML = myname + " har " + myscore + " antal poäng";
      
    }
    else if(ichoose == "STEN" && computerchoice[randomNumber] == "PÅSE"){
        console.log("Motståndare: 1 poäng")
        computerscore += 1;
        cs.innerHTML = "Motståndare har " + computerscore + " antal poäng";
       
        
    }
    else if(ichoose == "SAX" && computerchoice[randomNumber] == "SAX"){
        console.log("LIKA")
       
       
    
    }
    else if(ichoose == "SAX" && computerchoice[randomNumber] == "STEN"){
        console.log("Motståndaren: 1 poäng")
        computerscore += 1;
        cs.innerHTML = "Motståndare har " + computerscore + " antal poäng";
       
    
    }
    else if(ichoose == "SAX" && computerchoice[randomNumber] == "PÅSE"){
        console.log(ichoose = "1 poäng")
        myscore += 1
        score.innerHTML = myname + " har " + myscore + " antal poäng";
       
        
    }
    else if(ichoose == "PÅSE" && computerchoice[randomNumber] == "STEN"){
        console.log(ichoose = "1 poäng")
        myscore += 1
        score.innerHTML = myname + " har " + myscore + " antal poäng";
        
        
    }
    else if(ichoose == "PÅSE" && computerchoice[randomNumber] == "SAX"){
        console.log("Motståndaren: 1 poäng")
        computerscore += 1;
        cs.innerHTML = "Motståndare har " + computerscore + " antal poäng";
        
    }
    else if(ichoose == "PÅSE" && computerchoice[randomNumber] == "PÅSE"){
        console.log("LIKA")
       
    }
win();

}

// function win 
function win(){
    // kollar om myscore är 3
    if(myscore === 3){
        alert("DU VANN")
    }
    else if(computerscore === 3){
        alert("MOTSTÅNDAREN VANN")
    }
    
}

knapp.addEventListener("click", function (){
myscore = 0;
score.innerHTML = myname + " har " + myscore + " antal poäng";
computerscore = 0;
cs.innerHTML = "Motståndare har " + computerscore + " antal poäng";
})


