let bar = document.getElementById("bar");
let progressText = document.getElementById("progress-text");
let progress = 0;

const video = document.getElementById("boot-video");
video.playbackRate = 1.5;

const messages = [
  "Starting system services...",
  "Loading drivers...",
  "Initializing CLI interface...",
  "Finalizing boot process..."
];

const bootMessageElement = document.getElementById("boot-messages");
let messageIndex = 0;

function typeMessage(message, index = 0) {
  if (index === 0) bootMessageElement.innerText = "";

  if (index < message.length) {
    bootMessageElement.textContent += message.charAt(index);
    setTimeout(() => typeMessage(message, index + 1), 40); 
  } else {
    messageIndex++;
    setTimeout(() => {
      if (messageIndex < messages.length) {
        typeMessage(messages[messageIndex]);
      }
    }, 400); 
  }
}

typeMessage(messages[0]);


let interval = setInterval(() => {
  if (progress >= 98) {
    progress = 100;
    bar.style.width = `${progress}%`;
    progressText.innerText = `${progress.toFixed(2)}%`;
    clearInterval(interval);

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 500);

    return;
  }

  progress += Math.random() * 5;
  if (progress > 100) progress = 100;
  bar.style.width = `${progress}%`;
  progressText.innerText = `${progress.toFixed(2)}%`;
}, 150);
