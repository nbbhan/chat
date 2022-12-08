import { useEffect } from 'react'

import BtnLR from '../BtnLR'
import love from '~/Imgs/love.png'
import cart from '~/Imgs/cart.png'

function Slide(props) {
    let length = 15

    useEffect(() => {
        const slider = document.querySelectorAll('.slide-container')

        slider.forEach((item) => {
            let isDown = false
            let startX
            let scrollLeft

            item.addEventListener('mousedown', (e) => {
                isDown = true
                item.classList.add('active')
                startX = e.pageX - item.offsetLeft
                scrollLeft = item.scrollLeft
            })
            item.addEventListener('mouseleave', () => {
                isDown = false
                item.classList.remove('active')
            })
            item.addEventListener('mouseup', () => {
                isDown = false
                item.classList.remove('active')
            })
            item.addEventListener('mousemove', (e) => {
                if (!isDown) return
                e.preventDefault()
                const x = e.pageX - item.offsetLeft
                const walk = (x - startX) * 2
                item.scrollLeft = scrollLeft - walk
            })
        })
    })

    return (
        <div className="slide">
            <div className="slide-title">
                <div className="slide-title-left">
                    <img src={props.icon} />
                    {props.name}
                </div>

                <div className="slide-title-right">もっと見る</div>
            </div>

            <div className="slide-container">
                <div
                    className="slide-container-main"
                    style={{
                        width: `${length * 500 - 210}px`,
                    }}
                >
                    {props.arr &&
                        props.arr.getPopular.map((item, index, row) => {
                            if (index + 1 === row.length) {
                                return (
                                    <div className="slide-container-item" key={index} style={{ marginRight: '0' }}>
                                        <div className="slide-container-item-img">
                                            <img id="slide-img" src={item.imgUrl} />
                                        </div>

                                        <div className="slide-container-item-info">
                                            <span>{item.info}</span>
                                        </div>

                                        <div className="slide-container-item-price">{`${item.price}円（税込）`}</div>

                                        <div className="slide-container-item-rating">{`${item.rating}`}</div>

                                        <div className="slide-container-item-btnContainer">
                                            <div className="slide-container-item-btnContainer-love">
                                                <img src={love} />
                                            </div>

                                            <div className="slide-container-item-btnContainer-sen"></div>

                                            <div className="slide-container-item-btnContainer-cart">
                                                <img src={cart} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="slide-container-item" key={index}>
                                        <div className="slide-container-item-img">
                                            <img id="slide-img" src={item.imgUrl} />
                                        </div>

                                        <div className="slide-container-item-info">
                                            <span>{item.info}</span>
                                        </div>

                                        <div className="slide-container-item-price">{`${item.price}円（税込）`}</div>

                                        <div className="slide-container-item-rating">{`${item.rating}`}</div>

                                        <div className="slide-container-item-btnContainer">
                                            <div className="slide-container-item-btnContainer-love">
                                                <img src={love} />
                                            </div>

                                            <div className="slide-container-item-btnContainer-sen"></div>

                                            <div className="slide-container-item-btnContainer-cart">
                                                <img src={cart} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                </div>
            </div>

            {/* <BtnLR /> */}
        </div>
    )
}

export default Slide
