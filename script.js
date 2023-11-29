let button = document.querySelector('form button');
let input = document.querySelector('form input');
let form = document.querySelector('form');
let yearText = document.querySelector('.year');
let monthText = document.querySelector('.month');
let dateText = document.querySelector('.date');

input.max = new Date().toISOString().split("T")[0];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let birthDate = input.value;
    let now = new Date;
    
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;
    let currentDate = now.getDate();

    let [year, month, date] = birthDate.split("-");
  
    resultYear = currentYear - year;

    if (currentMonth >= month) {
        resultMonth = currentMonth - month
    }
    else {
        resultYear--;
        resultMonth = 12 + currentMonth - month;
    }

    if (currentDate >= date) {
        resultDate = currentDate - date
    }
    else {
        resultMonth--;
        resultDate = getDaysInMonth(year, month) + currentDate - date;
    }

    if (resultMonth < 0) {
        resultMonth = 11;
        resultYear--;
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    yearText.innerHTML = resultYear;
    monthText.innerHTML = resultMonth;
    dateText.innerHTML = resultDate;

})