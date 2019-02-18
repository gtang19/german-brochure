const BLOCKS = document.querySelectorAll(".container .content-wrap")
const NAV = document.querySelectorAll(".nav .nav-button");


NAV.forEach((content,i) => {
  content.addEventListener("click", function(){
    BLOCKS.forEach(item => {
      item.style.display = "none";
    });
    BLOCKS[i].style.display = "block";
  });
})
