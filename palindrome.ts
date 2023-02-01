const PALINDROMES = ['Atar a la rata', 'Anita lava la tina', 'Esto no es un palindromo', 'Roma ni se conoce sin oro, ni se conoce sin amor'];

function isPalindrome(text: string): boolean {
    // logic
    return true;
}

for (const palindrome of PALINDROMES) {
    const is = isPalindrome(palindrome);
    console.log(`${palindrome} - ${is ? 'is palindrome' : 'is not palindrome'}`);
}
