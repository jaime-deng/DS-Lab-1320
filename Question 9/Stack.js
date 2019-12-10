function Stack() {

  var items = [];

  this.push = function (element) {
    items.push(element); 
  };

  this.pop = function () {
    if (items.length == 0)
      return "Underflow";
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.clear = function () {
    top =0;
  };

  this.size = function () {
    return top;
  };

  this.toString = function () {

  };
}

module.exports = Stack;