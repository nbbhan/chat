import { Link, useNavigate } from 'react-router-dom'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'
import Noti from '~/Components/Noti'

function Contact() {
    const inf = {
        link: 'contact',
        en: 'CONTACT',
        jp: 'お問い合わせ',
        // des1: 'わからないことがあればお気軽にご連絡ください。',
        // des2: '',
    }

    const storage = window.localStorage.getItem('theme')

    return (
        <>
            <Explore />

            <div className="contact">
                <div className="contact-page">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <Noti />

                    <div className="contact-main">
                        <div className={`contact-container ${storage}`}>
                            <div className="contact-container-title">お問い合わせ</div>

                            <form>
                                <div className="contact-container-items">
                                    <div className="contact-container-item">
                                        <label>メールアドレス</label>
                                        <br />
                                        <div>
                                            <input type="mail" />
                                        </div>
                                    </div>

                                    <div className="contact-container-item">
                                        <label>件名</label>
                                        <br />
                                        <div>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="contact-container-item">
                                        <label>お問い合わせ内容</label>
                                        <br />
                                        <div>
                                            <textarea type="text" cols="85" rows="5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-btn">
                                    <button type="submit">送信</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
