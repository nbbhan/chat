import back from '../../Imgs/fakeback.jpg'
import itemBack from '../../Imgs/back1.png'
import Explore from '../../Components/Explore';

function Home() {
    return ( 
        <>
            <Explore />

            <div className='background'>
                <img src={itemBack}/>
            </div>

            <div className='home'>
                <div className='home-container'>
                    <div className='home-container-item'>
                        {/* <img src={itemBack} /> */}
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