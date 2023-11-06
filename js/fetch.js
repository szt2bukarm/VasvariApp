import { API_LINK } from "./config.js";

// const register = async function(username,password) {
//     try {
//         const reg = await fetch(`${API_LINK}User/`, {
//             method: "PUT",
//             body: JSON.stringify({
//                 'id': 0,
//                 'username' : username,
//                 'password' : password,
//                 'email' : null,
//                 'name' : null,
//                 'role' : null
//             }),
//             headers: {
//                 "Content-Type" : "application/json",
//             },
//         })
//         const res = reg.json()
//         console.log(res);
//     } catch (err) {
//         console.log('elszaródót ... :(');
//     }
// }

const login = async function(username,password) {
    try {
        const reg = await fetch(`${API_LINK}user/login?Username=${username}&Password=${password}`)
        const res = await reg.json()
        console.log(res);
    } catch (err) {
        console.log('elszaródót ... :(');
    }
}

// login('fasz','asd')
// get()
// register('sanyi','asd')