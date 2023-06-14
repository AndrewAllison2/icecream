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

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: .25,
  quantity: 0,
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: .25,
  quantity: 0,
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
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

function clickSprinkles() {
  let sprinkleTopping = toppings.find(sprinkleTopping => sprinkleTopping.name == 'Sprinkles')
  // @ts-ignore
  sprinkleTopping.quantity++
  console.log(sprinkleTopping);
  drawCart()
  drawTotal()
}

function clickChocolateChips() {
  let chipTopping = toppings.find(chipTopping => chipTopping.name == 'Chocolate Chips')
  // @ts-ignore
  chipTopping.quantity++

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
              <span>${iceCreamFlavors.price.toFixed(2)}</span>
              <span>${iceCreamFlavors.quantity}</span>
              
            
            </div>
          </li>
      `
    }
  })

  let stringofToppings = ''

  toppings.forEach(toppingFlavors => {
    if (toppingFlavors.quantity > 0) {
      stringofToppings += `
      <li>
      <div class="d-flex justify-content-between">
      <span>${toppingFlavors.name}</span>
      <span>${toppingFlavors.price}</span>
      <span>${toppingFlavors.quantity}</span>
      
      
      </div>
      </li>
      `
    }
  })

  const cartElement = document.getElementById('cart')
  // @ts-ignore
  cartElement.innerHTML = stringOfIceCreamFlavors + stringofToppings
}


function drawTotal() {
  let cartSum = 0

  iceCream.forEach(iceCreamFlavor => {
    cartSum += iceCreamFlavor.price * iceCreamFlavor.quantity
  })

  toppings.forEach(toppingFlavor => {
    cartSum += toppingFlavor.price * toppingFlavor.quantity
  })

  let cartTotalElement = document.getElementById('cartTotal')
  // @ts-ignore
  cartTotalElement.innerText = cartSum.toString()
}
