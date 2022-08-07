const inputCost = document.querySelector('.bablo');

const cleavePriceSetting = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
}

const cleaveCost = new Cleave(inputCost, cleavePriceSetting);


