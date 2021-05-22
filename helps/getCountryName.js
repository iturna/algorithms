
const fetch = require('node-fetch')

async function getCountryName(code) {
    const {total_pages, data}  = await fetch('https://jsonmock.hackerrank.com/api/countries?page=1').then(res => res.json());

    const answer = findIncountries(data, code);
    if(answer) return answer.name;
    
    for(let i =2; i<=total_pages; i++) {
        const {data} = await fetch('https://jsonmock.hackerrank.com/api/countries?page=' + i);
        const answer = findIncountries(data, code, i);
        if(answer) return answer.name;
    }
}

function findIncountries(countries, code, i = 1) {
    console.log(code, countries);
    return countries.find((c) => c['alpha2Code'] === code);
}

getCountryName("AF");

// function getCards() {
//   return fetch('http://www.clashapi.xyz/api/cards')
//     .then(res => res.json())
// }

// // Usage:
// getCards()
//   .then(data => console.log(data))


/*
function fetch(url) {
    return new Promise((resolve, reject) => {
        https
            .get(url, (res) => {
                let result = '';
                res.on('data', (chunk) => {
                    result += chunk;
                });
                res.on('end', () => {
                    resolve(JSON.parse(result));
                });
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}
*/
