let array = [5,3,7,0,1,-3,-6]

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
          if (array[j] > array[j + 1]) {
              let tempValue = array[j];
              [ array[j], array[j+1] ] = [ array[j+1], tempValue ]
          }
      }
  }
  return array;
};

console.log(bubbleSort(array))