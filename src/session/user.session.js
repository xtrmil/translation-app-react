export const register = (username) => {
    localStorage.setItem('ta_session', JSON.stringify(username));
}

export const logout = () => {
    localStorage.clear();
}