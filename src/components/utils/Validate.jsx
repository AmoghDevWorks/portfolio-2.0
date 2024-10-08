const checkValid = (email) =>{
    // eslint-disable-next-line no-useless-escape
    const isEmailValid =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    if(!isEmailValid) return "Email is not valid"

    return null
}

export default checkValid