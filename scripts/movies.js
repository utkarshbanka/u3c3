// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let arr = JSON.parse(localStorage.getItem("amount")) || [];
  let che = document.getElementById("wallet")
  che.innerText= arr;

  let movies_div = document.getElementById("movies")
let id ;
async function searchmovies()
{
// const url = "https://www.omdapi.com/?apikey=6a41ddca&s="
try {
 const query = document.getElementById("search").value;
 const url = `https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`

   let res = await fetch(url)

    let data = await res.json();
    const movies = data.Search;
    return movies
    // appendmovies(movies)
    console.log("data:", data)
}  catch (err)
{
    console.log("err",err)
}

}
function appendmovies(data)
{
    movies_div.innerHtml = null;
    data.forEach(function(el)
    {
        let p = document.createElement("p")
        p.innerText = el.Title;
        movies_div.append(p)
    })
}

async function main()
{
    let data = await searchmovies()
    if(data===undefined)
    {
        return false
    }
    appendmovies(data)
}
function debouncig(fun,dealy)
{
    if(id)
    {
        clearTimeout(id)
    }
    id = setTimeout(function()
    {
        fun()

    }, dealy)
}
