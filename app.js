var state = {
  items: []
};

var listItemTemplate = (
  '<li>' +
    '<span class="shopping-item js-shopping-item"></span>' +
    '<div class="shopping-item-controls">' +
      '<button class="js-shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>'
);

function addItem(state, item) {
  state.items.push({
    displayName: item,
    checkedOff: false
  });
}

function getItem(state, itemIndex) {
  return state.items[itemIndex];
}

function deleteItem(state, itemIndex) {
  state.items.splice(itemIndex, 1);
}

function updateItem(state, itemIndex, newItemState) {
  state.items[itemIndex] = newItemState;
}