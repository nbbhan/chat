import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

function About() {
    const inf = {
        link: 'about',
        en: 'ABOUT',
        jp: 'QOKSについて',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    return (
        <>
            <Explore />

            <div className="about">
                <div className="about-container">
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
