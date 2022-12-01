import { createContext, useState } from 'react'

export const Data = createContext()

function Provider({ children }) {
    // Usestated
    const [theme, setTheme] = useState('light')

    const [width, setWidth] = useState(65)

    const [chatshow, setChatshow] = useState('block')

    const [login, setLogin] = useState('enable')

    const [logout, setLogout] = useState('disable')

    const [chatbox, setChatbox] = useState('hide')

    // Handle
    const handleChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')

        window.localStorage.setItem('theme', theme)
    }

    const handleChangeWidth = () => {
        setWidth(width === 65 ? 250 : 65)
    }

    const handleChatshow = () => {
        setChatshow(chatshow === 'none' ? 'block' : 'none')
    }

    // Provider value
    const value = {
        theme,
        width,
        chatshow,
        login,
        logout,
        chatbox,
        handleChange,
        handleChangeWidth,
        handleChatshow,
        setLogin,
        setLogout,
        setChatbox,
    }

    return <Data.Provider value={value}>{children}</Data.Provider>
}

export default Provider
