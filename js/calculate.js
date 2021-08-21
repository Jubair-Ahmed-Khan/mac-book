/* ******** Price Calculation ******* */


//check which button is clicked
function elementSelect(name, price) {
    document.getElementById(name).innerText = price;
}

//subtotal calculation
function subtotalCalculate() {
    const basePrice = parseInt(document.getElementById('base-price').innerText);
    const memoryPrice = parseInt(document.getElementById('extra-memory').innerText);
    const storagePrice = parseInt(document.getElementById('extra-storage').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery').innerText);
    const subtotal = basePrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('total').innerText = subtotal;
}

//memory events
document.getElementById('8GB-memory').addEventListener('click', function () {
    elementSelect('extra-memory', 0);
    subtotalCalculate();
});
document.getElementById('16GB-memory').addEventListener('click', function () {
    elementSelect('extra-memory', 180);
    subtotalCalculate();
});

// storage events
document.getElementById('256GB-SSD').addEventListener('click', function () {
    elementSelect('extra-storage', 0);
    subtotalCalculate();
});
document.getElementById('512GB-SSD').addEventListener('click', function () {
    elementSelect('extra-storage', 100);
    subtotalCalculate();
});
document.getElementById('1TB-SSD').addEventListener('click', function () {
    var price = elementSelect('extra-storage', 180);
    subtotalCalculate();
});

// delivery events
document.getElementById('free-delivery').addEventListener('click', function () {
    elementSelect('delivery', 0);
    subtotalCalculate();
});
document.getElementById('fast-delivery').addEventListener('click', function () {
    elementSelect('delivery', 20);
    subtotalCalculate();
});

//promo code for 20% discount
var flag = 0;
document.getElementById('apply-promo').addEventListener('click', function () {
    var promoCode = document.getElementById('add-promo').value;
    if (flag == 0) {
        if (promoCode == 'stevekaku') {
            flag = 1;
            subtotal = parseInt(document.getElementById('subtotal').innerText);
            total = subtotal - subtotal * 0.20;
            document.getElementById('total').innerText = total.toFixed(2);
            //clear the text of promocode input
            document.getElementById('add-promo').value = '';
        }
        else {
            document.getElementById('add-promo').value = '';
            alert('Please use the right promo code');
        }
    }
    else {

        document.getElementById('add-promo').value = '';
        alert('Already promocode applied');
    }

});