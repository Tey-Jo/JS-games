var word = 'Berlin'
var answer = prompt(word)
while (true) {
    if (word[word.length - 1] === answer[0]) {
        alert('Stimmt!');
        word = answer;
    } else {
        alert('last letter need to be first letter in next word ');
        word = answer;
        //  미완성 = 무한루프 탈출 필요함
    }
}