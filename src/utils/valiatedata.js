import React from 'react'

const valiatedata = (email,password) => {

    let isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    let isPasswordValid = /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/.test(password);

    if(!isEmailValid) return 'Email is not valid'
    if(!isPasswordValid) return 'Password is not valid'
}

export default valiatedata