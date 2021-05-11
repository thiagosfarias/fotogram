export default function validate(username){
    const usernameRegex = /^[a-zA-Z0-9]+$/
    
    return usernameRegex.test(String(username).toLocaleLowerCase())
}
