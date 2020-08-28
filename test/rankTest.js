const rankTest = require('ava');
const {voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor, rating} = require('../src/rank');

rankTest('voyageRisk case 1. should return 1 when voyageRisk given voyage length 4 zone korea', t => {
    const voyage = {
        length: 4,
        zone: 'korea'
    };
    const result = voyageRisk(voyage);
    t.is(result, 1);
});

rankTest('voyageRisk case 2. should return 5 when voyageRisk given voyage length 4 zone china', t => {
    const voyage = {
        length: 4,
        zone: 'china'
    };
    const result = voyageRisk(voyage);
    t.is(result, 5);
});

rankTest('voyageRisk case 3. should return 3 when voyageRisk given voyage length 8 zone korea', t => {
    const voyage = {
        length: 8,
        zone: 'korea'
    };
    const result = voyageRisk(voyage);
    t.is(result, 3);
});

rankTest('voyageRisk case 4. should return 7 when voyageRisk given voyage length 8 zone china', t => {
    const voyage = {
        length: 8,
        zone: 'china'
    };
    const result = voyageRisk(voyage);
    t.is(result, 7);
});

rankTest('voyageRisk case 5. should return 4 when voyageRisk given voyage length 9 zone korea', t => {
    const voyage = {
        length: 9,
        zone: 'korea'
    };
    const result = voyageRisk(voyage);
    t.is(result, 4);
});

rankTest('voyageRisk case 6. should return 8 when voyageRisk given voyage length 9 zone china', t => {
    const voyage = {
        length: 9,
        zone: 'china'
    };
    const result = voyageRisk(voyage);
    t.is(result, 8);
});

rankTest('hasChina case 1. should return true when hasChina given history include china', t => {
    const history = [
        {
            zone: 'china',
            profit: 5
        }
    ]
    const result = hasChina(history);
    t.true(result);
});

rankTest('hasChina case 2. should return false when hasChina given history not include china', t => {
    const history = [
        {
            zone: 'east-indies',
            profit: 5
        }
    ]
    const result = hasChina(history);
    t.false(result);
});

rankTest('captainHistoryRisk case 1. should return 5 when captainHistoryRisk given history length 4 voyage zone korea', t => {
    const voyage = {
        length: 9,
        zone: 'korea'
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5
        }, {
            zone: 'west-indies',
            profit: 15
        }, {
            zone: 'china',
            profit: 2
        }, {
            zone: 'west-africa',
            profit: 7
        }
    ]
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 5);
});

rankTest('captainHistoryRisk case 2. should return 1 when captainHistoryRisk given history length 5 voyage zone korea', t => {
    const voyage = {
        length: 9,
        zone: 'korea'
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5
        }, {
            zone: 'west-indies',
            profit: 15
        }, {
            zone: 'china',
            profit: 2
        }, {
            zone: 'west-africa',
            profit: 7
        }, {
            zone: 'korea',
            profit: 10
        }
    ]
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 1);
});

rankTest('captainHistoryRisk case 3. '
    + 'should return 0 '
    + 'when captainHistoryRisk '
    + 'given history length 5 profit 5 voyage zone china history include china', t => {
    const voyage = {
        length: 9,
        zone: 'china'
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5
        }, {
            zone: 'west-indies',
            profit: 5
        }, {
            zone: 'china',
            profit: 5
        }, {
            zone: 'west-africa',
            profit: 5
        }, {
            zone: 'korea',
            profit: 5
        }
    ]
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 0);
});

rankTest('captainHistoryRisk case 4. '
    + 'should return 6 '
    + 'when captainHistoryRisk '
    + 'given history length 1 profit -1 voyage zone china history not include china', t => {
    const voyage = {
        length: 9,
        zone: 'china'
    };
    const history = [
        {
            zone: 'korea',
            profit: -1
        }
    ]
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 6);
});

