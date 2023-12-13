//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

//Наступний код має працювати:

// removeElement(array, 5);
// console.log(array);
// Результат: [1, '2', 3, '5', 4, 6, '7']

const array = [1, "2", 5, 3, "5", 4, 5, 6, "7"];

function removeElement(arr, item) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === item) {
      arr.splice(i, 1);
    }
  }
}

removeElement(array, 5);

console.log(array);
