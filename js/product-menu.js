const offBtn = document.getElementById('off-btn');
const closeBtn = document.getElementById('close-btn');
const sideBar = document.getElementById('see-side');
const custom = document.getElementById('custom');
offBtn.addEventListener('click', function () {
  offBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  sideBar.style.width = '100%';
  sideBar.style.transition='1.5s';

})

closeBtn.addEventListener('click', function (event) {
  offBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  sideBar.style.width = '0%';
  sideBar.style.transition = '1s';
})


const slider = document.getElementById("myinput")
const min = slider.min
const max = slider.max
const value = slider.value

slider.style.background = `linear-gradient(to right, #FFC729 0%, #FFC729 ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, #FFC729 0%, #FFC729 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
};