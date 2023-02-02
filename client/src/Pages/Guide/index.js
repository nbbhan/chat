import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'
import Noti from '~/Components/Noti'

import home from '~/Imgs/Home_Screen.png'
import home_dark from '~/Imgs/Home_Screen_dark.png'
import cart from '~/Imgs/Cart_Screen.png'
import cart_dark from '~/Imgs/Cart_Screen_dark.png'
import point from '~/Imgs/Point_Screen.png'
import point_dark from '~/Imgs/Point_Screen_dark.png'
import contact from '~/Imgs/Contact_Screen.png'
import contact_dark from '~/Imgs/Contact_Screen_dark.png'
import setting from '~/Imgs/Setting_Screen.png'
import setting_dark from '~/Imgs/Setting_Screen_dark.png'
import post1 from '~/Imgs/Post_Screen1.png'
import post1_dark from '~/Imgs/Post_Screen1_dark.png'
import post2 from '~/Imgs/Post_Screen2.png'
import post2_dark from '~/Imgs/Post_Screen2_dark.png'

function Guide() {
    const inf = {
        link: 'guide',
        en: 'GUIDE',
        jp: '使い方',
        des1: '不明点などございましたらこちらをご覧ください。',
        des2: 'ご質問等ございましたら、「お問い合わせ」よりご連絡ください',
    }

    const storage = window.localStorage.getItem('theme')

    return (
        <>
            <Explore />

            <div className="guide">
                <div className="guide-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <Noti />

                    <div className={`guide-main ${storage}`}>
                        <Title props={inf} />

                        <div className="guide-main-container">
                            ・左側に上からホーム、カート、ポイント、ログイン、新規登録がございますので、
                            アカウントをお持ちの方はログインを、お持ちでない方は新規登録をクリックし必要な情報を入力してください。
                            <br />
                            <br />
                            ・右上のボタンを押していただくと上からホーム、使い方、QOKSについて、お問い合わせ、設定、検索入力欄がございます。
                            <br />
                            <br />
                            ・ホームについて：
                            <br />
                            スクロールすると人気商品や都道府県別の商品が表示されます。
                            商品をポイントするとカートボタンが表示されます。
                            地方をクリックしお望みの都道府県のある地方を選択して下さい。
                            また各都道府県をクリックすると各地域の商品が表示されます。
                            ページの最後にはSNSへアクセスできるリンクボタンがあります。
                            <br />
                            <br />
                            <img src={storage === 'dark' ? home_dark : home} />
                            <br />
                            <br />
                            ・カートについて：
                            <br />
                            商品のカートボタンをクリックするとその商品がカート内に表示されます。
                            購入、または削除したい商品をポイントすることで購入ボタン、削除ボタンが表示されます。
                            <br />
                            <br />
                            <img src={storage === 'dark' ? cart_dark : cart} />
                            <br />
                            <br />
                            ・ポイントについて：
                            <br />
                            QOKS内で使用できるポイントです。 購入または広告を視聴することでポイントを入手できます。
                            <br />
                            <br />
                            <img src={storage === 'dark' ? point_dark : point} />
                            <br />
                            <br />
                            ・お問い合わせについて：
                            <br />
                            メールとチャットの２種類の方法でご質問可能です。
                            <br />
                            <br />
                            <img src={storage === 'dark' ? contact_dark : contact} />
                            <br />
                            <br />
                            ・設定について：
                            <br />
                            背景テーマをライトモードとダークモードに変更可能です。
                            <br />
                            <br />
                            <img src={storage === 'dark' ? setting_dark : setting} />
                            <br />
                            <br />
                            ・出品について：
                            <br />
                            画像アドレス、名称、値段、地域、都道府県を入力して商品を出品可能です。
                            <br />
                            <br />
                            <img src={storage === 'dark' ? post1_dark : post1} />
                            <br />
                            <br />
                            <img src={storage === 'dark' ? post2_dark : post2} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Guide
