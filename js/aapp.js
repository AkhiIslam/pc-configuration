/* for memory */
function priceField(id, isClick) {
    const field = document.getElementById(id);

    if (isClick == 'free') {
        const price = 0;
        field.innerText = price;
    }
    else if (isClick == 'medium') {
        const price = 100;
        field.innerText = price;
    }
    else if (isClick == 'high') {
        const price = 180;
        field.innerText = price;
    }
    else {
        const deliveryCost = 20;
        field.innerText = deliveryCost;
    }
    totalPrice();
}
/* for memory */
document.getElementById('free-memory').addEventListener('click', function () {
    priceField('memory-price', 'free');
})
document.getElementById('high-memory-price').addEventListener('click', function () {
    priceField('memory-price', 'high');
})
/* for storage */
document.getElementById('free-ssd').addEventListener('click', function () {
    priceField('storage-price', 'free');
})
document.getElementById('medium-ssd-price').addEventListener('click', function () {
    priceField('storage-price', 'medium');
})
document.getElementById('high-ssd-price').addEventListener('click', function () {
    priceField('storage-price', 'high');
})
/* for delivery charge */
document.getElementById('late-delivery').addEventListener('click', function () {
    priceField('delivery-charge', 'free');
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    priceField('delivery-charge');
})
/* for total price */
function productValue(totalId) {
    const productInput = document.getElementById(totalId);
    const productNumber = parseInt(productInput.innerText);
    return productNumber;
}
function totalPrice() {
    const bestPrice = productValue('best-price');
    const memoryPriceTotal = productValue('memory-price');
    const storagePriceTotal = productValue('storage-price');
    const deliveryChargeTotal = productValue('delivery-charge');

    const totalPrice = bestPrice + memoryPriceTotal + storagePriceTotal + deliveryChargeTotal;
    document.getElementById('total-price').innerText = totalPrice;
    const discount = document.getElementById('total');
    const discountText = parseFloat(discount.innerText)
    discount.innerText = totalPrice;
}
/* for pomo code */
document.getElementById('pomo-code').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const discount = document.getElementById('total');
    const discountText = parseFloat(discount.innerText);

    if (inputField.value == "stevekaku") {
        const pomoCode = (discountText * 80) / 100;
        discount.innerText = pomoCode;
    }
    inputField.value = '';
    useOneTime();
})
/* for one time discount */
function useOneTime() {
    document.getElementById('pomo-code').setAttribute('disabled', true);
}