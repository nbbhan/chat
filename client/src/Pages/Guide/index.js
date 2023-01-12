import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'

function Guide() {
    const inf = {
        link: 'guide',
        en: 'GUIDE',
        jp: '使い方',
        des1: '不明点などございましたらこちらをご覧ください。',
        des2: '',
    }

    return (
        <>
            <Explore />

            <div className="guide">
                <div className="guide-container">
                    <Modal />
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
