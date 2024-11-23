const testimonials = [
  {
    name : "christina G",
    photoUrl:"https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text:"This is simply unbelieveable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
  },
  {
    name : "Alexander D",
    photoUrl:"https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"I recently got the hp laptop and with the best configuration which is useful for me and help me to solve my task effentiently. Thank you for this brand."
  },
  {
    name:"John F. Kenady",
    photoUrl : "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text:"The latest travel website suggested by my friend is good and also they are very comfortable. We really enjoy lots of places."
  },
];

const imgE1= document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 =  document.querySelector(".username");

let index = 0;
updateTestimonial();
function updateTestimonial(){
 const {name,photoUrl,text} = testimonials[index];
 imgE1.src = photoUrl;
 textE1.innerText = text;
 usernameE1.innerText = name;
 index++;
 if(index === testimonials.length){
  index = 0;
 }
 setTimeout(()=>{
  updateTestimonial();
 },10000)
}