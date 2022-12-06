import { createContext, useState } from 'react'

export const Data = createContext()

function Provider({ children }) {
    // Arrays
    const region = ['北海道・東北', '関東', '中部', '近畿', '中国', '四国', '九州']

    const prefect = [
        {
            name: '北海道・東北',
            arr: ['北海道', '青森県', '岩手県', '秋田県', '宮城県', '山形県', '福島県'],
        },
        {
            name: '関東',
            arr: ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'],
        },
        {
            name: '中部',
            arr: ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県'],
        },
        {
            name: '近畿',
            arr: ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'],
        },
        {
            name: '中国',
            arr: ['鳥取県', '島根県', '岡山県', '広島県', '山口県'],
        },
        {
            name: '四国',
            arr: ['徳島県', '香川県', '愛媛県', '高知県'],
        },
        {
            name: '九州',
            arr: ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],
        },
    ]

    // Usestated
    const [theme, setTheme] = useState('light')

    const [width, setWidth] = useState(65)

    const [chatshow, setChatshow] = useState('none')

    const [login, setLogin] = useState('enable')

    const [logout, setLogout] = useState('disable')

    const [chatbox, setChatbox] = useState('hide')

    const [select, setSelect] = useState('北海道・東北')

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

    const handleSelect = (value) => {
        setSelect(value)
    }

    // Provider value
    const value = {
        // Array
        region,
        prefect,

        // State
        theme,
        width,
        chatshow,
        login,
        logout,
        chatbox,
        select,

        // Set State
        setLogin,
        setLogout,
        setChatbox,

        // Function
        handleChange,
        handleChangeWidth,
        handleChatshow,
        handleSelect,
    }

    return <Data.Provider value={value}>{children}</Data.Provider>
}

export default Provider
