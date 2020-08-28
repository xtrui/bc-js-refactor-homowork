const DeliveryStateA = [
    'MA',
    'CT',
];

function isDeliveryStateInDeliveryStateA(anOrder) {
    return DeliveryStateA.includes(anOrder.deliveryState);
}

const DeliveryStateB = [
    'NY',
    'NH',
];

function isDeliveryStateInDeliveryStateB(anOrder) {
    return DeliveryStateB.includes(anOrder.deliveryState);
}

function getDeliveryTimeWhenIsRush(anOrder) {
    if (isDeliveryStateInDeliveryStateA(anOrder)) {
        return 1;
    }
    if (isDeliveryStateInDeliveryStateB(anOrder)) {
        return 2;
    }
    return 3;
}

const DeliveryStateC = [
    'MA',
    'CT',
    'NY',
];

function isDeliveryStateInDeliveryStateC(anOrder) {
    return DeliveryStateC.includes(anOrder.deliveryState);
}

const DeliveryStateD = [
    'ME',
    'NH',
];

function isDeliveryStateInDeliveryStateD(anOrder) {
    return DeliveryStateD.includes(anOrder.deliveryState);
}

function getDeliveryTimeB(anOrder, deliveryTime) {
    if (isDeliveryStateInDeliveryStateC(anOrder)) {
        deliveryTime = 2;
    } else if (isDeliveryStateInDeliveryStateD(anOrder)) {
        deliveryTime = 3;
    } else {
        deliveryTime = 4;
    }
    return deliveryTime;
}

function getDeliveryDateWhenIsRush(anOrder) {
    let deliveryTime;
    deliveryTime = getDeliveryTimeWhenIsRush(anOrder);
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function getDeliveryTime(anOrder) {
    let deliveryTime;
    deliveryTime = getDeliveryTimeB(anOrder, deliveryTime);
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function deliveryDate(anOrder, isRush) {
    return isRush
        ? getDeliveryDateWhenIsRush(anOrder)
        : getDeliveryTime(anOrder);

}

module.exports = {
    deliveryDate
}