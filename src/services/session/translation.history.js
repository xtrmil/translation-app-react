const addToHistory = (word) => {
    let temp = [];
    if (word.length > 0) {

        if (localStorage.getItem('history') == null) {

            temp.push(word)
            localStorage.setItem('history', JSON.stringify(temp));

        } else {

            temp = JSON.parse(localStorage.getItem('history'));

            if (temp.includes(word) === false) {
                if (temp.length >= 10) {

                    temp.shift();
                    temp.push(word);

                } else {
                    temp.push(word);
                }
                localStorage.setItem('history', JSON.stringify(temp));
            }
        }
    }
}

const getHistory = () => {
    const wordHistory = JSON.parse(localStorage.getItem('history'));
    return wordHistory;
}

export { addToHistory, getHistory }