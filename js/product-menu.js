const offBtn=document.getElementById('off-btn');
const closeBtn=document.getElementById('close-btn');
offBtn.addEventListener('click',function(){  
    offBtn.style.display='none';
    closeBtn.style.display='block';

})

closeBtn.addEventListener('click',function(event){  
  offBtn.style.display='block';
  closeBtn.style.display='none';

})


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }