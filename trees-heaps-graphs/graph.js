function Node(value) {
  return {
    value: value,
    children: [],
  }
}

function Graph(rootValue) {
  this.contents = new Node(rootValue);
  return this;
}