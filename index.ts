function CreateQuestion(country: any) {
  const questionContainer = document.createElement("div");
  questionContainer.classList.add("question");

  const card = document.createElement("div");
  card.classList.add("country");

  const countryName: string = country.name.common;
  const questionText = document.createElement("p");
  questionText.textContent = `Essa bandeira pertence a qual País?`;

  const lineBreak1 = document.createElement("br");

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;

  const answerInput = document.createElement("input");
  answerInput.type = "text";
  answerInput.placeholder = "Digite sua resposta";

  const lineBreak2 = document.createElement("br");

  const checkButton = document.createElement("button");
  checkButton.textContent = "Verificar Resposta";

  checkButton.addEventListener("click", () => {
    const userAnswer: string = answerInput.value.toLowerCase();
    if (userAnswer === countryName.toLowerCase()) {
      alert("Correto! 🎉");
    } else {
      alert(`Incorreto! A resposta correta é ${countryName}. 😞`);
    }
  });
  card.append(flag);
  document.querySelector("#countries").append(card);
  questionContainer.append(questionText, lineBreak1, answerInput, lineBreak2, checkButton);
  document.querySelector("#quiz").append(questionContainer);
}

async function getCountry() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    const randowCountry = countries[Math.floor(Math.random() * countries.length)];
    CreateQuestion(randowCountry);
  } catch (error) {
    console.error("Erro ao recuperar dados da API: ", error);
  }
}

getCountry();

const btn = document.getElementById("next");
btn.addEventListener("click", () => {
  document.getElementById("countries").innerHTML = "";
  document.getElementById("quiz").innerHTML = "";
  getCountry();
});
