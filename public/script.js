import { about } from './commands/about.js';
import { education } from './commands/education.js';
import { skills } from './commands/skill.js';
import { projects } from './commands/project.js';

const message = `Welcome to AdiTya's Terminal Portfolio. Type "help" to see available commands.`;
const typedSpan = document.getElementById("typed");
const cursorSpan = document.getElementById("cursor");
let index = 0;

function typeNextChar() {
  if (index < message.length) {
    typedSpan.textContent += message[index];
    index++;
    setTimeout(typeNextChar, 80); 
  }
  else{
    cursorSpan.style.display = "none";
    setTimeout(() => {
      typedSpan.textContent = "";
      index = 0;
      typeNextChar();
    }, 2000);
  }
}

window.addEventListener("load", typeNextChar);


const commandInput = document.getElementById("command");
const outputDiv = document.getElementById("output");

commandInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const input = commandInput.value.trim();
    outputDiv.innerHTML += `<div>Adi@HackOS:-$ ${input}</div>`;
    commandInput.value = "";

    handleCommand(input);
    scrollToBottom();
  }
});

function handleCommand(cmd) {
  switch(cmd.toLowerCase()) {
    case "help":
      output(`Available commands:
- help         --show this help message
- about        --display information about Aditya
- education    --display education info 
- skills       --show skills
- projects     --show projects list
- resume       --open resume in new tab
- github       --open github profile in new tab
- linkedin     --open linkedin profile in new tab
- leetcode     --open leetcode profile in new tab
- codeforces   --open codeforces id in new tab  
- codechef     --open codechef id in new tab
- atcoder      --open atcoder profile in new tab
- gfg          --open GeeksOfGeeks profile in new tab
- contact      --display my contact information
- clear        --clear the terminal`);
      break;
    case "about":
      output("Opening about information...");
      outputHTML(about);
      break;
    case "education":
      output("Loading Education Information...");
      outputHTML(education);
      break;
    case "skills":
      output("Loading Skills...");
      outputHTML(skills);
      break;
    case "projects":
      output("Loading Projects...");
      outputHTML(projects);
      break;
    case "resume":
      output("Opening resume [https://drive.google.com/file/d/1Q8ddAoSaPyL8LOPt6W90ruTRmvsR_0mO/view?usp=drive_link]...");
      window.open("https://drive.google.com/file/d/1Q8ddAoSaPyL8LOPt6W90ruTRmvsR_0mO/view?usp=drive_link", "_blank");
      break;
    case "github":
      output("Opening GitHub [https://github.com/Aditya-aks-710]...");
      window.open("https://github.com/Aditya-aks-710", "_blank");
      break;
    case "linkedin":
      output("Opening LinkedIn [https://www.linkedin.com/in/aditya-aryan-304179252/]...");
      window.open("https://www.linkedin.com/in/aditya-aryan-304179252/", "_blank");
      break;
    case "leetcode":
      output("Opening LeetCode [https://leetcode.com/u/aditya___001/]...");
      window.open("https://leetcode.com/u/aditya___001/", "_blank");
      break;
    case "codeforces":
      output("Opening Codeforces [https://codeforces.com/profile/adi_tya_710]...");
      window.open("https://codeforces.com/profile/adi_tya_710", "_blank");
      break;
    case "codechef":
      output("Opening Codechef [https://www.codechef.com/users/grindelwald_01]...");
      window.open("https://www.codechef.com/users/grindelwald_01", "_blank");
      break;
    case "atcoder":
      output("Opening AtCoder [https://atcoder.jp/users/adi_001]...");
      window.open("https://atcoder.jp/users/adi_001", "_blank");
      break;
    case "gfg":
      output("Opening GeeksForGeeks [https://www.geeksforgeeks.org/user/adityaaripd8/]...");
      window.open("https://www.geeksforgeeks.org/user/adityaaripd8/", "_blank");
      break;
    case "contact":
      output(`Email:     adityaaryan3012@gmail.com
              Twitter:   @nubiii55924
              Instagram: @_aditya_301_`);
      break;
    case "clear":
      outputDiv.innerHTML = "";
      break;
    default:
      output("Command not found. Type 'help' to see available commands.");
  }
}

function output(text) {
  outputDiv.innerHTML += `<div>${text.replace(/\n/g, "<br>")}</div>`;
}

function outputHTML(html) {
  const modalWrapper = document.createElement("div");
  modalWrapper.innerHTML = html;
  document.body.appendChild(modalWrapper);
  commandInput.disabled = true;
}


window.closeModal = function () {
  const modal = document.querySelector(".about-modal");
  if (modal) modal.remove();
  commandInput.disabled = false;
  commandInput.focus();
};

function scrollToBottom() {
  const inputLine = document.querySelector(".input-line");
  inputLine.scrollIntoView({ behavior: "smooth", block: "end" });
}
