/* Завдання:
3.10. Зробити список, після останього елементу списку має бути поле(інпут) та кнопка щоб додати новий елемент списку. Біля кожного елементу списку має бути знак - який видаляє даний елемент списку. Список зберігати в масиві.*/

// Створюю масив:
var clubsList = [];
clubsList[0] = "Arsenal";
clubsList[1] = "ManCity";
clubsList[2] = "Newcastle";
clubsList[3] = "ManUnited";
clubsList[4] = "Tottenham";

// Значення з масиву виносяться у список веб-сторінки:
document.getElementById("first-club").innerHTML = clubsList[0];
document.getElementById("second-club").innerHTML = clubsList[1];
document.getElementById("third-club").innerHTML = clubsList[2];
document.getElementById("fourth-club").innerHTML = clubsList[3];
document.getElementById("fifth-club").innerHTML = clubsList[4];

// Видалення зі списку натисканням на червоні кнопки:
document.getElementById("remove-first-club-button").addEventListener('click', removeFirst, false);
function removeFirst(e) {
    clubsList.splice(0, 1);
    document.getElementById("first-club").innerHTML = clubsList[0];
    document.getElementById("second-club").innerHTML = clubsList[1];
    document.getElementById("third-club").innerHTML = clubsList[2];
    document.getElementById("fourth-club").innerHTML = clubsList[3];
    document.getElementById("fifth-club").innerHTML = " ";
}



//Додавання нового клубу натисканням на кнопку "Submit":
document.getElementById("submit-button").addEventListener('click', addNewClub, false);
function addNewClub(e) {
    clubsList.push(document.getElementById("new-club-name").newclub);
}

