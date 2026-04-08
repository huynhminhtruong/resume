const text = "Hello, I'm Huynh Minh Truong";
const speed = 100;
const target = document.getElementById("typewriter");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    
    let randomSpeed = speed + Math.random() * 50;
    setTimeout(typeWriter, randomSpeed);
  } else {
    console.log("Typing sequence complete.");
  }
}

window.onload = typeWriter;