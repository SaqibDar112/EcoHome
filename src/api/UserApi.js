import { API } from "../Config"

const token=''
export const register = (user) => {
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log("error in fetching", err)
        })
}
export const emailVerify = token => {
    return fetch(`${API}/confirm/${token}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.log(err)
        })
}
//sign in
export const login = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}
export const authenticate = (data) => {
    localStorage.setItem('jwt', JSON.stringify(data))
}
export const isAuthenticated = () => {
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    } else {
        return false
    }
}

export const signout = ()=>{
    localStorage.removeItem('jwt')
    return fetch(`${API}/signout`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// After successfully logging in and receiving the token from the server

// Include the token as a cookie in the request headers
export const addActivity=activity_info=>{
    return fetch(`${API}/activity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(activity_info)
      })
      .then(res=>{
            return res.json()
      })
      .catch(err=>{
        console.log(err)
      })
}
  //listing out all activities 
  export const getAllActivies=()=>{
    return fetch(`${API}/allactivities`,{
        method:'GET'
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
  }