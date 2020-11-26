export const addToHistory = (word) => {
    let temp = [];
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

export const getHistory = () => {
    const wordHistory = JSON.parse(localStorage.getItem('history'));
    return wordHistory;
}