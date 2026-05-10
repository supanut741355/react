import 'bulma/css/bulma.css'
import { ProfileCard } from "./components/ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
    <div>
      <div>
        <section className='hero is-primary'>
          <div class="hero-body">
            <p className='title'>Personal Digital Assitants</p>
          </div>

        </section>
      </div>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard 
              title="Alexa" 
              handle="OpenAi" 
              image={AlexaImage}
              description = "Alexa wa created by Amazon"
            />
            </div>
            <div className='column is-4'>
              <ProfileCard 
              title="Cortana" 
              handle="Google" 
              image={CortanaImage}
              description = "Alexa wa created by Microsoft"
            />
            </div>
            <div className='column is-4'>
              <ProfileCard 
              title="Siri" 
              handle="Micro-sofe" 
              image={SiriImage}
              description = "Alexa wa created by Apple"
            />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
