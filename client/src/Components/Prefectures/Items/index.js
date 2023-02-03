import small1 from '~/Imgs/small-1.png'
import small2 from '~/Imgs/small-2.png'
import small3 from '~/Imgs/small-3.png'
import small4 from '~/Imgs/small-4.png'
import small1_dark from '~/Imgs/small-1_dark.png'
import small2_dark from '~/Imgs/small-2_dark.png'
import small3_dark from '~/Imgs/small-3_dark.png'
import small4_dark from '~/Imgs/small-4_dark.png'

function Items() {
    const storage = window.localStorage.getItem('theme')

    return (
        <div className="prefectures-items">
            <div className="prefectures-items-container">
                <div className="prefectures-title">全国各地の気候風土を生かした数々の名産品を皆様へお届けします。</div>
                <div className="prefectures-item">
                    <div>海沿いの町、山間の村々</div>
                    <div>土地に根付く伝統、代々受け継いできた文化</div>
                    <div>それらが織りなす一品</div>
                </div>
                <div className="prefectures-item">
                    <div>ご存知の有名な品も</div>
                    <div>まだ注目を浴びてない品も</div>
                    <div>その一つ一つがその土地土地を連想させてくれる</div>
                </div>
                <div className="prefectures-item">
                    <div>そういった特産品を</div>
                    <div>皆様のもとへお届けいたします</div>
                </div>
                <div className="prefectures-item">どうぞ下記よりご照覧ください。</div>
            </div>

            <div className="prefectures-items-background">
                <img id="small-1" src={storage === 'dark' ? small1_dark : small1} alt="" />

                <img id="small-2" src={storage === 'dark' ? small2_dark : small2} alt="" />

                <img id="small-3" src={storage === 'dark' ? small3_dark : small3} alt="" />

                <img id="small-4" src={storage === 'dark' ? small4_dark : small4} alt="" />
            </div>
        </div>
    )
}

export default Items
