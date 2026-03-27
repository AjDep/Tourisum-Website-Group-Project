//Window when scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 10) {
    document.getElementById("Top").style.transition= "background-color ease-in-out 0.5s";
    document.getElementById("Top").style.backgroundColor = "rgba(90, 166, 144)";
  } else {
    document.getElementById("Top").style.backgroundColor = "rgba(108, 109, 109, 0.555)";
  }
}
//Selecting Elements
const Cubes=document.querySelector(".cubes");
const cartItems=document.querySelector(".CartItems");
const SelectedItems=document.querySelector(".SelectedItem");
const Total=document.querySelector(".subTotal");
const Cartname=document.querySelector(".CartName");
const Payments=document.querySelector(".TotalCheckout");



//Render Products
function renderProducts(){
    Products.forEach((Product)=>{

        Cubes.innerHTML += `
        <div class="item" data-category="${Product.category}">
               <div id="box${Product.id}" class="cube" >
                  <!-- <div class="face front"></div> -->
                  <div class="face back"></div>
                  <div class="face left"></div>
                  <div class="face right"></div>
                  <div class="face top"></div>
                  <div class="face bottom"></div>
                  <div class="ImgDescription">
                     <div class=" Middle"><img id="Second" src="${Product.imgSrc}"></div>
                     <div class="Buttons"><button  id="B1" class="B" onclick="Open(${Product.id})">Buy now</button></div>
                
                  </div>
             </div>
            </div>
        `;

    })
}

renderProducts()

