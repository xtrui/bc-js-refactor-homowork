function isZoneInZoneA(voyage) {
    const ZoneA = [
        'china',
        'east-indies',
    ];
    return ZoneA.includes(voyage.zone);
}

function voyageRisk(voyage) {
    let result = 1;
    if (voyage.length > 4) {
        result += 2;
    }
    if (voyage.length > 8) {
        result += voyage.length - 8;
    }
    if (isZoneInZoneA(voyage)) {
        result += 4;
    }
    return Math.max(result, 0);
}

function hasChina(history) {
    return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
    let result = 1;
    if (history.length < 5) {
        result += 4;
    }
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === 'china' && hasChina(history)) {
        result -= 2;
    }
    return Math.max(result, 0);
}

function calculateByVoyageLength(voyage, result) {
    if (voyage.length > 12) {
        result += 1;
    }
    if (voyage.length > 18) {
        result -= 1;
    }
    return result;
}

function calculateByHistoryLength(history, result) {
    if (history.length > 10) {
        result += 1;
    }
    return result;
}

function calculateByHistoryLengthB(history, result, voyage) {
    if (history.length > 8) {
        result += 1;
    }
    if (voyage.length > 14) {
        result -= 1;
    }
    return result;
}

function isZoneChinaAndHistoryHasChina(voyage, history) {
    return voyage.zone === 'china' && hasChina(history);
}

function getResultWhenZoneChinaAndHistoryHasChina(result, history, voyage) {
    result += 3;
    result = calculateByHistoryLength(history, result);
    result = calculateByVoyageLength(voyage, result);
    return result;
}

function voyageProfitFactor(voyage, history) {
    let result = 2;
    if (isZoneInZoneA(voyage)) {
        result += 1;
    }
    result = isZoneChinaAndHistoryHasChina(voyage, history)
        ? getResultWhenZoneChinaAndHistoryHasChina(result, history, voyage)
        : calculateByHistoryLengthB(history, result, voyage);
    return result;
}

function getRateText(vpf, vr, chr) {
    return vpf * 3 > (vr + chr * 2) ? 'A' : 'B';
}

function rating(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    return getRateText(vpf, vr, chr);
}

module.exports = {
    voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor, rating
};

const voyage = {
    zone: 'west-indies',
    length: 10,
};
const history = [
    {
        zone: 'east-indies',
        profit: 5,
    }, {
        zone: 'west-indies',
        profit: 15,
    }, {
        zone: 'china',
        profit: -2,
    },
    {
        zone: 'west-africa',
        profit: 7,
    },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
