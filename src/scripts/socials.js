const phoneIcon = document.querySelector('.fa-square-phone');
const phone = document.querySelector(".phone");

const emailIcon = document.querySelector(".fa-envelope");
const email = document.querySelector(".email");

function showPhone() {
    phoneIcon.addEventListener("click", () => {
    
      if (phone.style.display === "none") {
        phone.style.display = "block";
      } else {
        phone.style.display = "none"
      }
    
    })
    
}

function showEmail() {
    emailIcon.addEventListener("click", () => {
    
      if (email.style.display === "none") {
        email.style.display = "block";
      } else {
        email.style.display = "none"
      }
    
    })
    
}

showPhone();
showEmail();