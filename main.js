
const input = document.querySelector('#input')
const result = document.querySelector('#result')
const select = document.querySelector('#select')
const rates = {}






const cleavePriceSetting = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
}

const cleaveCost = new Cleave(input, cleavePriceSetting);

async function getData () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data
 

    rates.USD = result.Valute.USD
    rates.EUR = result.Valute.EUR

    console.log(rates)
}

getData ();

input.oninput = function () {
        
        result.value = (input.value.replace(/\s/g, '') / rates[select.value].Value).toFixed(2)
    };
    
select.oninput = function () {
        
    result.value = (input.value.replace(/\s/g, '') / rates[select.value].Value).toFixed(2)
}


// const valUsd = function () {
// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//     .then(response => response.json())
//     .then(json => console.log(json.Valute.USD.Value))
//     rates.USD = json.Valute.USD
//     console.log(rates.USD)
// }
    
// valUsd()

// const valEur = function () { 
// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
// .then(response => response.json())
// .then(json => console.log( json.Valute.EUR.Value))
// }

//     console.log(valUsd());
//     valEur();


// input.oninput = function () {
//     console.log('huy');
// }

    



