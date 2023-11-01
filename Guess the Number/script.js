'use strict';

let secnumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is not input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 Enter a Number!';
  }
  // when guess is correct
  else if (guess === secnumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!!';
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.btn').style.backgroundColor = '#a0d191';
    document.querySelector('.guess').style.backgroundColor = '#a0d191';
    document.querySelector('.check').style.backgroundColor = '#a0d191';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secnumber;
    confetti();
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is gretater
  else if (guess > secnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You loss';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is low
  else if (guess < secnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You loss';
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is greater than 20
  if (guess > 20) {
    document.querySelector('.message').textContent =
      '🚫 Enter a Smaller Number!';
  }

  // when guess is less than 0
  if (guess < 0) {
    document.querySelector('.message').textContent =
      '🚫 Enter a Larger Number!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  let secnumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = secnumber;
  let score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#f7ee98';
  document.querySelector('.btn').style.backgroundColor = '#faf3bb';
  document.querySelector('.guess').style.backgroundColor = '#faf3bb';
  document.querySelector('.check').style.backgroundColor = '#faf3bb';
  document.querySelector('.guess').value = null;

  document.querySelector('.number').style.width = '15rem';
});
