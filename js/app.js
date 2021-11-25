/* for memory */
function memoryPrice(id, isClick) {
    const memoryField = document.getElementById(id);

    if (isClick == true) {
        const memoryprice = 0;
        memoryField.innerText = memoryprice;
    }
    else {
        const memoryprice = 180;
        memoryField.innerText = memoryprice;
    }
    totalPrice();
}
/* for storage */
function storagePrice(storageId, isClick) {
    const storageField = document.getElementById(storageId);

    if (isClick == true) {
        const storageprice = 0;
        storageField.innerText = storageprice;
    }
    else if (isClick == false) {
        const storageprice = 100;
        storageField.innerText = storageprice;
    }
    else {
        const storageprice = 180;
        storageField.innerText = storageprice;
    }
    totalPrice()
}
/* for delivery charge */
function deliveryCharge(serviceId, isClick) {
    const serviceField = document.getElementById(serviceId);

    if (isClick == true) {
        const serviceprice = 0;
        serviceField.innerText = serviceprice;
    }
    else {
        const serviceprice = 20;
        serviceField.innerText = serviceprice;
    }
    totalPrice();
}
/* for memory */
document.getElementById('free-memory').addEventListener('click', function () {
    memoryPrice('memory-price', true);
})
document.getElementById('high-memory-price').addEventListener('click', function () {
    memoryPrice('memory-price', false);
})
/* for storage */
document.getElementById('free-ssd').addEventListener('click', function () {
    storagePrice('storage-price', true);
})
document.getElementById('medium-ssd-price').addEventListener('click', function () {
    storagePrice('storage-price', false);
})
document.getElementById('high-ssd-price').addEventListener('click', function () {
    storagePrice('storage-price');
})
/* for delivery charge */
document.getElementById('late-delivery').addEventListener('click', function () {
    deliveryCharge('delivery-charge', true);
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    deliveryCharge('delivery-charge', false);
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