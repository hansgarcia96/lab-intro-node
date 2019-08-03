class SortedList {
    constructor() {
      this.items=[];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a,b) => b - a);
      this.items.reverse();
      this.length++}
    get(position) {
        return this.items[position]
      }
    max() {
        if(this.items.length === 0){
          throw new Error("EmptySortedList");
        }
        return this.items[this.items.length-1];
    }
    min() {
      if(this.items.length === 0){
        throw new Error("EmptySortedList");
      }
      return this.items[0]
    }
    average() {
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      }
      let sum = this.items.reduce((a, b) => a + b, 0)
      return sum/this.items.length;
    }
    sum() {
      if (this.items.length === 0) {
        return 0;
      }
      let sum = this.items.reduce((a, b) => a + b, 0)
      return sum;
      // return this.items[this.items].reduce((a, b) => a + b, 0);
    }
  };
  
  module.exports = SortedList;

  
  