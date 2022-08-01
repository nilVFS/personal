const frontCert = document.querySelector(".btn-front");
const certificate = document.querySelector(".course-certificate");

frontCert.addEventListener("click", () => {
    certificate.style.display = "flex";
})

certificate.addEventListener("click", () => {
    certificate.style.display = "none";
})