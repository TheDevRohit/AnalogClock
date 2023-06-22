function showClock(){
   let hr = document.querySelector(".hr")
   let min = document.querySelector(".min")
   let sec = document.querySelector(".sec")

   let d = new Date()
   
   let h = d.getHours()
   let m = d.getMinutes()
   let s = d.getSeconds()

   hr.style.transform = `rotate(${30*h+m/2}deg)`
   min.style.transform = `rotate(${6*m}deg)`
   sec.style.transform = `rotate(${6*s}deg)`

   let music = new Audio('today.mp3');
   music.play();
}
setInterval(showClock ,1000)
