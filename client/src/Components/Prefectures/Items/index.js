import small1 from '~/Imgs/small-1.png'
import small2 from '~/Imgs/small-2.png'
import small3 from '~/Imgs/small-3.png'
import small4 from '~/Imgs/small-4.png'

function Items() {
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
                <img id="small-1" src={small1} />

                <img id="small-2" src={small2} />

                <img id="small-3" src={small3} />

                <img id="small-4" src={small4} />
            </div>
        </div>
    )
}

export default Items
