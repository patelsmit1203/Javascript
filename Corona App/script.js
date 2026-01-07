const globalURL = 'https://disease.sh/v3/covid-19/all';
const countriesURL = 'https://disease.sh/v3/covid-19/countries';

async function init() {
    const res = await fetch(globalURL);
    const data = await res.json();
    
    document.getElementById('total-cases').innerText = data.cases.toLocaleString();
    document.getElementById('total-deaths').innerText = data.deaths.toLocaleString();
    document.getElementById('total-recovered').innerText = data.recovered.toLocaleString();

    const countriesRes = await fetch(countriesURL);
    const countries = await countriesRes.json();
    const select = document.getElementById('country-select');

    countries.forEach(c => {
        let opt = document.createElement('option');
        opt.value = c.country;
        opt.innerText = c.country;
        select.appendChild(opt);
    });
}

document.getElementById('country-select').addEventListener('change', async (e) => {
    if (!e.target.value) return;
    const res = await fetch(`${countriesURL}/${e.target.value}`);
    const data = await res.json();

    document.getElementById('country-data').style.display = 'grid';
    document.getElementById('country-cases').innerText = data.cases.toLocaleString();
    document.getElementById('today-cases').innerText = data.todayCases.toLocaleString();
    document.getElementById('country-critical').innerText = data.critical.toLocaleString();
});

init();