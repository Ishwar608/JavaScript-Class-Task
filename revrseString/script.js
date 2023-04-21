function reverseWords() {
    let str = document.getElementById('text').value;

    const words = str.split(' ');
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    }).join(' ');


    document.querySelector('#input').innerHTML = `Input :- ${str}`;
    document.querySelector('#output').innerHTML = `Output :- ${reversedWords}`;

}
