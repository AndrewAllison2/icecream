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
}

function clickVanilla() {
  let vanillaIceCream = iceCream.find(vanillaIceCream => vanillaIceCream.name == 'Vanilla')
  // @ts-ignore
  vanillaIceCream.quantity++
  console.log(vanillaIceCream);
}

function clickStrawberry() {
  let strawberryIceCream = iceCream.find(strawberryIceCream => strawberryIceCream.name == 'Strawberry')
  // @ts-ignore
  strawberryIceCream.quantity++
  console.log(strawberryIceCream);
}


function drawQuantity() {

  let stringOfIceCreamQuantity = ''

  iceCream.forEach(iceCreamQuantity => {
    if (iceCreamQuantity.quantity > 0) {
      stringOfIceCreamQuantity += `
      
      `

      console.log(iceCreamQuantity);


    }
  })
}
