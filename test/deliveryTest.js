const deliveryTest = require('ava');
const {deliveryDate} = require("../src/delivery");
deliveryTest('deliveryDate case 1. should return date when deliveryDate given anOrder with MA state and rush', t => {
    const anOrder = {
        'deliveryState': 'MA',
        'placedOn': {
            'plusDays': function (plusDays) {
                let today = new Date();
                let plusedDay = new Date();
                plusedDay.setDate(today.getDate() + plusDays);
                return plusedDay.toLocaleDateString();
            }
        }
    }
    const rush = true;
    let today = new Date();
    let plusDay = new Date();
    plusDay.setDate(today.getDate() + 2)
    t.is(deliveryDate(anOrder, rush), plusDay.toLocaleDateString());
})
deliveryTest('deliveryDate case 2. should return date when deliveryDate given anOrder with NH state and rush', t => {
    const anOrder = {
        'deliveryState': 'NH',
        'placedOn': {
            'plusDays': function (plusDays) {
                let today = new Date();
                let plusedDay = new Date();
                plusedDay.setDate(today.getDate() + plusDays);
                return plusedDay.toLocaleDateString();
            }
        }
    }
    const rush = true;
    let today = new Date();
    let plusDay = new Date();
    plusDay.setDate(today.getDate() + 3)
    t.is(deliveryDate(anOrder, rush), plusDay.toLocaleDateString());
})
deliveryTest('deliveryDate case 3. should return date when deliveryDate given anOrder with UNKNOWN state and rush', t => {
    const anOrder = {
        'deliveryState': 'UNKNOWN',
        'placedOn': {
            'plusDays': function (plusDays) {
                let today = new Date();
                let plusedDay = new Date();
                plusedDay.setDate(today.getDate() + plusDays);
                return plusedDay.toLocaleDateString();
            }
        }
    }
    const rush = true;
    let today = new Date();
    let plusDay = new Date();
    plusDay.setDate(today.getDate() + 4)
    t.is(deliveryDate(anOrder, rush), plusDay.toLocaleDateString());
});
deliveryTest('deliveryDate case 4. should return date when deliveryDate given anOrder with MA state and not rush', t => {
    const anOrder = {
        'deliveryState': 'MA',
        'placedOn': {
            'plusDays': function (plusDays) {
                let today = new Date();
                let plusedDay = new Date();
                plusedDay.setDate(today.getDate() + plusDays);
                return plusedDay.toLocaleDateString();
            }
        }
    }
    const rush = false;
    let today = new Date();
    let plusDay = new Date();
    plusDay.setDate(today.getDate() + 4)
    t.is(deliveryDate(anOrder, rush), plusDay.toLocaleDateString());
})