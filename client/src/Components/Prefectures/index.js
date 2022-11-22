import { useContext } from 'react'

import { Data } from '../../Provider'

import specialties from '../../Imgs/back1.png'

function Prefectures() {
    const myData = useContext(Data)

    return (
        <div className="prefectures">
            <div className="prefectures-items">
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
                <div className="prefectures-item">どうぞ下記よりご照覧ください</div>
            </div>

            <div className="prefectures-container">
                <div className="prefectures-container-img">
                    <img alt="写真ですよ" src={specialties} />
                </div>

                <div className="prefectures-container-items">
                    <div style={{ marginLeft: '0' }} className="prefecturs-container-item">
                        北海道・東北
                    </div>
                    <div className="prefecturs-container-item">関東</div>
                    <div className="prefecturs-container-item">中部</div>
                    <div className="prefecturs-container-item">近畿</div>
                    <div className="prefecturs-container-item">中国</div>
                    <div className="prefecturs-container-item">四国</div>
                    <div style={{ marginRight: '0' }} className="prefecturs-container-item">
                        九州
                    </div>
                </div>
                {/* <div className="prefecturs-container-items-item">
                    <div className="prefecturs-container-item-item">新潟県</div>
                    <div className="prefecturs-container-item-item">富山県</div>
                    <div className="prefecturs-container-item-item">石川県</div>
                    <div className="prefecturs-container-item-item">福井県</div>
                    <div className="prefecturs-container-item-item">山梨県</div>
                    <div className="prefecturs-container-item-item">長野県</div>
                    <div className="prefecturs-container-item-item">岐阜県</div>
                </div>
                <div className="prefecturs-container-items-item">
                    <div className="prefecturs-container-item-item">静岡県</div>
                    <div className="prefecturs-container-item-item">愛知県</div>
                </div> */}
            </div>
        </div>
    )
}

export default Prefectures
