import { useContext, useEffect, useState } from 'react'

import { Data } from '../../Provider'

import aki from '../../Imgs/aki.jpg'
import fuji from '../../Imgs/fuji.jpg'
import kinkakuji from '../../Imgs/kinkakuji.jpg'

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
                    <img src={aki} />
                </div>

                <div className="prefectures-container-items">
                    <div className="prefectures-container-item">北海道・東北</div>
                    <div className="prefectures-container-item">関東</div>
                    <div className="prefectures-container-item">中部</div>
                    <div className="prefectures-container-item">近畿</div>
                    <div className="prefectures-container-item">中国</div>
                    <div className="prefectures-container-item">四国</div>
                    <div className="prefectures-container-item">九州</div>
                </div>

                <div className="prefectures-container-box">aaaaaaaaaaaaaa</div>
            </div>
        </div>
    )
}

export default Prefectures
