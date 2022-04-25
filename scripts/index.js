// Store the wallet amount to your local storage with key "amount"
let butt = document.getElementById("book_movies")
butt.addEventListener("click", function()
{
  ramji()
})
function ramji()
{
  window.location = ("movies.html")
}

let arr = JSON.parse(localStorage.getItem("amount")) || [];

  


  function ankush(e)
  {
    e.preventDefault()
      let form = document.getElementById("amount").value;
      
     arr.push(form);
      let amount = 0
      for(let i =0; i<arr.length; i++)
      {
          amount = amount + +arr[i]
      }
      console.log(amount)
      localStorage.setItem("amount", JSON.stringify(amount));
  }
