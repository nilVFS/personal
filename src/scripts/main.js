window.onwheel = e => {
    if(e.deltaY >= 0){
      document.querySelector("header").style.display = "none";
    } else {
        document.querySelector("header").style.display = "flex";
    }
}

const myName = "Владислав Низьев";
let i = 0;

function typeWriter() {
    if (i < myName.length) {
      document.querySelector(".name").innerHTML += myName.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

document.body.addEventListener("load", typeWriter());

