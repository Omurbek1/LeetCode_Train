function reverseWords(s: string): string {

    const words = s.split(' ').filter(word => word.length > 0);
    return words.reverse().join(' ');
};