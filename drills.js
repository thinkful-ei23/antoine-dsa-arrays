const Array = require("./array");

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  arr._resize(12);

  // arr = new Array();
  // arr.push("antoine");
  // console.log(arr.get(0));
  console.log(arr);
}

main();
