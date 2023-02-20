const findComplement = (num: number): number => {
  //! 1. Строим дерево
  let binary = num.toString(2).split("");
  //!2. Строим цикл
  for (let i = 0; i < binary.length; i++) {
    //!3. Строим условие
    if (binary[i] === "1") {
      binary[i] = "0";
    } else {
      binary[i] = "1";
    }
  }
  //!4.возвращаем результат
  return parseInt(binary.join(""), 2);
};
