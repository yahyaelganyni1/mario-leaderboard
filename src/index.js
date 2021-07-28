/* eslint-disable */
import './style.css';

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8hJ4QD4zPJVXkNmwSOKJ/scores/';

const userInput = document.getElementById('user-input');
const scoreInput = document.getElementById('score-input');
const form = document.getElementById('form');
const scoreList = document.getElementById('score-list');
const refreshBtn = document.getElementById('refresh');

const listElement = (user, number) => {
  const li = document.createElement('li');
  li.innerText = `${user} : ${number}`;
  scoreList.appendChild(li);

  userInput.innerText = '';
  scoreInput.innerText = '';
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify({
      user: userInput.value,
      score: scoreInput.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

  window.location.reload();
}),
  fetch(apiURL)
    .then((response) => response.json())
    .then((json) => {
      json.result.forEach((element) => {
        listElement(element.user, element.score);
      });
    });

fetch(apiURL).then((response) => response.json());

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});
