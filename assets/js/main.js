// Navigation Bar Declaration
let header = $(`
<nav class="navbar navbar-expand-lg navbar-light nav1" style="z-index: 9999;margin-bottom:5px;" id="navbar">
  <a class="navbar-brand brand-logo" href="#"><img src="./assets/images/logo.png"></a>
  <button class="navbar-toggler res-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <b><a class="nav-link text-white" href="index.html">Home</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link text-white" href="index.html#about-intro">About</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link text-white" href="index.html#team">Team</a></b>
      </li>
      <li class="nav-item active">
        <b><a class="nav-link text-white" href="editor.html">Editor</a></b>
      </li>
    </ul>
  </div>
</nav>`);
// Footer Declaration
let footer = $(`
<footer>
  <div>Made with ❤️</div>
</footer>`);
// Dynamically loading navigation bar and footer
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//sticky navbar

window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


// Remove the spaces from the entered and generated code
function removeSpaces(string) {
  return string.split(" ").join("");
}

const projMaintainers = document.querySelector(".projectMaintainers");
//Data for Project Maintainers
const maintainerSection = [
  {
    image: "assets/images/team/sohail_saifi.jpg",
    name: "Sohail Saifi",
    title: "Lead Developer",
    github: "https://github.com/Sohailsaifi",
    linkedin: "https://www.linkedin.com/in/sohail-saifi-794498154/",
    imgclass: "image-1"
  }
];

const maintainerInfo = () => {
  let output = "";
  maintainerSection.forEach(
    ({ title, image, github, linkedin, name, imgclass}) =>
      (output += `    
      <div class="${imgclass} col-md-6 centeralign">
      <div class="profile-container">
       <div class="profile-wrapper">
         <div class="profile-card">
          <img src="${image}" alt="profile pics"> 
          <h4>${name}</h4>
          <h5>${title}</h5>
          <div class="icons">
            <a href="${github}" class="fa fa-github"></a>
            <a href="${linkedin}" class="fa fa-linkedin"></a>
          </div> 
         </div>
        </div>
      </div>
      </div>
    `)
  );
  projMaintainers.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", maintainerInfo);


