export const addToHistory = (word) => {

    if (localStorage.getItem('history') == null) {
        let temp = [];
        temp.push(word)

        localStorage.setItem('history', JSON.stringify(temp));
    } else {
        let temp = [];
        temp = JSON.parse(localStorage.getItem('history')) || [];
        if (temp.length >= 10) {
            temp.shift();
        }
        temp.push(word);

        localStorage.setItem('history', JSON.stringify(temp));
    }
}

export const getHistory = () => {
    let wordHistory = JSON.parse(localStorage.getItem('history'));
    return wordHistory;
}