rankTest('captainHistoryRisk case 5. '
    + 'should return 3 '
    + 'when captainHistoryRisk '
    + 'given history length 1 profit 5 voyage zone china history include china', t => {
    const voyage = {
        length: 9,
        zone: 'china'
    };
    const history = [
        {
            zone: 'china',
            profit: 5
        }
    ]
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 3);
});

rankTest('captainHistoryRisk case 6. '
    + 'should return 3 '
    + 'when captainHistoryRisk '
    + 'given history length 1 profit -5 voyage zone china history include china', t => {
    const voyage = {
        length: 9,
        zone: 'china'
    };
    const history = [
        {
            zone: 'china',
            profit: -5
        }
    ]
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 4);
});

rankTest('captainHistoryRisk case 7. '
    + 'should return 4 '
    + 'when captainHistoryRisk '
    + 'given history length 5 profit -5 voyage zone china history include china', t => {
    const voyage = {
        length: 9,
        zone: 'china'
    };
    const history = [
        {
            zone: 'east-indies',
            profit: -5
        }, {
            zone: 'west-indies',
            profit: -5
        }, {
            zone: 'china',
            profit: -5
        }, {
            zone: 'west-africa',
            profit: -5
        }, {
            zone: 'korea',
            profit: -5
        }
    ]
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 4);
});

rankTest('captainHistoryRisk case 8. '
    + 'should return 6 '
    + 'when captainHistoryRisk '
    + 'given history length 5 profit -5 voyage zone korea history include china', t => {
    const voyage = {
        length: 9,
        zone: 'korea'
    };
    const history = [
        {
            zone: 'east-indies',
            profit: -5
        }, {
            zone: 'west-indies',
            profit: -5
        }, {
            zone: 'china',
            profit: -5
        }, {
            zone: 'west-africa',
            profit: -5
        }, {
            zone: 'korea',
            profit: -5
        }
    ]
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 6);
});

rankTest('voyageProfitFactor case 1. '
    + 'should return 6 '
    + 'when voyageProfitFactor '
    + 'given voyage zone china history include china length 10', t => {
    const voyage = {
        length: 9,
        zone: 'china'
    };
    const history = generateHistory('china', 10);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 6);
});

rankTest('voyageProfitFactor case 2. '
    + 'should return 7 '
    + 'when voyageProfitFactor '
    + 'given voyage zone china history include china length 12', t => {
    const voyage = {
        length: 9,
        zone: 'china'
    };
    const history = generateHistory('china', 12);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
});

rankTest('voyageProfitFactor case 3. '
    + 'should return 8 '
    + 'when voyageProfitFactor '
    + 'given voyage zone china history include china history length 12 voyage length 13', t => {
    const voyage = {
        length: 13,
        zone: 'china'
    };
    const history = generateHistory('china', 12);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 8);
});

rankTest('voyageProfitFactor case 4. '
    + 'should return 7 '
    + 'when voyageProfitFactor '
    + 'given voyage zone china history include china history length 12 voyage length 19', t => {
    const voyage = {
        length: 19,
        zone: 'china'
    };
    const history = generateHistory('china', 12);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
});

rankTest('voyageProfitFactor case 5. '
    + 'should return 3 '
    + 'when voyageProfitFactor '
    + 'given voyage zone china history not include china history length 8 voyage length 14', t => {
    const voyage = {
        length: 14,
        zone: 'china'
    };
    const history = generateHistory('korea', 8);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
});

rankTest('voyageProfitFactor case 6. '
    + 'should return 4 '
    + 'when voyageProfitFactor '
    + 'given voyage zone china history not include china history length 9 voyage length 14', t => {
    const voyage = {
        length: 14,
        zone: 'china'
    };
    const history = generateHistory('korea', 9);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 4);
});

