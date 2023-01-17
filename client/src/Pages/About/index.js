import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'

function About() {
    const inf = {
        link: 'about',
        en: 'ABOUT',
        jp: 'QOKSについて',
        des1: '国産国消の精神のもとMADE IN JAPANの製品を取り扱う、',
        des2: '遠方の故郷や訪れたことのない土地の特産品を得ることができるのがQOKSです。',
    }

    return (
        <>
            <Explore />

            <div className="about">
                <div className="about-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <div className="about-main">
                        <Title props={inf} />

                        <div className="about-main-container">
                            QOKSの由来について
                            <div></div>
                            ～制作チーム全員の頭文字をとってQOKSは生まれました。
                            <div></div>
                            QOKSの掲げる目標と効果
                            <div></div>
                            ～経済の停滞した現状の打開のため国産国消の精神のもと農畜産業のみならずそのほかの産業においてもMADE
                            IN JAPANの製品を取り扱っています。
                            <div></div>
                            　それにより販売者は販売経路の拡大とそれに伴う売上の増加を見込め、利用者は遠方の故郷や、訪れたことのない土地の特産品を得ることができる。
                            <div></div>
                            　これを目標としてQOKSを開発しました。
                            <div></div>
                            QOKSの機能について
                            <div></div>
                            ～チャット機能を使用することでユーザーとコミュニケーションをとる事ができ、その他にポイント、アカウント機能などがあります。
                            <div></div>
                            　また画面遷移や商品情報取得時間が高速化されており、スムーズにお買い物をする事が可能です。
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
