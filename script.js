let slidermenus = document.querySelector(".slidermenus");
let li = document.querySelectorAll(".menus ul li");

let index_value = 0;
let left_position = 0;

li.forEach((item , index) => {
        
slidermenus.style.width = li[0].clientWidth + "px";
slidermenus.style.left = left_position + "px";

item.onclick = function(){
        slidermenus.style.width = item.clientWidth + "px";        
        index_value = index;
        get_left_position();
        slidermenus.style.left = left_position + "px";
        left_position = 0;
    }
});

function get_left_position(){
    for (let i = 0; i < index_value; i++) {
        const element = li[i];
        left_position += element.clientWidth;
    }
}








// achivemet section responsive cout up 



let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});