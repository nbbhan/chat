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

    const [width, setWidth] = useState('closeNav')

    const [chatshow, setChatshow] = useState('none')

    const [login, setLogin] = useState('enable')

    const [logout, setLogout] = useState('disable')

    const [chatbox, setChatbox] = useState('hide')

    const [select, setSelect] = useState('北海道・東北')

    const [ani, setAni] = useState('fadein1')

    const [nav, setNav] = useState('off')

    const [cm, setCm] = useState('none')

    const [sm, setSm] = useState('none')

    const [noti, setNoti] = useState('none')

    const [search, setSearch] = useState('none')

    const [submit, setSubmit] = useState(false)

    const [trigger, setTrigger] = useState(false)

    const [product, setProduct] = useState('')

    const [sv, setSv] = useState('')

    const [pm, setPm] = useState('none')

    const [buy, setBuy] = useState({
        imgUrl: '',
        price: '',
        info: '',
        productId: '',
        prefecture: '',
        rating: '',
    })

    // Handle
    const changeToLight = () => {
        setTheme('dark')

        window.localStorage.setItem('theme', theme)
    }

    const changeToDark = () => {
        setTheme('light')

        window.localStorage.setItem('theme', theme)
    }

    const handleChangeWidth = () => {
        setWidth(width === 'openNav' ? 'closeNav' : 'openNav')
    }

    const handleChatshow = () => {
        setChatshow(chatshow === 'none' ? 'block' : 'none')
    }

    const handleSelect = (value) => {
        setSelect(value)
    }

    const handleAni = () => {
        setAni(ani === 'fadein1' ? 'fadein2' : 'fadein1')
    }

    const handleNav = () => {
        setNav(nav === 'off' ? 'on' : 'off')
    }

    const handleCM = () => {
        setCm(cm === 'none' ? 'flex' : 'none')
    }

    const handleSM = () => {
        setSm(sm === 'none' ? 'flex' : 'none')
    }

    const handlePM = () => {
        setPm(pm === 'none' ? 'flex' : 'none')
    }

    const handleNoti = () => {
        setNoti(noti === 'none' ? 'flex' : 'none')
    }

    const handleTrigger = () => {
        setTrigger(!trigger)

        handleChangeWidth()

        handleNav()
    }

    const getProductData = (data) => {
        setProduct(data)
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
        ani,
        nav,
        cm,
        sm,
        trigger,
        product,
        noti,
        submit,
        search,
        sv,
        pm,
        buy,

        // Set State
        setLogin,
        setLogout,
        setChatbox,
        setTrigger,
        setSubmit,
        setSv,
        setSearch,
        setBuy,

        // Function
        changeToDark,
        changeToLight,
        handleChangeWidth,
        handleChatshow,
        handleSelect,
        handleAni,
        handleNav,
        handleCM,
        handleSM,
        handleTrigger,
        getProductData,
        handleNoti,
        handlePM,
    }

    return <Data.Provider value={value}>{children}</Data.Provider>
}

export default Provider
