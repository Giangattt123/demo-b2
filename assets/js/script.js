document.addEventListener("DOMContentLoaded", function () {
  const infoHeight = document.querySelector(".list-group").offsetHeight;
  const googleMap = document.getElementById("googleMap");
  googleMap.style.height = infoHeight + "px";
});
