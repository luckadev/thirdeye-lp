import { useEffect } from 'react';
import { gsap } from 'gsap';
import './home.scss';

const Home = () => {

  useEffect(() => {
    homeAnimation();
  }, [])
  
  function homeAnimation() {
    gsap.from('.home-texts', { opacity: 0, duration: 2, y: 100, absolute: true, ease: 'power1.inOut' })
  }
  

  return (
    <div className='home-container container'>
      <div className="home-texts">
        <p className='orange p-coming'>Coming soon...</p>
        <h1>The future of web3 payments</h1><img className='icon-box' src="./assets/icon-box.png" alt="icon box" />
        <p className='p-middle'>ThirdEye is a secure 1-click checkout that allows you to use your cripto across different blockchains in just seconds, let's try it out.</p>
        <h3>Sign in to get notified when it's ready</h3>
        <div className="form-div">
          <input type="text" placeholder="Enter your email" />
          <button type="submit">Notify me</button>
        </div>
      </div>
      <img
        className="home-photo" 
        loading="lazy" 
        src="./assets/mockup-phone.png" 
        alt="Mockup Phone" 
      />
    </div>
  )
}

export default Home;