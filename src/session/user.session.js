 const register = (username) => {
    localStorage.setItem('ta_session', JSON.stringify(username));
}

 const logout = () => {
    localStorage.clear();
}

const getUser = () => {
    const user = JSON.parse(localStorage.getItem("ta_session"));

    return user;
}
export {register, getUser, logout};