// Iteration 1: Names and Input

let hacker1 = "Marco"

console.log("The driver's name is " + hacker1);

let hacker2 ="Koji"


console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

function compareNames(name1, name2) {
  if (name1.length > name2.length) {
    return("The driver has the longest name, it has " + name1.length +" characters")
  } else if (hacker1.length < hacker2.length) {
    return("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
  } else {
    return("Wow, you both have equally long names, " + hacker1.length + " characters!")
  }

} 

  let result = compareNames("Marco", "Koji");

  console.log(result);

// Iteration 3: Loops

function nameWithSpace(name) {
  let nameModified = "";
  
  for (var i = 0; i < name.length; i++) {
    nameModified = nameModified + " " + name.charAt(i).toUpperCase()
  }
  
  nameModified = nameModified.substring(1)
  
  return nameModified
  
}



console.log(nameWithSpace("Marco"));

function nameReverse(name) {
  let nameModified = "";
  
  for (var i = name.length - 1; i >= 0; i--) {
    nameModified = nameModified + name.charAt(i);
}
  
  return nameModified
  
}

console.log(nameReverse("Koji"));


function lexicographicOrder(name1, name2) {
   
    if (name1 > name2) {
        return ("The driver's name goes first.");
    }
     if (name1 < name2) {
        return ("Yo, the navigator goes first definitely.");
    }
    
    else {
        return ("What?! You both have the same name?");
    }
                
}
  
  let result1 = lexicographicOrder("Marco", "Koji");
  
  console.log(result1);

