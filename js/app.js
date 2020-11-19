document.addEventListener('DOMContentLoaded', () => {

  // const titleInput = document.createElement('li');
  // titleInput = document.querySelector('#title');
  // titleInput.addEventListener('input', handleInput);
  

  // const authorInput = document.createElement('li');
  // authorInput = document.querySelector('#author');
  // authorInput.addEventListener('input', handleAuthorInput);

  // const categorySelect = document.createElement('li');
  // categorySelect = document.querySelector('#category');
  // categorySelect.addEventListener('change', handleCategorySelect);

  // const form = document.querySelector('#new-item-form');
  // form.addEventListener('submit', handleFormSubmit);

  const submitForm = document.querySelector('#new-item-form');
  submitForm.addEventListener('submit', handleFormSubmit);


  console.log('JavaScript loaded');
});

// const handleInput = function (event) {
//   const resultParagraph = document.querySelector('#reading-list');
//   resultParagraph.textContent = `${this.value}`;
// };

// const handleAuthorInput = function (event) {
//   const resultParagraph = document.querySelector('#reading-list');
//   resultParagraph.textContent = `${event.target.value}`;
// };

// const handleCategorySelect = function (event) {
//   const resultParagraph = document.querySelector('#reading-list');
//   resultParagraph.textContent = `${this.value}`
// };

const handleFormSubmit = function(event){
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const titleParagraph = document.createElement('p')
  titleParagraph.textContent = `${title}`

  const authorParagraph = document.createElement('p')
  authorParagraph.textContent = `${author}`
  
  const categoryParagraph = document.createElement('p')
  categoryParagraph.textContent = `${category}`

  const newReadingListItem = document.createElement('ul')
  newReadingListItem.appendChild(titleParagraph)
  newReadingListItem.appendChild(authorParagraph)
  newReadingListItem.appendChild(categoryParagraph)
  
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newReadingListItem)

};

// const handleFormSubmit = document.querySelector('#reading-list');
// handleFormSubmit.appendChild(titleInput, authorInput, categorySelect);