const UserAxios = require('axios').create()

UserAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

module.exports = UserAxios