// Set state object with values that are changed programatically
const state = {
  searchTerm: null,
  images: null,
  currentImage: null
};

// Handles updating the state
const setState = (toSet, newValue) => {
  state[toSet] = newValue;
};
export { state, setState };
