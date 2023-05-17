import '../App.css';
import { Link } from 'react-router-dom';


export const HomePage = () => {
  return (
    <>
    <div className='home-container' >
      <div className='wording'>
        <h1>Take control of YOUR life</h1>
        <p>What are you waiting for?</p>
      </div>
      <div className='home-btns'>
      <Link to='/signup/'>
        <button type="button" className="btn btn-outline-light">GET STARTED</button>
      </Link>
      <Link to='/login/'>
        <button type="button" className="btn btn-light">LOG IN</button>
      </Link>
      </div>
    </div>
    <div className='para-container'>
      <p className='paragraph'>A healthy diet and lifestyle are fundamental pillars of a vibrant and fulfilling life. Nourishing your body with wholesome, nutrient-rich foods provides the necessary fuel for optimal physical functioning. A balanced diet, rich in fruits, vegetables, whole grains, lean proteins, and healthy fats, supports the immune system, enhances energy levels, and reduces the risk of chronic diseases. Additionally, adopting an active lifestyle that includes regular exercise and physical activity promotes cardiovascular health, strengthens muscles and bones, and improves overall fitness. Engaging in stress-reducing activities, prioritizing sufficient sleep, and nurturing positive relationships are equally important components of a healthy lifestyle. By embracing these habits, you empower yourself to take control of your well-being, enhance your longevity, and experience a greater sense of vitality and happiness in your daily life.</p>
    </div>
    </>

  );
}

