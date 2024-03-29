function showDrop() {
  document.getElementById("dropdownList").classList.toggle("show");
  document.querySelector(".drop-btn").classList.add("transform")
}
  
window.onclick = function(e) {
  if (!e.target.matches('.drop-btn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.querySelector(".drop-btn").classList.remove("transform")
      }
    }
  }
}

document.querySelector(".drop-btn").addEventListener("click", showDrop)