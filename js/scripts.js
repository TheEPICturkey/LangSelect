// Business Logic
//tried to play with buttons for the background, havent been able to figure it out.
window.addEventListener('load', function); {
  const firstHeader = document.querySelector(h1);
  firstHeader.remove();

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
    if (operator === "1") {
      result = "You should look into C#!";
    } else if (operator === "2") {
      result = "You should look into java script!";
    } else if (operator === "3") {
      result = "You should look into C++!";  
    }
  
    document.getElementById("output").innerText = result;
  }
  
  
  window.addEventListener("load", function() {
    const form = document.getElementById("Test");
    form.addEventListener("submit", handleTest);
  });