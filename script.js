
function java() {
    var tag = document.getElementById("project");
    tag.innerHTML = '<div class="project-card"> <h3 class="project-title">DoublyLinkedList</h3> <a href="https://github.com/Priyadharshini3049/DoublyLinkedList"> <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240318174216/Doubly-Linked-List-in-Data-Structure.webp" class="project-img"> </a> </div><div class="project-card"> <h3 class="project-title">Library Management System</h3> <a href="https://github.com/Priyadharshini3049/My-Portfolio-Projects"> <img src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png" class="project-img"> </a> </div> <div class="project-card"> <h3 class="project-title">CodeAiD</h3>  <a href="https://github.com/mathavans628/CodeVision.git">  <img src="codeAiD.png"  class="project-img">  </a> </div> '
}

function js() {
    var tag = document.getElementById("project");
    tag.innerHTML = '<div class="project-card"> <h3 class="project-title">Virtual Piano</h3> <a href="https://priyaas-6578-8443.zcodeusers.in/Js_Final_Project1/"> <img src="piano.png" class="project-img">  </a> </div>'
}

function html() {
    var tag = document.getElementById("project");
    tag.innerHTML = '<div class="project-card"> <h3 class="project-title">Indoor Plants</h3> <a href="https://priyaas-6578-8443.zcodeusers.in/FinalProject/firstpage.html"> <img src="https://cdn.shopify.com/s/files/1/0626/3537/6880/files/indoor-plants-interesting-facts-zz-plant.webp?v=1686672762" class="project-img"> </a> </div>'
}

function scratch() {
    var tag = document.getElementById("project");
    tag.innerHTML = '<div class="project-card"> <h3 class="project-title">Scratch</h3> <a href="https://scratch.mit.edu/projects/1041085798/"> <img src="scratch.png" class="project-img"> </a> </div> <div class="project-card"> <h3 class="project-title">ShootingGame</h3> <a href="https://scratch.mit.edu/projects/1041085798/"> <img src="./images/ShootingGame.png" class="project-img">  </a>   </div>'
}

function allProjects(){
    var tag = document.getElementById("project");
    tag.innerHTML = 
    '<div class="project-card">  <h3 class="project-title">DoublyLinkedList</h3> <a href="https://github.com/Priyadharshini3049/DoublyLinkedList">  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240318174216/Doubly-Linked-List-in-Data-Structure.webp" class="project-img"> </a> </div>  <div class="project-card"> <h3 class="project-title">Library Management System</h3>  <a href="https://github.com/Priyadharshini3049/My-Portfolio-Projects">   <img src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png" class="project-img">  </a>  </div> <div class="project-card"> <h3 class="project-title">CodeAiD</h3>  <a href="https://github.com/mathavans628/CodeVision.git">  <img src="codeAiD.png"  class="project-img">  </a> </div> <div class="project-card">  <h3 class="project-title">Virtual Piano</h3>  <a href="https://priyaas-6578-8443.zcodeusers.in/Js_Final_Project1/"> <img src="piano.png" class="project-img"> </a> </div> <div class="project-card"> <h3 class="project-title">Indoor Plants</h3> <a href="https://priyaas-6578-8443.zcodeusers.in/FinalProject/firstpage.html"> <img src="https://cdn.shopify.com/s/files/1/0626/3537/6880/files/indoor-plants-interesting-facts-zz-plant.webp?v=1686672762" class="project-img">  </a> </div> <div class="project-card"> <h3 class="project-title">Scratch</h3> <a href="https://scratch.mit.edu/projects/1041085798/"> <img src="scratch.png" class="project-img"> </a> </div> <div class="project-card"> <h3 class="project-title">ShootingGame</h3> <a href="https://scratch.mit.edu/projects/1040342350/"> <img src="./images/ShootingGame.png" class="project-img"> </a> </div>'
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button1");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            buttons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
