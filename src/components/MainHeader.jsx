import { Link } from 'react-router-dom'
import Image from '../images/main_header4.png'

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h2>Join The Legends Of The Fitness World</h2>
          <p>
          The hard days are the best because that's when champions are made, so if you push through, you can push through anyth.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader