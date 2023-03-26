/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

// GLOBAL FUNCTIONS
const table = document.getElementById('cart');
let tbody = document.querySelector('#cart tbody');

table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  console.log(state.cart.items)
  state.cart.updateCounter();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tableRows = document.querySelectorAll('#cart tbody tr');
  console.log(tableRows);

  for(let i = 0; i <= tableRows.length; i++){
    if(tableRows[i]){
      tableRows[i].remove();
    }
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i = 0; i < state.cart.items.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let deleteLink = document.createElement('button');
    deleteLink.classList.add('delete-btn');
    deleteLink.id = `${i}`;
    deleteLink.textContent = 'x';
    td.appendChild(deleteLink);
    tr.appendChild(td);

    let tdOne = document.createElement('td');
    tdOne.textContent = state.cart.items[i].quantity;
    tr.appendChild(tdOne);

    let tdTwo = document.createElement('td');
    tdTwo.textContent = state.cart.items[i].product;
    tr.appendChild(tdTwo);
    tbody.appendChild(tr);
  }

  console.log('state cart', state.cart.items);
}

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
function removeItemFromCart(event) {
  let targetId = event.target.id;
  state.cart.removeItem(targetId);
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();