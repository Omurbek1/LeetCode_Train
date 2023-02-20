function reverseVowels(s: string): string {
    const vowels = {}
    for (const char of 'aeiouAEIOU') {
        vowels[char] = true;
    }

    const characters = s.split('');

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !(s[left] in vowels)) {
            left++;
        }

        while (left < right && !(s[right] in vowels)) {
            right--;
        }
        swap(characters, left, right);
        left++;
        right--;

    }
    return characters.join('');
};

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}