const url = "https://students.netoservices.ru/nestjs-backend/poll";

const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.getElementById("poll__answers");

const getQuestion = function() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
  
  xhr.onload = function() {
    
    const question = xhr.response;
    let title = question["data"]["title"];
    let answers = question["data"]["answers"];
    
    pollTitle.textContent = title;
    
    for (id in answers) {
      pollAnswers.insertAdjacentHTML("beforeend", `
      <button class="poll__answer">
        ${answers[id]}
      </button>
      `);
    };
    
    const btn = Array.from(document.querySelectorAll(".poll__answer"));

    btn.forEach(element => {

      element.addEventListener("click", (event) => {
        event.preventDefault();

        alert("Спасибо, ваш голос засчитан!");
        
        pollAnswers.innerHTML = "";
        pollTitle.textContent = "";
        
        getQuestion();
      });
    });
  };
};

getQuestion();