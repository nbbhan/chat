import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'

import jp from '~/Imgs/prefectures-1.png'

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
                            <div className="about-main-container-items">
                                <div className="about-main-container-item">
                                    <div className="about-main-container-item-title">QOKSの由来について</div>
                                    制作チーム全員の頭文字をとってQOKSは生まれました。
                                    <br />
                                    <br />
                                    <div className="about-main-container-item-title">QOKSの掲げる目標と効果</div>
                                    経済の停滞した現状の打開のため、国産国消の精神のもと農畜産業のみならず、そのほかの産業においてもMADE
                                    IN JAPANの製品を取り扱っています。
                                    <br />
                                    それにより販売者は販売経路の拡大とそれに伴う売上の増加を見込め、利用者は遠方の故郷や、訪れたことのない土地の特産品を得ることができる。
                                    <br />
                                    これを目標としてQOKSを開発しました。
                                    <br />
                                    <br />
                                    <div className="about-main-container-item-title">QOKSの機能について</div>
                                    チャット機能を使用することでユーザーとコミュニケーションをとる事ができ、
                                    <br />
                                    その他にポイント、アカウント機能などがあります。
                                    <br />
                                    また、画面遷移や商品情報取得時間が高速化されており、スムーズにお買い物をする事が可能です。
                                </div>

                                <div className="about-main-container-item">
                                    <img src={jp} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
