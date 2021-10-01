// Use Queryselector to link the is fro HTML
// Addeventlistner used to connect with button function

document.querySelector("#result").addEventListener("click", findData);

// Async await to be used

async function findData() {
  try {


    const res = await fetch("https://thronesapi.com/api/v2/characters");

    const data = await res.json();

    // Method 1 to dispaly content 1 by one using math random

    let jarvis = data[Math.floor((Math.random() * 50) + 1)];

    document.querySelector("#output").innerHTML=jarvis.title;
    document.querySelector("#output1").innerHTML=jarvis.family;
    document.querySelector("#output2").innerHTML=jarvis.fullName;
    document.querySelector("#output3").src= jarvis.imageUrl;

    
    // Method 2 is commented as below to display all content in one shot



    // for (let i = 1; i < data.length; i++) 
    // {
    //   const card = document.querySelector(".card");

    //   //  using template literal displaying content in DOM
    //   const container = document.createElement("div");
    //   container.innerHTML = `
    //   <img src="${data[i].imageUrl}"> <br>
    //   <span>Title :${data[i].title}</span> <br>
    //   <span>Family :${data[i].family}</span><br>
    //   <span>Full Name :${data[i].fullName}</span><br>
      
    //   <hr>`;
    //   //  appended the container 
    //   card.append(container);
    // }
    
  } catch (err) {
    console.log(err, "unable to get data");
  }
}