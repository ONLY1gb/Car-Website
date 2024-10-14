import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData, setHeroCount,heroCount,setPlayStatus, playStatus}) => {

  // Function to open a new tab with car features and images
  const handleExploreClick = () => {
    const carFeaturesUrl = 'https://www.volkswagen.co.in/en/models/virtus-chrome.html#features'; // Example URL, replace with the actual one
    window.open(carFeaturesUrl, '_blank');
  }

  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore" onClick={handleExploreClick}>
            <p>Explore the features</p>
            <img src={arrow_btn} alt='Explore the features'/>
        </div>

        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt='Play/Pause'/>
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero;
