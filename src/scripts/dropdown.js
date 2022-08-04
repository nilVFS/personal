function showDrop() {
    document.getElementById("dropdownList").classList.toggle("show");
}
  
window.onclick = function(e) {
    if (!e.target.matches('.drop-btn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}