//Filtering Products
document.querySelector('#all').addEventListener('click', () => {
    document.querySelectorAll('.item').forEach(item => item.style.display = 'flex');
  });
  
  document.querySelector('#tents').addEventListener('click', () => {
    document.querySelectorAll('.item').forEach(item => {
      if (item.dataset.category === 'Tent') {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  document.querySelector('#bags').addEventListener('click', () => {
    document.querySelectorAll('.item').forEach(item => {
      if (item.dataset.category === 'Bag') {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
  document.querySelector('#Accesories').addEventListener('click', () => {
    document.querySelectorAll('.item').forEach(item => {
      if (item.dataset.category === 'Acc') {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
  

function Open(id){
    console.log(id)
   
    // const item=Products.find((Product)=>Product.id===id);
    const SelectedItemId=document.querySelector('#SelectedItem'+id);
    // console.log(item)
    const Blur = document.querySelector('#Blur');
  
      SelectedItemId.style.display = 'flex';
      SelectedItemId.style.transform = 'translateX(-100%)'; // start position
    Blur.style.display = 'flex';
      setTimeout(() => {
        SelectedItemId.style.transition = 'transform 0.5s ease-out'; // animation properties
        SelectedItemId.style.transform = 'translateX(0)'; // end position
      }, );
}

const shop = document.querySelector('#cartMainBtn');
    const Cart = document.querySelector('#Cart');
    const Blur = document.querySelector('#Blur');
    shop.addEventListener('click', () => {
      Cart.style.display = 'flex';
      Blur.style.display = 'flex';
      Cart.style.transform = 'translateX(100%)'; // start position
      
      setTimeout(() => {
        Cart.style.transition = 'transform 0.5s ease-out'; // animation properties
        Cart.style.transform = 'translateX(0)'; // end position
      }, );
    });

//Cancel Button//
function cancel(id){
const cancel=document.querySelector('#Cancel'+id);
const SelectedItemId=document.querySelector('#SelectedItem'+id);
cancel.addEventListener('click',()=>{
    SelectedItemId.style.display='none';
    Blur.style.display="none";
})}

// Cart array
let cart=JSON.parse(localStorage.getItem("CART"))||[];
updateCart();

//Add to cart
function addtoCart(id){
    console.log(id)
    if(cart.some((items)=>items.id===id)){
        ChangeNumberOfUnits("plus",id)
    }else{
    const items=Products.find((Product)=>Product.id===id);
    cart.push({
      ...items,
      numberOfUnits:1,
    });
    console.log(cart);
    }
    updateCart();

}
// update cart
function updateCart(){
    renderCartItems();
    renderSubtotal();
    
    //save cart to local storage
    localStorage.setItem("CART",JSON.stringify(cart));
}
//calulate total
function renderSubtotal(){
    let totalPrice=0, totalItmes=0;
    cart.forEach((items)=>{
        totalPrice += items.Price*items.numberOfUnits;
        totalItmes+= items.numberOfUnits;
    });
    Total.innerHTML=`<span class="MarginBottom">Total:$${totalPrice.toFixed(2)}</span>`
    Payments.innerHTML=`<h1>Your total is :${totalPrice.toFixed(2)}</h1>`
}
//render cart Items
function renderCartItems(){
    cartItems.innerHTML = "";// clearing cart
    cart.forEach((items)=>{
        cartItems.innerHTML += `
        <div class="CartItem">
            <img src="${items.imgSrc}" width="100px" height="80px">
           
            <div class="Quantity">
                <button class="btn minus"onclick="ChangeNumberOfUnits('plus',${items.id})">+</button>
                <input type="text" value="${items.numberOfUnits}" style="width:30px">
                <button class="btn plus"onclick="ChangeNumberOfUnits('minus',${items.id})">-</button>
            </div>
            <span class="itemPrice">${items.Price}</span>
            <button class="bin" onclick="removeItemfromCart(${items.id})"><i class="fa-solid fa-trash" style="color: #ffffff; "></i></button>
        </div>
        `
    });
}
//close cart
const CartC = document.querySelector('#Cart');
const cancels=document.querySelector('#CancelS');

cancels.addEventListener('click',()=>{
    CartC.style.display='none';
    Blur.style.display = 'none';
    // Blur.style.display="none";
})
//Change Number of Units
function ChangeNumberOfUnits(action,id){
    cart=cart.map((items)=>{
        let numberOfUnits=items.numberOfUnits;
        if(items.id===id){
                if(action==="minus" && numberOfUnits>1){
                    numberOfUnits--;
                }else if (action==="plus" && numberOfUnits<items.inStock){
                    numberOfUnits++;
                    // if(numberOfUnits >= items.inStock){
                    //     alert("You have reaced the total number of itmes we have in stock")
                    // }
                }
        }
        return {
            ...items,
            numberOfUnits,
          
       
        };
    });
    updateCart();
   
  
}


//Remove Item form cart
function removeItemfromCart(id){
    cart=cart.filter((items)=> items.id !== id);
    updateCart();
}
const checkbtn = document.querySelector('#CheckOutBtn');
    const paymentgateway = document.querySelector('#CheckOut');
    checkbtn.addEventListener('click', () => {
      paymentgateway.style.display = 'flex';
      Blur.style.display = 'flex';
      Blur.style.zIndex = '3';
      paymentgateway.style.transform = 'translateX(100%)'; // start position
      
      setTimeout(() => {
        paymentgateway.style.transition = 'transform 0.5s ease-out'; // animation properties
        paymentgateway.style.transform = 'translateX(0)'; // end position
      }, );
    });

    const cancelP=document.querySelector('#CancelP');
    cancelP.addEventListener('click',()=>{
        paymentgateway.style.display='none';
        Blur.style.display = 'none';
        
    })
    const D=document.querySelector('#ShoppingCart');
    const Topic=document.querySelector('#Topic');
   
    const Filter=document.querySelector('#FilterBtn');
    

  const Dark=document.querySelector('#Dark');
    Dark.addEventListener('click',()=>{
    D.style.backgroundColor = "#1c2d31";
    Topic.style.color = "#fff";
   
    
    })
    const Light=document.querySelector('#Light');
    Light.addEventListener('click',()=>{
    D.style.backgroundColor = "#ffeab8";
    Filter.style.backgroundColor = "#216963";
    Filter.style.padding = "20px";
    Filter.style.borderRadius = "30px";
    Filter.style.marginTop = "30px";




    Topic.style.color = "black";
   
    })
    const Blue=document.querySelector('#Blue');
    Blue.addEventListener('click',()=>{
    D.style.backgroundColor = "#25011a";
    Topic.style.color = "white";
    })
    const grey=document.querySelector('#grey');
    Blue.addEventListener('click',()=>{
    D.style.backgroundColor = "#25011a";
    Topic.style.color = "white";
    })
    // function getAvailableQuantity(Product) {
     
    //   const item = cart.find((item) => item.id === Product.id);
    //   return item ? item.numberOfUnits : Product.inStock;
    // }
    function getAvailableQuantity(Product) {
      const item = cart.find((item) => item.id === Product.id);
      const cartQuantity = item ? item.numberOfUnits : 0;
      const availableQuantity = Product.inStock - cartQuantity;
      return availableQuantity >= 0 ? availableQuantity : 0;
    }
    
    function updateAvailableQuantity(id) {
      const Product = Products.find((Product) => Product.id === id);
      const availableQuantity = getAvailableQuantity(Product);
      const availableQuantityElement = document.querySelector(`#SelectedItem${id} .AvailableQuantity`);
      availableQuantityElement.textContent = `Available Quantity in stock: ${availableQuantity}`;
    }
    
    function SelectedItem() {
      SelectedItems.innerHTML = ''; // Clear the SelectedItems element
      Products.forEach((Product) => {
        const availableQuantity = getAvailableQuantity(Product);
        SelectedItems.innerHTML += `
          <div id="SelectedItem${Product.id}" class="SelectedItem">
            <div class="SelectedItemRightSide">
              <div class="SelectedItemImage">
                <img src="${Product.imgSrc}" style="max-width: 800px;">
              </div>
            </div>
            <div class="SelectedItemDiscription">
              <div class="SelectedItemRightSide">
                <button class="Cancel" onclick="cancel(${Product.id})" id="Cancel${Product.id}"><i class="fa-solid fa-xmark"></i></button>
                <h1>${Product.name}</h1>
                <p>
                  ${Product.description}
                </p>
                <h4 class="Price">Price: $ ${Product.Price}</h4>
                <h4 class="AvailableQuantity">Available Quantity in stock: ${availableQuantity}</h4>
                <div class="SelectedItemButtons">
                  <button onclick="addtoCart(${Product.id}); updateAvailableQuantity(${Product.id})" class="SelectedItemCartButton"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    }
    
    SelectedItem();
  
function validateForm() {
  let name = document.forms["Form"]["firstname"].value;
  let cardnumber = document.forms["Form"]["CardNumber"].value;
  let expireDate = document.forms["Form"]["ExpireDate"].value;
  let secretNumber = document.forms["Form"]["SecretNumber"].value;
  let country = document.forms["Form"]["country"].value;

  if (name === "" || cardnumber === "" || expireDate === "" || secretNumber === "" || country === "") {
    alert("Please fill out all fields.");
    return false;
  } else if (secretNumber.length !== 3) {
    alert("The CVV number must be exactly 3 digits.");
    return false;
  } else {
    success();
    return true;
  }
}

function success() {
  const Success = document.querySelector('#Success');
  Success.style.display = "flex";
  setTimeout(function() {
    Success.style.display = "none";
  },4000);
}
