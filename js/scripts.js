// Business Logic
//tried to play with buttons for the background, havent been able to figure it out.
let btn1 = document.querySelector("btn-1");
let btn2 = document.querySelector("btn-2");
let btn3 = document.querySelector("btn-3");

btn1.addEventListener("click", () =>{
  document.body.style.backgroundImage = "url('images/1.png')"
});

btn2.addEventListener("click", () =>{
  document.body.style.backgroundImage = "url('images/2.png')"
});

btn3.addEventListener("click", () =>{
  document.body.style.backgroundImage = "url('images/3.jpg')"
});

function handleTest(event) {
  event.preventDefault();
  const operator = document.querySelector("input[name='operator']:checked").value;
}

  let result;
  if (operator === "Yes1" && "Yes4") {
    result = "You should look into C#!";
  } else if (operator === "Yes1" && "Yes2") {
    result = "You should look into java script!";
  } else if (operator === "Yes2" && "Yes3") {
    result = "You should look into Python!";
  } else if (operator === "Yes3" && "Yes4") {
    result = "You should look into Ruby!";
  } else if (operator === "Yes5") {
    result = "You should look into C++!";  
  }
    else {return}
      result = "You should learn Java Script as you can never go wrong with it!"

  document.getElementById("output").innerText = result;


window.addEventListener("load", function() {
  const form = document.getElementById("Test");
  form.addEventListener("submit", handleTest);
});