import Image from './Image111.jpeg'
import Image3 from './Image112.webp'

export default function Enter() {
    return (
        <div >
        <img 
          src={Image} 
          style={{ 
            width: '177vh', height: '29vh'}} 
          alt="banner" 
        />
        <img src={Image3} style={{top: '20vh',position: 'absolute', left: '20px', height: '15vh', width: '14vh'}}/>
        
      </div>
    );
  }
  