const frontCert = document.querySelector(".btn-front");
const diplimaCollege = document.querySelector(".btn-diploma");
const overlay = document.querySelector(".overlay");
const image = document.querySelector(".certificate-image");
const images = {
    certificate: {
        src: "src/images/frontend.jpg",
        alt: "certificate of completion"
    },

    diploma: {
        src: "",
        alt: ""
    }
}

frontCert.addEventListener("click", () => {
    image.src = images.certificate.src;
    image.alt = images.certificate.alt;
    overlay.style.display = "flex";

})

diplimaCollege.addEventListener("click", () => {
    image.src = images.diploma.src;
    image.alt = images.diploma.alt;
    overlay.style.display = "flex";

})

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
})

