import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'

function Contact() {
    const inf = {
        link: 'contact',
        en: 'CONTACT',
        jp: 'お問い合わせ',
        des1: 'わからないことがあればお気軽にご連絡ください。',
        des2: '',
    }

    return (
        <>
            <Explore />

            <div className="contact">
                <div className="contact-container">
                    <Modal />

                    <SettingModal />
                    <div className="contact-main">
                        <Title props={inf} />

                        <div className="contact-main-container"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
