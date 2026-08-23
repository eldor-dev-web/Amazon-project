const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  const products = JSON.parse(xhr.response);
  console.log(products);
});

xhr.open('GET', 'https://supersimplebackend.dev/products');
xhr.send();