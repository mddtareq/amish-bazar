// id declaration

const itemPlus=document.getElementById('item-plus');
const itemZero=document.getElementById('item-zero');
const plusProduct=document.getElementById('product-plus');
const minusProduct=document.getElementById('product-minus');

const itemPlus1=document.getElementById('item-plus1');
const itemZero1=document.getElementById('item-zero1');
const plusProduct1=document.getElementById('product-plus1');
const minusProduct1=document.getElementById('product-minus1');

// blocking display

itemZero.style.display='none';
itemPlus1.style.display='none';

// product plus

plusProduct.addEventListener('click', function (){
    const productQuantity=document.getElementById('product-item-quantity').innerText;
    const quantityNumber = parseInt(productQuantity);
    addQuantity('product-item-quantity', 1, quantityNumber);
})

plusProduct1.addEventListener('click', function (){
    const productQuantity=document.getElementById('product-item-quantity1').innerText;
    const quantityNumber = parseInt(productQuantity);
    addQuantity('product-item-quantity1', 1, quantityNumber);
})

// product minus

minusProduct.addEventListener('click', function (){
    const productQuantity=document.getElementById('product-item-quantity').innerText;
    const quantityNumber = parseInt(productQuantity);
    if(quantityNumber>1){
        addQuantity('product-item-quantity', -1, quantityNumber);
    }
    else{
        addQuantity('product-item-quantity', -1, quantityNumber);
        itemZero.style.display='block';
        itemPlus.style.display='none';
    }
    
})

minusProduct1.addEventListener('click', function (){
    const productQuantity=document.getElementById('product-item-quantity1').innerText;
    const quantityNumber = parseInt(productQuantity);
    if(quantityNumber>1){
        addQuantity('product-item-quantity1', -1, quantityNumber);
    }
    else{
        addQuantity('product-item-quantity1', -1, quantityNumber);
        itemZero1.style.display='block';
        itemPlus1.style.display='none';
    }
    
})

// add cart product

itemZero.addEventListener('click',function(){
    const productQuantity=document.getElementById('product-item-quantity').innerText;
    const quantityNumber = parseInt(productQuantity);
    addQuantity('product-item-quantity', 1, quantityNumber);
    itemZero.style.display='none';
    itemPlus.style.display='block';
})

itemZero1.addEventListener('click',function(){
    const productQuantity=document.getElementById('product-item-quantity1').innerText;
    const quantityNumber = parseInt(productQuantity);
    addQuantity('product-item-quantity1', 1, quantityNumber);
    itemZero1.style.display='none';
    itemPlus1.style.display='block';
})

// add quantity

function addQuantity(id, number, quantityNumber) {
    const updatedQuantity = quantityNumber + number;
    document.getElementById(id).innerText = updatedQuantity;
}


