import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

function Contact() {
    const inf = {
        link: 'contact',
        en: 'CONTACT',
        jp: 'お問い合わせ',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    return (
        <>
            <Explore />

            <div className="contact">
                <div className="contact-container">
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
