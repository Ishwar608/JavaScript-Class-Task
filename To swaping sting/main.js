



const swaping = () => {
    const inputStr = "Hi there. My name is Sam. This is my lucky day. I like coding so much. This is it.";
    const skipNum = 2;

    const sentences = inputStr.split('. ');
    let output = '';

    for (const sentence of sentences) {
        const words = sentence.split(' ');
        if (words.length > skipNum) {
                words.reverse();
        }
        output += words.join(' ') + '. ';
    }

    console.log(output);
}
swaping();


