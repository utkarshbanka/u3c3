// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let arr = JSON.parse(localStorage.getItem("amount")) || [];
let che = document.getElementById("wallet")
  che.innerText= arr;

let num = document.getElementById("number_of_seats").value;

let count = 1;
for(var i =0; i<num; i++)
{
    console.log(i)
}
