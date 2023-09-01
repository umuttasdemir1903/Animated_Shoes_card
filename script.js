const circle = document.querySelector('.color-option');
const btn = document.querySelector('#btn');
const circles = document.querySelector('.circles')
const priceNumElement = document.querySelector(".price_num");
const circlesElements = document.querySelectorAll(".circle");


circle.addEventListener('click',(e)=>{
    let target = e.target
    if (target.classList.contains('circle')) {
        circle.querySelector('.active').classList.remove('active')
        target.classList.add('active')
        document.querySelector('.main-images .active').classList.remove('active')
        document.querySelector(`.main-images .${target.id}`).classList.add('active')
    }
})

btn.addEventListener('click',()=>{
    alert('Added to cart')
})


circlesElements.forEach((circleElement) => {
  circleElement.addEventListener("click", (event) => {
    const circleId = event.target.id;

    switch (circleId) {
      case "blue":
        priceNumElement.textContent = "$70.00 dollar";
        break;
      case "yellow":
        priceNumElement.textContent = "$80.00 dollar";
        break;
      case "pink":
        priceNumElement.textContent = "$90.00 dollar";
        break;
    }
  });
});