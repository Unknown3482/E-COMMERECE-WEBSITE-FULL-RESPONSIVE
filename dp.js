<script>
        var cartIcon = document.querySelector("#cart-icon");
        var cart = document.querySelector(".cart");
        var closecart = document.querySelector("#close-cart");

        cartIcon.onclick = () =>{
            cart.classList.add("active");
        };
        closecart.onclick = () =>{
            cart.classList.remove("active");
        };

        if (document.readyState == 'loading'){
            document.addEventListener('DOMContentLoaded', ready);
        }else{
            ready();
        }

        function ready(){
            var removeCartButtons = document.getElementsByClassName('cart-remove')
            console.log(removeCartButtons);
            for (var i = 0; i < removeCartButtons.length; i++){
                var button = removeCartButtons[i]
                button.addEventListener('click', removeCartItem)
            }


            var quantityInputs = document.getElementsByClassName('cart-quantity')
            for (var i = 0; i < quantityInputs.length; i++){
                var input = quantityInputs[i];
                input.addEventListener('change', quantityChanged);
            }
             var addCart = document.getElementsByClassName('add-cart')
             for (var i = 0; i < addCart.length; i++){
             var button = addCart[i];
            button.addEventListener('click', addCartClicked);
             }
        }

        function removeCartItem(event){
            var buttonClicked = event.target;
            buttonClicked.parentElement.remove();
            updatetotal();
        }



        function quantityChanged(event){ 
            var input = event.target;
            if (isNaN(input.value) || input.value <= 0){
                input.value = 1;
            }
            updatetotal();
        }


        function addCartClicked(event){
            var button = event.target
            var shopProducts = button.parentElement
            var tittle = shopProducts.getElementsByClassName('product-title')[0].innerText;
            var price = shopProducts.getElementsByClassName('price')[0].innerText;
            var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
            addProductToCart(tittle, price, productImg);
            updatetotal()
        }
       function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.querySelector('.card-content');

    // Check if the item is already in the cart
    var cartItemsName = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsName.length; i++) {
        if (cartItemsName[i].innerText === title) {
            alert("You already have this item in the cart");
            return; 
        }
    }

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.appendChild(cartShopBox);

    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}


        




        function updatetotal() {
    var cartContent = document.getElementsByClassName("card-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];

        var price = parseFloat(priceElement.innerText);
        var quantity = parseInt(quantityElement.value); 

        total += price * quantity;

        total = Math.round(total * 100) / 100;
    }

    document.getElementsByClassName('total-price')[0].innerText = 'Rs' + total;
}

     </script>












<div class="submain">
                  <div class="sm1">
                    <img src="watches/boyw1.jpg"  width="150px" height="150px" class="subimg" alt="">
                  </div>

                  <div class="sm1">
                    <img src="sm/wp1/sm1.webp" width="150px" height="150px" class="subimg" alt="">
                  </div>

                  <div class="sm1">
                    <img src="sm/wp1/sm2.webp"  width="150px" height="150px" class="subimg" alt="">
                  </div>

                  <div class="sm1">
                    <img src="sm/wp1/sm3.webp"   width="150px" height="150px" class="subimg" alt="">
                  </div>
          </div>