import {defineStore} from 'pinia'

export const gloableStore = defineStore('gloableStore', () => {
    setTheme(localStorage.getItem('theme'))
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }
    return {setTheme}
})

