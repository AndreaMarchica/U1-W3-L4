const allNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
];

const drawANumber = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

(items = allNumbers.length),
  (total = items - 1),
  (index = drawANumber(0, total));

console.log(allNumbers[index]);

// Oggi è un disastro su tutta la linea... devo riguardare tutto poichè non mi riesce nulla
// Nella teoria sembra chiaro e lineare per quanto complessa, ma quando lo si applica...
