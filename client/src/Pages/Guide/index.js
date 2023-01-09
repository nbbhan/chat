import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

function Guide() {
    const inf = {
        link: 'guide',
        en: 'GUIDE',
        jp: '使い方',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    return (
        <>
            <Explore />

            <div className="guide">
                <div className="guide-container">
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
