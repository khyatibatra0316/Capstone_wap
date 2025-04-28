import Image11 from './Image11.jpeg';  
import Image10 from './Image10.webp'; 

export default function Main() {
    return (
        <>
            <div style={{ position: 'relative', width: '100%' }}>
                <img src={Image11} style={{ width: '100%',height: '29vh', objectFit: 'cover',display: 'block',marginBottom:'70vh'}} alt="Banner" />
                <img src={Image10} style={{position: 'absolute',top: '23vh', left: '20px', height: '13vh',width: '14vh',}} alt="Teddy"/>
            </div>
            
        </>
    );
}
