import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

function Favorite() {
    const myData = useContext(Data)

    const inf = {
        link: 'favorite',
        en: 'FAVORITE',
        jp: 'お気に入り',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    return (
        <>
            <Explore />

            <div className="favorite">
                <div className="favorite-container">
                    <div className="favorite-main">
                        <Title props={inf} />

                        <div className="cart-main-container">
                            <div className="cart-main-items">
                                <div className="cart-main-item">
                                    <div className="cart-main-item-container">
                                        <div className="cart-main-item-img">
                                            <img src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                        </div>

                                        <div className="cart-main-item-inf">
                                            <div className="cart-main-item-inf-container">
                                                <div className="cart-main-item-name">商品名</div>
                                                <div className="cart-main-item-price">100円（税込）</div>
                                                <div className="cart-main-item-rating">5</div>
                                            </div>

                                            <div className="cart-main-item-inf-buy">
                                                <div className="cart-main-item-inf-buyBtn">今すぐ購入</div>
                                            </div>
                                        </div>

                                        <div className="cart-main-item-container-close">削除</div>
                                    </div>
                                </div>

                                <div className="cart-main-item">
                                    <div className="cart-main-item-container">
                                        <div className="cart-main-item-img">
                                            <img src="https://thumb.photo-ac.com/92/92f60a83eb64d0e9609f32a2a355f45c_t.jpeg" />
                                        </div>

                                        <div className="cart-main-item-inf">
                                            <div className="cart-main-item-inf-container">
                                                <div className="cart-main-item-name">商品名</div>
                                                <div className="cart-main-item-price">100円（税込）</div>
                                                <div className="cart-main-item-rating">5</div>
                                            </div>

                                            <div className="cart-main-item-inf-buy">
                                                <div className="cart-main-item-inf-buyBtn">今すぐ購入</div>
                                            </div>

                                            <div className="cart-main-item-container-close">削除</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-main-item">
                                    <div className="cart-main-item-container">
                                        <div className="cart-main-item-img">
                                            <img src="https://thumb.photo-ac.com/43/43ded612675fd6c6aeeeb5d9c5e96862_t.jpeg" />
                                        </div>

                                        <div className="cart-main-item-inf">
                                            <div className="cart-main-item-inf-container">
                                                <div className="cart-main-item-name">商品名</div>
                                                <div className="cart-main-item-price">100円（税込）</div>
                                                <div className="cart-main-item-rating">5</div>
                                            </div>

                                            <div className="cart-main-item-inf-buy">
                                                <div className="cart-main-item-inf-buyBtn">今すぐ購入</div>
                                            </div>

                                            <div className="cart-main-item-container-close">削除</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-main-item">
                                    <div className="cart-main-item-container">
                                        <div className="cart-main-item-img">
                                            <img src="https://images.unsplash.com/photo-1623014373724-3d2113d46209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUUzJTgxJTkzJUUzJTgxJTkxJUUzJTgxJTk3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                                        </div>

                                        <div className="cart-main-item-inf">
                                            <div className="cart-main-item-inf-container">
                                                <div className="cart-main-item-name">商品名</div>
                                                <div className="cart-main-item-price">100円（税込）</div>
                                                <div className="cart-main-item-rating">5</div>
                                            </div>

                                            <div className="cart-main-item-inf-buy">
                                                <div className="cart-main-item-inf-buyBtn">今すぐ購入</div>
                                            </div>

                                            <div className="cart-main-item-container-close">削除</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-main-item">
                                    <div className="cart-main-item-container">
                                        <div className="cart-main-item-img">
                                            <img src="https://thumb.photo-ac.com/d5/d5d032c2c6b8cd34f68f4f533d78c0c3_t.jpeg" />
                                        </div>

                                        <div className="cart-main-item-inf">
                                            <div className="cart-main-item-inf-container">
                                                <div className="cart-main-item-name">商品名</div>
                                                <div className="cart-main-item-price">100円（税込）</div>
                                                <div className="cart-main-item-rating">5</div>
                                            </div>

                                            <div className="cart-main-item-inf-buy">
                                                <div className="cart-main-item-inf-buyBtn">今すぐ購入</div>
                                            </div>

                                            <div className="cart-main-item-container-close">削除</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Favorite
