const text = "Hello, I'm Huynh Minh Truong";
const speed = 100;
const target = document.getElementById("typewriter");
const cursor = document.querySelector(".cursor");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    
    let randomSpeed = speed + Math.random() * 50;
    setTimeout(typeWriter, randomSpeed);
  } else {
    if (cursor) {
      cursor.style.display = "none"; 
    }
  }
}

window.onload = typeWriter;