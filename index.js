const imageContainerE1=  document.querySelector(".image-container");
const prevE1= document.getElementById("prev");
const nextE1 = document.getElementById("next");

let x=0;
let timer;
prevE1.addEventListener("click",()=>{
x = x + 45;
// clearTimeout(timer);
console.log("x value in previous button is X",+x );
updateGallery();
});

nextE1.addEventListener("click",()=>{
  x = x - 45;
  clearTimeout(timer);
  console.log("x value in next button is X"+x );
  updateGallery();
  });
function updateGallery1(){
imageContainerE1.style.transform = `perspective(1000px) rotateY(${x}deg)`;

timer = setTimeout(()=>{
 x = x - 45;
updateGallery1();
},3000)
}

function updateGallery(){
  imageContainerE1.style.transform = `perspective(1000px) rotateY(${x}deg)`;

}

updateGallery1();

