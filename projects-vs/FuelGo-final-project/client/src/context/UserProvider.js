import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()
const userAxios = axios.create()

// Adds token to userAxios for requests going to /api.
userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        posts: [],
        userPosts: [],
        authErrMsg: ""
    }
    const [userState, setUserState] = useState(initState)

    const signup = credentials => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                // save user info and token in localStorage and react state
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState(prevUserState => ({
                        ...prevUserState,
                        user: user,
                        token: token
                    })
                )
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const login = credentials => {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user: user,
                    token: token
                })
            )
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            posts: [],
            userPosts: [],
            authErrMsg: ""
        })
    }


    const handleAuthErr = errMsg => {
        setUserState(prevUserState => ({
            ...prevUserState,
            authErrMsg: errMsg
        }))
    }

    const clearAuthErr = () => {
        setUserState(prevUserState => ({
            ...prevUserState,
            authErrMsg: ""
        }))
    }

    const getAllPosts = () => {
        userAxios.get("/api/post")
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    posts: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    const getUserPosts = () => {
        userAxios.get("/api/post/user")
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    userPosts: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    const addPost = newPost => {
        userAxios.post("/api/post", newPost)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    posts: [...prevUserState.posts, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider
            value={{
                user: userState.user,
                token: userState.token,
                posts: userState.posts,
                authErrMsg: userState.authErrMsg,
                clearAuthErr: clearAuthErr,
                userPosts: userState.userPosts,
                signup: signup,
                login: login,
                logout: logout,
                getAllPosts: getAllPosts,
                getUserPosts: getUserPosts,
                addPost: addPost
            }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider

