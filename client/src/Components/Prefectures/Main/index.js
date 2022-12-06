import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Data } from '~/Provider'

function Main() {
    const myData = useContext(Data)

    const handleTransition = (e) => {
        let path = e.target.innerHTML

        let url

        let link

        switch (path) {
            case '北海道・東北':
                url = 'tohoku'

                link = <Link to={`/${url}`} />
                break
            case '関東':
                url = 'kanto'

                link = <Link to={`/${url}`} />
                break

            default:
                break
        }
    }

    useEffect(() => {}, [myData.select])

    return (
        <>
            {myData.prefect.map((item) => {
                switch (myData.select) {
                    case item.name:
                        const html = item.arr.map((item, index) => {
                            return (
                                <div
                                    className="prefectures-container-right-main-item"
                                    key={index}
                                    onClick={(e) => handleTransition(e)}
                                >
                                    {item}
                                </div>
                            )
                        })

                        return html
                    default:
                        break
                }
            })}
        </>
    )
}

export default Main
