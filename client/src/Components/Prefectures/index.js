import { useContext } from 'react'

import { Data } from '../../Provider'

function Prefectures() {
    const myData = useContext(Data)

    return (
        <div className="prefectures">
            <div className="home-container-item-left-contents-ogino">
                <div className="home-container-item-middle-between-ogino">
                    <div>海沿いの町、山間の村々</div>
                    <div>土地に根付く伝統、代々受け継いできた文化</div>
                    <div>それらが織りなす一品</div>
                </div>

                <div className="home-container-item-middle-between-ogino">
                    <div>ご存知の有名な品も</div>
                    <div>まだ注目を浴びてない品も</div>
                    <div>その一つ一つがその土地土地を連想させてくれる</div>
                </div>

                <div className="home-container-item-middle-between-ogino">
                    <div>そういった特産品を</div>
                    <div>皆様のもとへお届けいたします</div>
                </div>

                <div className="home-container-item-middle-between-ogino">どうぞ下記よりご照覧ください</div>
            </div>
        </div>
    )
}

export default Prefectures
