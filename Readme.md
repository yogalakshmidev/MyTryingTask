Digital Clock Display..
In this the time is displayed on the screen using Js

 let h= new Date().getHours();
  let m= new Date().getMinutes();
  let s = new Date().getSeconds();

  
  h =  h <10 ? "0"+h : h;
  m =  m <10 ? "0"+m : m;
  s =  s <10 ? "0"+s : s;

  setTimeout(()=>{
updateClock();
  },1000)
    }  

 updateClock();