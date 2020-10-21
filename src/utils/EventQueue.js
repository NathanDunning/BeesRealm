export default class EventQueue {
  collection = [];

  print = () => {
    console.log(this.collection);
  };

  enqueue = (e) => {
    this.collection.push(e);
  };

  dequeue = () => {
    return this.collection.shift();
  };

  front = () => {
    return this.collection[0];
  };

  size = () => {
    return this.collection.length;
  };

  isEmpty = () => {
    return this.collection.length === 0;
  };

  clear = () => {
    this.collection.splice(0, this.collection.length);
  };
}
