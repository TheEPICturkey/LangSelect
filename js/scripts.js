// Business Logic

  /*
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
*/
  // let btn = document.querySelector(btn);

  // btn.addEventListener("click")

  // const operator = document.querySelector("input[name='operator']:checked").value;

  
  // function handleTest(event) {

  //   let result;
  //   if (operator === "1") {
  //     result = "Java";
  //   } else if (operator === "2") {
  //     result = "You should look into java script!";
  //   } else if (operator === "3") {
  //     result = "You should look into C++!";  
  //   } else {
  //     result = "You should look into java script!"
  //   }
  
  //   document.getElementById("output").innerText = result;
  // }
  
  
  window.addEventListener("load", function() {
    const form = document.getElementById("Test");
    form.addEventListener("submit", function(event) { 
      event.preventDefault();
      const answer1 = document.querySelector("input[type=radio][name=Q1]:checked").value;
      const answer2 = document.querySelector("input[type=radio][name=Q2]:checked").value;
      const answer3 = document.querySelector("input[type=radio][name=Q3]:checked").value;
      const answer4 = document.querySelector("input[type=radio][name=Q4]:checked").value;
      const answer5 = document.querySelector("input[type=radio][name=Q5]:checked").value;
      console.log(answer1, answer2, answer3, answer4, answer5)

    let result;
      if (answer1 === "1" && answer2 === "2" && answer3 === "3" && answer4 === "1" && answer5 === "2") {
        result = "You should look into Python!";
      } else if (answer1 === "2" && answer2 === "3" && answer3 === "1" && answer4 === "2" && answer5 === "3") {
        result = "You should look into java script!";
      } else if (answer1 === "3" && answer2 === "1" && answer3 === "2" && answer4 === "3" && answer5 === "1") {
        result = "You should look into C++!";  
      } else {
        result = "You should look into java script!"
    }
  
    document.getElementById("output").innerText = result;
    });
  });