//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

const button = document.querySelector("#btnToClick");
function action() {
alert("Hello!");
};
button.addEventListener("click", action);

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

function myFocus(){
    document.getElementById("btnToClick").focus();
}
console.log(myFocus);
//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

document.querySelector(".value").addEventListener("input", () => {
    console.log('Ha cambiado el contenido del input!');
  });