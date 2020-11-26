const register = (username) => {
    localStorage.setItem('user', JSON.stringify(username));
}

 const logout = () => {
    localStorage.clear();
}

const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return user;
}
export {register, getUser, logout};