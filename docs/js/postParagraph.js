const paragraphs = document.querySelectorAll('.post-content p');
const arrayParagraphs = [...paragraphs];

arrayParagraphs.forEach((item, index) =>  {
  if(index > 0) {
  item.classList.add('post-paragraph')
} else {
  item.classList.add('first-paragraph');
}
});

console.log(arrayParagraphs)