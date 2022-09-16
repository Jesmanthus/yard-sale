const menuEmail = document.querySelector('.navbar-right--email')
const menuCartIcon = document.querySelector('.navbar-shopping-card') 
const iconMenu = document.querySelector('.icon-menu')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const asideShoppingCard = document.querySelector('#shoppingCartContainer')
const asideProductDetail = document.querySelector('#productDetail')
const asideProductDetailClose = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container')
const productList = []

productList.push({
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?',
  name: 'Bike',
  price: 120,
})

productList.push({
  img: 'https://cdn.pocket-lint.com/r/s/x1920/assets/images/157226-laptops-review-microsoft-surface-laptop-4-review-image1-shvxgffygd.jpg',
  name: 'Laptop',
  price: 880,
})

productList.push({
  img: 'https://i.blogs.es/03ddaf/tcl/840_560.jpg',
  name: 'Smart TV',
  price: 120,
})

for (product of productList) {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')

  const productImg = document.createElement('img')
  productImg.setAttribute('src', product.img)
  productImg.addEventListener('click', toggleProductDetail)

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

iconMenu.addEventListener('click', toggleMobileMenu)
menuEmail.addEventListener('click', toggleDesktopMenu)
menuCartIcon.addEventListener('click', toggleAsideShoppingCard)
asideProductDetailClose.addEventListener('click', removeProductDetail)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive')
  asideShoppingCard.classList.add('inactive')
  asideProductDetail.classList.add('inactive')
  asideShoppingCard.classList.remove('is-actived')
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('is-actived')
  asideShoppingCard.classList.remove('is-actived')
  asideProductDetail.classList.add('inactive')
}

function toggleAsideShoppingCard() {
  asideShoppingCard.classList.toggle('is-actived')
  asideShoppingCard.classList.remove('inactive')
  mobileMenu.classList.remove('is-actived')
  asideProductDetail.classList.add('inactive')
  desktopMenu.classList.add('inactive')
}

function toggleProductDetail() {
  asideProductDetail.classList.remove('inactive')
  asideShoppingCard.classList.remove('is-actived')
  desktopMenu.classList.add('inactive')
}

function removeProductDetail() {
  asideProductDetail.classList.add('inactive')
}