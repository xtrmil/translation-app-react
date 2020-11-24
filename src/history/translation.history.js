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
// eslint-disable-next-line
export const getHistory = () => {
    let collected = JSON.parse(localStorage.getItem('history'));
    return collected;
}