// const offBtn=document.getElementById('off-btn');
// const off=document.getElementById('off');
// offBtn.addEventListener('click',function(event){  
//     if(off.style.display ==='none'){
//         off.style.display = 'block';
//     }
//     else{
//         off.style.display = 'none';
//     }

// })

document.body.addEventListener('click', function (event) {
    const offBtn = document.getElementById('off-btn');
    const off = document.getElementById('off');
    const menu1 = document.getElementById('menu1');
    const menu2 = document.getElementById('menu2');
    const menu3 = document.getElementById('menu3');
    const menu4 = document.getElementById('menu4');
    const menu5 = document.getElementById('menu5');
    const menu6 = document.getElementById('menu6');
    const menu7 = document.getElementById('menu7');
    const menu8 = document.getElementById('menu8');
    const range = document.getElementById('range');
    if (event.target.parentNode === offBtn) {
        if (off.style.display === 'none') {
            off.style.display = 'block';
        }
        else {
            off.style.display = 'none';
        }
    }
    else{
        if(event.target.parentNode!==menu1 && event.target.parentNode!==menu2 &&
            event.target.parentNode!==menu3 && event.target.parentNode!==menu4 &&
            event.target.parentNode!==menu5 && event.target.parentNode!==menu6 &&
            event.target.parentNode!==menu7 && event.target.parentNode!==menu8 &&
            event.target!==menu1 && event.target!==menu2 &&
            event.target!==menu3 && event.target!==menu4 &&
            event.target!==menu5 && event.target!==menu6 &&
            event.target!==menu7 && event.target!==menu8 &&
            event.target.parentNode!==range && event.target!==range
            ){
            off.style.display = 'none';
        }
    }
})