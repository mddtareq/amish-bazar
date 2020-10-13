const plus = document.getElementById('plus');
const plus1 = document.getElementById('cartPlus1');
const plus2 = document.getElementById('cartPlus2');
const plus3 = document.getElementById('cartPlus3');
const plus4 = document.getElementById('cartPlus4');

const minus = document.getElementById('minus');
const minus1 = document.getElementById('cartMinus1');
const minus2 = document.getElementById('cartMinus2');
const minus3 = document.getElementById('cartMinus3');
const minus4 = document.getElementById('cartMinus4');

const itemTotal = document.getElementById('itemTotal');
const itemTotal1 = document.getElementById('itemTotal1');
const itemTotal2 = document.getElementById('itemTotal2');
const itemTotal3 = document.getElementById('itemTotal3');
const itemTotal4 = document.getElementById('itemTotal4');

const subTotal1 = document.getElementById('subTotal1');
const subTotal2 = document.getElementById('subTotal2');
const subTotal3 = document.getElementById('subTotal3');
const subTotal4 = document.getElementById('subTotal4');

const totalPrice = document.getElementById('total');


plus1.addEventListener('click', function () {
    const quantity = document.getElementById('itemQuantity1').innerText;
    const quantityNumber = parseInt(quantity);
    const item1Quantity = addQuantity('itemQuantity1', 1, quantityNumber);
    const onePrice = singlePrice('subTotal1', item1Quantity - 1);
    addPrice('subTotal1', item1Quantity, onePrice);
    total('total', onePrice);
})
plus2.addEventListener('click', function () {
    const quantity = document.getElementById('itemQuantity2').innerText;

    const quantityNumber = parseInt(quantity);
    const item1Quantity = addQuantity('itemQuantity2', 1, quantityNumber);
    const onePrice = singlePrice('subTotal2', item1Quantity - 1);
    addPrice('subTotal2', item1Quantity, onePrice);
    total('total', onePrice);
})
plus3.addEventListener('click', function () {
    const quantity = document.getElementById('itemQuantity3').innerText;

    const quantityNumber = parseInt(quantity);
    const item1Quantity = addQuantity('itemQuantity3', 1, quantityNumber);
    const onePrice = singlePrice('subTotal3', item1Quantity - 1);
    addPrice('subTotal3', item1Quantity, onePrice);
    total('total', onePrice);
})
plus4.addEventListener('click', function () {
    const quantity = document.getElementById('itemQuantity4').innerText;

    const quantityNumber = parseInt(quantity);
    const item1Quantity = addQuantity('itemQuantity4', 1, quantityNumber);
    const onePrice = singlePrice('subTotal4', item1Quantity - 1);
    addPrice('subTotal4', item1Quantity, onePrice);
    total('total', onePrice);
})
minus1.addEventListener('click', function () {
    const quantity = document.getElementById('itemQuantity1').innerText;
    const quantityNumber = parseInt(quantity);
    if (quantityNumber > 1) {
    const item1Quantity = addQuantity('itemQuantity1', -1, quantityNumber);
    const onePrice = singlePrice('subTotal1', item1Quantity + 1);
    addPrice('subTotal1', item1Quantity, onePrice);
    total('total', (-1*onePrice));
    }
})
minus2.addEventListener('click', function () {
    const quantity = document.getElementById('itemQuantity2').innerText;
    const quantityNumber = parseInt(quantity);
    if (quantityNumber > 1) {
    const item1Quantity = addQuantity('itemQuantity2', -1, quantityNumber);
    const onePrice = singlePrice('subTotal2', item1Quantity + 1);
    addPrice('subTotal2', item1Quantity, onePrice);
    total('total', (-1*onePrice));
    }
})
minus3.addEventListener('click', function () {
    const quantity = document.getElementById('itemQuantity3').innerText;
    const quantityNumber = parseInt(quantity);
    if (quantityNumber > 1) {
    const item1Quantity = addQuantity('itemQuantity3', -1, quantityNumber);
    const onePrice = singlePrice('subTotal3', item1Quantity + 1);
    addPrice('subTotal3', item1Quantity, onePrice);
    total('total', (-1*onePrice));
    }
})
minus4.addEventListener('click', function () {
    const quantity = document.getElementById('itemQuantity4').innerText;
    const quantityNumber = parseInt(quantity);
    if (quantityNumber > 1) {
    const item1Quantity = addQuantity('itemQuantity4', -1, quantityNumber);
    const onePrice = singlePrice('subTotal4', item1Quantity + 1);
    addPrice('subTotal4', item1Quantity, onePrice);
    total('total', (-1*onePrice));
    }
})

function addQuantity(id, number, quantityNumber) {
    const updatedQuantity = quantityNumber + number;
    document.getElementById(id).innerText = updatedQuantity;
    return updatedQuantity;
}
function addPrice(id, quantity, onePrice) {
    const price = document.getElementById(id).innerText;
    const priceNumber = parseFloat(price);
    const updatedPrice = quantity * onePrice;
    document.getElementById(id).innerText = (updatedPrice).toFixed(2);
    return updatedPrice;
}

function singlePrice(id, quantity) {
    const price = document.getElementById(id).innerText;
    const priceNumber = parseFloat(price);
    const singlePrice = priceNumber / quantity;
    return singlePrice;
}

function total(id, singlePrice) {
    const total = document.getElementById(id).innerText;
    const totalNumber = parseFloat(total);
    document.getElementById(id).innerText = (totalNumber + singlePrice).toFixed(2);
}