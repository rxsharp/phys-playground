// Momentum Variables
var momentum = phys.imechanics.momentum();
var mass = Math.floor((Math.random() * 10) + 1);
var velocity = Math.floor((Math.random() * 10) + 1);
var momentumAnswer = phys.mechanics.momentum(mass,velocity);

// Correct/Incorrect message
var correct = document.createElement("p");
var correctText = document.createTextNode("Correct");
correct.id = "success";
correct.appendChild(correctText);

var wrong = document.createElement("p");
var wrongText = document.createTextNode("Wrong");
wrong.id = "wrong";
wrong.appendChild(wrongText);

// Quiz question object
var quiz = {
  question: "<h3>Momentum Question</h3>"+
            "What is the momentum with mass of " + mass+
            " and the velocity is "+velocity+"?",
  input: '<form id="momentumForm"><input id="momentumInput" type="text" name="momentumInput"><input type="submit"></form>',
  info: momentum
};
document.write(quiz["question"]+quiz["input"]);

document.getElementById("momentumForm").addEventListener("submit", momentumValidate);
function momentumValidate(e) {
	e.preventDefault();
    var momentumInput = document.getElementById("momentumInput").value;
    if(momentumInput == momentumAnswer){
      document.getElementById("momentumForm").appendChild(correct)
      if(document.getElementById("wrong")){document.getElementById("momentumForm").removeChild(wrong)}
    }
    else {
      document.getElementById("momentumForm").appendChild(wrong)
      if (document.getElementById("success")){document.getElementById("momentumForm").removeChild(success)}
    }
}
