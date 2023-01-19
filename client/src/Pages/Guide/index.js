import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'

function Guide() {
    const inf = {
        link: 'guide',
        en: 'GUIDE',
        jp: '使い方',
        des1: '不明点などございましたらこちらをご覧ください。',
        des2: 'ご質問等ございましたら、「お問い合わせ」よりご連絡ください',
    }

    return (
        <>
            <Explore />

            <div className="guide">
                <div className="guide-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <div className="guide-main">
                        <Title props={inf} />

                        <div className="guide-main-container">
                            左側に上からホーム、カート、ポイント、ログイン、新規登録がございますので、
                            アカウントをお持ちの方はログインを、お持ちでない方は新規登録をクリックし必要な情報を入力してください。
                            右上のボタンを押していただくと上からホーム、使い方、QOKSについて、お問い合わせ、設定、検索入力欄がございます
                            <br />
                            ホームについて：
                            <br />
                            スクロールすると人気商品や都道府県別の商品が表示されます。
                            商品をポイントするとカートボタンが表示されます
                            地方をクリックしお望みの都道府県のある地方を選択して下さい
                            また各都道府県をクリックすると各地域の商品が表示されます。
                            ページの最後にはSNSへアクセスできるリンクボタンがあります。
                            <br />
                            カートについて：
                            <br />
                            商品のカートボタンをクリックするとその商品がカート内に表示されます。
                            購入、または削除したい商品をポイントすることで購入ボタン、削除ボタンが表示されます。
                            ポイントについて：
                            <br />
                            QOKS内で使用できるポイントです。 購入または広告を視聴することでポイントを入手できます。
                            <br />
                            お問い合わせについて：
                            <br />
                            メールとチャットの２種類の方法でご質問可能です。
                            <br />
                            設定について：
                            <br />
                            背景テーマをライトモードとダークモードに変更可能です。
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Guide
