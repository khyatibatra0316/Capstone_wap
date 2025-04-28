import Image11 from './Imagei11.png';  
import Image10 from './Image10.webp'; 

export default function Main() {
    return (
        <>
        
            <div style={{ position: 'relative', width: 'auto' }}>
                <img src={Image11} style={{ width: '100%',height: '29vh',display: 'block'}} alt="Banner" />
                <img src={Image10} style={{position: 'absolute',top: '20vh', left: '20px', height: '15vh',width: '14vh',}} alt="Teddy"/>
            </div>
            <div style={{ width:'100%',textAlign:'center',}}>
                <h3 style={{ color: 'white', fontSize: '24px' ,margin:"0"}}>To-do</h3>
            </div>
            <div>
                
            </div>
        </>
    );
}
