// Business Logic
  
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

// User Interface Logic

    let result;
      if (answer1 === "1" && answer2 === "2" && answer3 === "3" && answer4 === "1" && answer5 === "2") {
        result = "You should look into Python! Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.";
      } else if (answer1 === "2" && answer2 === "3" && answer3 === "1" && answer4 === "2" && answer5 === "3") {
        result = "You should look into java script! JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.";
      } else if (answer1 === "3" && answer2 === "1" && answer3 === "2" && answer4 === "3" && answer5 === "1") {
        result = "You should look into C++! The programming language known as C++ (or “C-plus-plus”) is a general purpose coding language which has been used for game programming, software engineering, data structures, developing browsers, operating systems, applications, and more for over forty years.";  
      } else {
        result = "You should look into java script! Check out Epicodus for a great coding school! JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well."
    }
  
    document.getElementById("output").innerText = result;
    });
  });