const menuEmail = document.querySelector('.navbar-right--email')
const menuCartIcon = document.querySelector('.navbar-shopping-card') 
const iconMenu = document.querySelector('.icon-menu')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const asideProductDetails = document.querySelector('.product-details')
const cardsContainer = document.querySelector('.cards-container')

iconMenu.addEventListener('click', toggleMobileMenu)
menuEmail.addEventListener('click', toggleDesktopMenu)
menuCartIcon.addEventListener('click', toggleAsideProductDetails)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive')
  asideProductDetails.classList.add('inactive')
  asideProductDetails.classList.remove('is-actived')

  if(desktopMenu.classList.contains('inactive')) {
    asideProductDetails.classList.remove('inactive')
  }
}

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?" alt="" class="product-img">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
</div>
*/

function toggleMobileMenu() {
  mobileMenu.classList.remove('inactive')
  mobileMenu.classList.toggle('is-actived')
  asideProductDetails.classList.remove('is-actived')
}

function toggleAsideProductDetails() {

  if(!desktopMenu.classList.contains('inactive')) {
    desktopMenu.classList.add('inactive')
    asideProductDetails.classList.remove('inactive')
    asideProductDetails.classList.add('is-actived')
    mobileMenu.classList.remove('is-actived')
  } else {
    asideProductDetails.classList.toggle('is-actived')
    mobileMenu.classList.remove('is-actived')
    desktopMenu.classList.add('inactive')
  }
}

const productList = []

productList.push({
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?',
  name: 'Bike',
  price: 120,
})

productList.push({
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?',
  name: 'Laptop',
  price: 880,
})

productList.push({
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?',
  name: 'Smart TV',
  price: 120,
})

for (product of productList) {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')

  const productImg = document.createElement('img')
  productImg.setAttribute('src', product.img)

  const productInfo = document.createElement('div')
  productInfo.classList.add('product-info')

  const productInfoText = document.createElement('div')
  
  const productPrice = document.createElement('p')
  productPrice.innerText = '$' + product.price
  const productName = document.createElement('p')
  productName.innerText = product.name

  const productInfoFigure = document.createElement('figure')
  const productImageCart = document.createElement('img')
  productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg')

  productInfoFigure.appendChild(productImageCart)

  productInfoText.appendChild(productPrice)
  productInfoText.appendChild(productName)

  productInfo.appendChild(productInfoText)
  productInfo.appendChild(productInfoFigure)

  productCard.appendChild(productImg)
  productCard.appendChild(productInfo)

  cardsContainer.appendChild(productCard)
}