rankTest('voyageProfitFactor case 7. '
    + 'should return 2 '
    + 'when voyageProfitFactor '
    + 'given voyage zone china history not include china history length 8 voyage length 15', t => {
    const voyage = {
        length: 15,
        zone: 'china'
    };
    const history = generateHistory('korea', 8);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 2);
});

rankTest('voyageProfitFactor case 8. '
    + 'should return 3 '
    + 'when voyageProfitFactor '
    + 'given voyage zone china history not include china history length 9 voyage length 15', t => {
    const voyage = {
        length: 15,
        zone: 'china'
    };
    const history = generateHistory('korea', 9);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
});

rankTest('voyageProfitFactor case 9. '
    + 'should return 3 '
    + 'when voyageProfitFactor '
    + 'given voyage zone east-indies history length 8 voyage length 14', t => {
    const voyage = {
        length: 14,
        zone: 'east-indies'
    };
    const history = generateHistory('korea', 8);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
});

rankTest('voyageProfitFactor case 10. '
    + 'should return 4 '
    + 'when voyageProfitFactor '
    + 'given voyage zone east-indies history length 9 voyage length 14', t => {
    const voyage = {
        length: 14,
        zone: 'east-indies'
    };
    const history = generateHistory('korea', 9);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 4);
});

rankTest('voyageProfitFactor case 11. '
    + 'should return 2 '
    + 'when voyageProfitFactor '
    + 'given voyage zone east-indies history length 8 voyage length 15', t => {
    const voyage = {
        length: 15,
        zone: 'east-indies'
    };
    const history = generateHistory('korea', 8);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 2);
});

rankTest('voyageProfitFactor case 12. '
    + 'should return 3 '
    + 'when voyageProfitFactor '
    + 'given voyage zone east-indies history length 9 voyage length 15', t => {
    const voyage = {
        length: 15,
        zone: 'east-indies'
    };
    const history = generateHistory('korea', 9);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
});

rankTest('voyageProfitFactor case 13. '
    + 'should return 2 '
    + 'when voyageProfitFactor '
    + 'given voyage zone korea history length 8 voyage length 14', t => {
    const voyage = {
        length: 14,
        zone: 'korea'
    };
    const history = generateHistory('korea', 8);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 2);
});

rankTest('voyageProfitFactor case 14. '
    + 'should return 3 '
    + 'when voyageProfitFactor '
    + 'given voyage zone korea history length 9 voyage length 14', t => {
    const voyage = {
        length: 14,
        zone: 'korea'
    };
    const history = generateHistory('korea', 9);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
});

rankTest('voyageProfitFactor case 15. '
    + 'should return 1 '
    + 'when voyageProfitFactor '
    + 'given voyage zone korea history length 8 voyage length 15', t => {
    const voyage = {
        length: 15,
        zone: 'korea'
    };
    const history = generateHistory('korea', 8);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 1);
});

rankTest('voyageProfitFactor case 16. '
    + 'should return 2 '
    + 'when voyageProfitFactor '
    + 'given voyage zone korea history length 9 voyage length 15', t => {
    const voyage = {
        length: 15,
        zone: 'korea'
    };
    const history = generateHistory('korea', 9);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 2);
});

rankTest('rating case 1. '
    + 'should return A '
    + 'when rating '
    + 'given voyage zone china history length 18 include china voyage length 15', t => {
    const voyage = {
        length: 15,
        zone: 'china'
    };
    const history = generateHistory('china', 18);
    const result = rating(voyage, history);
    t.is(result, 'A');
});

rankTest('rating case 2. '
    + 'should return B '
    + 'when rating '
    + 'given voyage zone china history length 18 not include china voyage length 15', t => {
    const voyage = {
        length: 15,
        zone: 'china'
    };
    const history = generateHistory('korea', 18);
    const result = rating(voyage, history);
    t.is(result, 'B');
});

const generateHistory = (zone, number) => {
    let history = []
    for (let index = 1; index <= number; index++) {
        history.push({
            zone: zone,
            profit: index
        })
    }
    return history
}