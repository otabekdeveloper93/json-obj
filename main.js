let xhr = new XMLHttpRequest();

let url = "https://reqres.in/api/users";
xhr.open("GET", url);

xhr.onload = function jsonFile(){
   let databasa = JSON.parse(xhr.responseText);
   dataFunc(databasa.data);
}

xhr.send();

let cartBox = document.querySelector('#cart-box');

function dataFunc(bodyItems){
   bodyItems.forEach(element => {
      cartBox.innerHTML += `
      <div class="cart-list col-lg-4 col-md-6 col-sm-12 mt-4">
      <div class="card">
          <img src="${element.avatar}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${element.first_name}</h5>
            <p>${element.last_name}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${element.email}</li>
            <li class="list-group-item">1-22-3-4555-13-343</li>
            <li class="list-group-item">hidegart.org</li>
          </ul>
      </div>
      <div class="remove-list">
         <button id="remove-btn">Remove User</button>
      </div>
  </div>
  `
   });

   const removeBtn = document.querySelectorAll('#remove-btn');
   removeBtn.forEach(item =>{
      item.addEventListener('click', ()=>{
         item.parentElement.parentElement.classList.add('d-none');
      })
   });
}

ScrollReveal().reveal('.reveal-anim',{delay: 100});

