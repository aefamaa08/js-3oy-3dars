// console.log("Перед setTimeout");

// setTimeout( () => {
//     console.log("Прошло 3 секунды");
// }, 3000);

// console.log("После setTimeout");

// let count = 0;

// let interval =  setInterval( ()=> {
//     count++;
//     console.log('Прошло ${count} секунд');

//     if (count === 5){
//         clearInterval(interval);
//         console.log("Интревал остановлен")
//     }
// },1000);
// let date = new Date();
// console.log(date);

// console.log("Год:",date.getFullYear());
// console.log("Месяц:",date.getMonth());
// console.log("День:",date.getDate());
// console.log("Час:",date.getHours());
// console.log("Минуты:",date.getMinutes());
// console.log("Секунды:",date.getSeconds());
function update (){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Ekranga soat, minut, va sekundni chiqaramiz
    document.getElementById("hourValue").textContent = ('0' + hours).slice(-2);
    document.getElementById("minuteValue").textContent = ('0' + minutes).slice(-2);
    document.getElementById("secondValue").textContent = ('0' + seconds).slice(-2);
}

setInterval(update, 1000);
