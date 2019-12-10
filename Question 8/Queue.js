function Queue() {

    var items = [];

    this.enqueue = function (element) {
      items.push(element);
    };
  
    this.dequeue = function () {
      if (isEmpty())
        return "underflow"
      return items.shift();
    };
    
    this.front = function () {
      if (isEmpty())
          return "no elements in queue";
      return items[0];
    };

    this.isEmpty = function () {
      return this.items.length == 0;
    };
   
    this.size = function () {
      return items.length
    };
   
    this.toString = function () {
     for (let i=0; i < items.length; i++)
      str += items[i] = " "
      return str;
    };
  }
  
  module.exports = Queue;