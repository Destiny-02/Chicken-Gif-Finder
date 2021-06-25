function handleSearchClick() {
  const searchInput = document.getElementById('searchBar__input');

  const resultsContainer = document.getElementById('resultsContainer');

  let text = searchInput.value;

  // make search input chicken-related 
  if (!searchInput.value.includes('chicken')) {
    text = text.concat(' chicken');
  }

  // make API request for GIF search
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=byMhaTj3huV8QJqRwc6rmml31CPMEBAT&q=${text}`)
    .then(function(res) {
      return res.json();
    })
    .then(function(body) {
      // clear results on the page
      resultsContainer.innerHTML = '';

      // loop through each data item
      body.data.forEach((gifItem) => {

        // extract gif image URL
        const imageUrl = gifItem.images.fixed_width.url;

        // create image element with gif image for src
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        // add the new image element to the end of the results
        resultsContainer.appendChild(imageElement);
      });
    });
}

// attach a function to call when the user clicks on the search bar button
document.getElementById('searchBar__button').addEventListener('click', handleSearchClick);
// alternatively, add option for the user to press the enter key through the search bar
document.getElementById('searchBar__input').addEventListener('keypress', function(e) {
if (e.key === 'Enter') {
  handleSearchClick();
}
});
