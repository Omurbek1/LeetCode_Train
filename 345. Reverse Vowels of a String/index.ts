/**
 * 
 * @param s 
 * @returns 
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 */

function reverseVowels(s: string): string {
    //TODO: 1) Строим дерево
    const vowels = {}
    //TODO: 2) Строим цикл
    for (const char of 'aeiouAEIOU') {
        vowels[char] = true;
    }
    //TODO: 3) Перебираем строку

    const characters = s.split('');
    //TODO: 4)ПЕРЕБИРАЕМ СТРОКУ
    let left = 0;
    let right = s.length - 1;
//TODO: 5) Строим условие
    while (left < right) {
        while (left < right && !(s[left] in vowels)) {
            left++;
        }
        //TODO: 6) Строим условие

        while (left < right && !(s[right] in vowels)) {
            right--;
        }
        //TODO: 7)Функция обмена
        swap(characters, left, right);
        left++;
        right--;

    }
    //TODO: 8) Возвращаем результат
    return characters.join('');
};

//TODO: 9) Функция обмена
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}