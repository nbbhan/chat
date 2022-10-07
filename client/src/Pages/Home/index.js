import Nav from '../../Components/Nav'
import back from '../../Imgs/fakeback.jpg'
import itemBack from '../../Imgs/back.png'

function Home() {
    return ( 
        <>
            <Nav />

            <div className='background'>
                <img src={back}/>
            </div>

            <div className='home'>
                <div className='home-container'>
                    <div className='home-container-item'>
                        <img src={itemBack} />
                    </div>

                    <div className='home-container-item'>
                        
                    </div>

                    <div className='home-container-item'>
                        
                    </div>

                    <div className='home-container-item-last'>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;