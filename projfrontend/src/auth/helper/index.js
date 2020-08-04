import {API} from "../../backend";

export const signup = user => {
    return fetch(`${API}/signup`,{
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}


export const signin = user => {
    return fetch(`${API}/signin`,{
        method:"POST",
        headers: {
            Accept: "application/json", // accept doesnt have " " 
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const authenticate = (data, next) => { // this fxn set our token in user browser
    if(typeof window !== "undefined"){ // mean window object is accessible to us
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}

export const signout = next => {
    if(typeof window !== "undefined"){ // mean window object is accessible to us
        localStorage.removeItem("jwt")
        next();

        return fetch(`${API}/signout`,{
            method: "GET"
        })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err))
    }
}

export const isAuthenticated = () => {
    if(typeof window === "undefined"){ //only in window obj jwt get store so we are accessing it
        return false;
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    } else{
        return false;
    }
}
