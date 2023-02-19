//*  Первый уникальный символ в строке - суйломдогу кайталанбаган символду табуу керек
/**
 * 
 * Дана строка s, найти в ней первый неповторяющийся символ и вернуть его индекс . Если он не существует, верните -1.

 

Пример 1:

Ввод: s = "leetcode"
 Вывод: 0
Пример 2:

Вход: s = "loveleetcode"
 Выход: 2
Пример 3:

Вход: s = "aabb"
 Выход: -1
 */
const firstUniqChar = (s: string): number => {
    //Todo: 1. Строку перевести в Обьект
    const characterCount = {};
    //!2. Перебрать Обьект и посчитать количество каждого символа
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        characterCount[char] = characterCount[char] + 1 || 1;
    }
    //!3. Перебрать массив и найти первый символ с количеством 1
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (characterCount[char] === 1) {
            return i;
        }
    }
    //! 4. Если не нашли, то вернуть -1
    return -1;
};

// const find:string | number=firstUniqChar('omurbekmamytbekov');
// console.log(find);

//Result: 2