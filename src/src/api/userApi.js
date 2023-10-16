import store from "../store";
import { setUser, setToken } from "../store/userSlice";
import axiosInstance from "./axiosInstance"

export const saveSSOUser = async (data) => {
    let body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        provider: data.provider
    }
    if(data.isAdmin) {
        body.role = 2
    } else {
        body.role = 1
    }
    try {
        let res = await axiosInstance.post("users/sso/login", body);
        if(res.status == 200) {
            if(res.data.token && res.data.user) {
                store.dispatch(setUser(res.data.user))
                store.dispatch(setToken(res.data.token))
            }
            return true;
        } else {
            return false
        }
    } catch(err) {
        console.log(err)
        return false
    }
}

export const signupUser = async (data) => {
    let body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        provider: data.provider,
        password: data.password
    }
    if(data.isAdmin) {
        body.role = 2
    } else {
        body.role = 1
    }
    try {
        let res = await axiosInstance.post("users/signup", body);
        if(res.status == 200) {
            return true;
        } else {
            return false
        }
    } catch(err) {
        console.log(err)
        return false
    }
}

export const loginUser = async (data) => {
    let body = {
        email: data.email,
        password: data.password
    }
    try {
        let res = await axiosInstance.post("users/login", body);
        if(res.status == 200) {
            if(res.data.token && res.data.user) {
                store.dispatch(setUser(res.data.user))
                store.dispatch(setToken(res.data.token))
            }
            return true;
        } else {
            return false
        }
    } catch(err) {
        console.log(err);
        return false
    }

}

export const userLogout = () => {
    store.dispatch(setUser());
    store.dispatch(setToken());
}
