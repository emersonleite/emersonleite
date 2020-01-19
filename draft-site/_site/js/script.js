//console.log("olá");

//window.alert("olá");

//const imgPhoto = document.querySelector('img[src^="img/foto"]');

const imgs =  document.querySelectorAll('img');

imgs.forEach((img) => {
  img.addEventListener('click', function() {
    //event.preventDefault();
    console.log('teste...');
  })
  img.addEventListener('mouseenter', () => {
    console.log("olá...")
  })
})