// SECTION Global Variables

const iceCream = [{

  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1.25,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 1.25,
  quantity: 0

}]

// Selection Functions


function clickCookieDough() {
  let cookieIceCream = iceCream.find(cookieIceCream => cookieIceCream.name == 'Cookie Dough')
  // @ts-ignore
  cookieIceCream.quantity++
  console.log(cookieIceCream);

  drawCart()
  drawTotal()
}

function clickVanilla() {
  let vanillaIceCream = iceCream.find(vanillaIceCream => vanillaIceCream.name == 'Vanilla')
  // @ts-ignore
  vanillaIceCream.quantity++
  console.log(vanillaIceCream);

  drawCart()
  drawTotal()
}

function clickStrawberry() {
  let strawberryIceCream = iceCream.find(strawberryIceCream => strawberryIceCream.name == 'Strawberry')
  // @ts-ignore
  strawberryIceCream.quantity++
  console.log(strawberryIceCream);

  drawCart()
  drawTotal()
}


function drawCart() {

  let stringOfIceCreamFlavors = ''

  iceCream.forEach(iceCreamFlavors => {
    if (iceCreamFlavors.quantity > 0) {
      stringOfIceCreamFlavors += `
      <li>
            <div class="d-flex justify-content-between">
              <span>${iceCreamFlavors.name}</span>
              <span>${iceCreamFlavors.quantity}</span>
              <span>${iceCreamFlavors.price}</span>
            
            </div>
          </li>
      `
    }
  })

  const cartElement = document.getElementById('cart')
  // @ts-ignore
  cartElement.innerHTML = stringOfIceCreamFlavors
}


function drawTotal() {
  let cartSum = 0

  iceCream.forEach(iceCreamFlavor => {
    cartSum += iceCreamFlavor.price * iceCreamFlavor.quantity
  })

  let cartTotalElement = document.getElementById('cartTotal')
  // @ts-ignore
  cartTotalElement.innerText = cartSum.toString()
}
