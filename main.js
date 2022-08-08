const inputCost = document.querySelector('.bablo');
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const input = document.querySelector('#input')
const result = document.querySelector('#result')
const select = document.querySelector('#select')


const cleavePriceSetting = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
}

const cleaveCost = new Cleave(inputCost, cleavePriceSetting);


const valUsd = function () {
fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .then(json => console.log(json.Valute.USD.Value))
    console.log(json)
    
}
const valEur = function () { 
fetch('https://www.cbr-xml-daily.ru/daily_json.js')
.then(response => response.json())
.then(json => console.log( json.Valute.EUR.Value))
}

    console.log(valUsd());
    valEur();


input.oninput = function () {
    console.log('huy');
    result.value = input.value / a;
}
    

    



