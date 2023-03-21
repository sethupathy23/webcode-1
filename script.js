//Div element
let div = document.createElement("div");
div.setAttribute("class", "main1");

//create form group
let formgroup = document.createElement("div");
formgroup.setAttribute("class", "form-group");

let input = document.createElement("input");
input.setAttribute("type", "text");

input.setAttribute("class", "form-control");
input.setAttribute("id", "main");
input.setAttribute("placeholder", "");

let button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search";
button.style.marginLeft = "200px";
button.style.marginTop = "20px";
button.addEventListener("click", foo);

let breweryname = document.createElement("div");
breweryname.setAttribute("id", "name");

let brewerytype = document.createElement("div");
brewerytype.setAttribute("id", "brewerytype");

let breweryaddress = document.createElement("div");
breweryaddress.setAttribute("id", "street");

let breweryphone = document.createElement("div");
breweryphone.setAttribute("id", "phone");

let brewerywebsite = document.createElement("div");
brewerywebsite.setAttribute("id", "website_url");

formgroup.append(input, button);
div.append(formgroup);
document.body.append(div);

async function foo() {
  let city = document.getElementById("main").value;
  console.log(city);
  let res = await fetch(
    `https://api.openbrewerydb.org/breweries?by_city=${city}`
  );
  let res1 = await res.json();
  console.log(res1);
  for (var i = 0; i < res1.length; i++) {
    console.log(res1[i]);
    try {
      console.log(res1[i].name);
      breweryname.innerHTML = `Brewery Name: ${res[i].name}`;

      console.log(res1[i].brewery_type);
      brewerytype.innerHTML = `Brewery_Type : ${res[i].brewery_type}`;

      console.log(res1[i].street);
      breweryaddress.innerHTML = `Address : ${res[i].street}`;

      console.log(res1[i].phone);
      breweryphone.innerHTML = `PhoneNumber : ${res[i].phone}`;

      console.log(res1[i].website_url);
      brewerywebsite.innerHTML = `Website : ${res[i].website_url}`;
      formgroup.append(
        breweryname,
        brewerytype,
        breweryaddress,
        breweryphone,
        brewerywebsite
      );
      document.body.append(div);
    } catch (error) {
      console.log(error);
    }
  }
}
