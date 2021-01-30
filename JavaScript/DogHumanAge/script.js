console.log("Calculate dog's years");

    function dogYears(type, age){
        if(type === "human"){
            return age * 7;
        } else if(type === "dog"){
            return age / 7;
        } else {
            return "invalid input";
        }
    }
    
    let userTypeInput = prompt("Write dog or human");
    let userAgeInput = parseInt(prompt("Write the year"));
    console.log(dogYears(userTypeInput,userAgeInput));
    // Presmetkite mi izlagaat,ama ne mi teknuva kako da napravam na primer 3 human years equals to 21 dog years da mi pisuva u console.log, ne mi ide da go sklopam nekako, nemam idea :)