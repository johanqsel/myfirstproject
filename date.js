let date1 = new Date();

let dateLocale = date1.toLocaleDateString('en-EN',{
    year: "numeric",
    month: "long",
    day: "numeric"
});

document.getElementById('date').innerHTML="SARLAT, "+dateLocale;