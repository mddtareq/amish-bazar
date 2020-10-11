const offBtn = document.getElementById('off-btn');
const sideBar = document.getElementById('see-side');
const products = document.getElementById('all-products');
const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
offBtn.addEventListener('click', function () {
  if(width>575){
    if(sideBar.style.width ==='0px'){
      sideBar.style.transition='1.5s';
      products.style.marginLeft = '200px';
      sideBar.style.width = '200px';
    }
    else{
      sideBar.style.transition='.8s';
      sideBar.style.width = '0px';
      products.style.marginLeft = '0px';
    }
  }
  else{
    if(sideBar.style.width ==='200px'){
      sideBar.style.transition='1.5s';
      products.style.marginLeft = '0px';
      sideBar.style.width = '0px';
    }
    else{
      sideBar.style.transition='.8s';
      sideBar.style.width = '200px';
      products.style.marginLeft = '200px';
    }
  }
})



const slider = document.getElementById("myinput")
const min = slider.min
const max = slider.max
const value = slider.value

slider.style.background = `linear-gradient(to right, #FFC729 0%, #FFC729 ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, #FFC729 0%, #FFC729 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
};