import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'

function About() {
    const inf = {
        link: 'about',
        en: 'ABOUT',
        jp: 'QOKSについて',
        des1: '国消国産の精神のもとMADE IN JAPANの製品を取り扱う',
        des2: '遠方の故郷や、訪れたことのない土地の特産品を得ることができるのがQOKSです。',
    }

    return (
        <>
            <Explore />

            <div className="about">
                <div className="about-container">
                    <Modal />

                    <SettingModal />
                    <div className="about-main">
                        <Title props={inf} />

                        <div className="about-main-container"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
