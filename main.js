const main = document.querySelector(".card-container");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderData(data.products[5]);
    renderData(data.products[6]);
    renderData(data.products[7]);
    renderData(data.products[8]);
  });

function renderData(product) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardLeft = document.createElement('div');
  cardLeft.className = 'cardLeft';
  const image = document.createElement('img');
  image.src = product.images[0];

  const cardMiddle = document.createElement('div');
  cardMiddle.className = 'cardMiddle';
  const description= document.createElement('span');
  description.className='description'
//   const titleSpan = document.createElement('span');
  const priceSpan = document.createElement('span');
  priceSpan.className='price'
//   titleSpan.innerText = product.title;
  description.innerText= product.description
  priceSpan.innerText = `${product.price} AZN`

  const cardRight = document.createElement('div');
  cardRight.className = 'cardRight';
  const icons= document.createElement('div')
  icons.className='icons'
  const iconLetter = document.createElement('i');
  iconLetter.className = 'fa-solid fa-envelope';
  iconLetter.style.color = '#737d9b';
  const iconHeart = document.createElement('i');
  iconHeart.className = 'fa-solid fa-heart';
  iconHeart.style.color = '#737d9b';
  const call = document.createElement('span');
  call.className='call'
  call.innerText = 'Zeng edin';

  card.appendChild(cardLeft);
  card.appendChild(cardMiddle);
  card.appendChild(cardRight);
  cardLeft.appendChild(image);
//   cardMiddle.appendChild(titleSpan);
  cardMiddle.appendChild(description)
  cardMiddle.appendChild(priceSpan);
  icons.appendChild(iconLetter);
  icons.appendChild(iconHeart);
  cardRight.appendChild(icons);
  cardRight.appendChild(call);
  main.appendChild(card);
}
