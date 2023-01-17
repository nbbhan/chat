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

                        <div className="guide-main-container"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Guide
