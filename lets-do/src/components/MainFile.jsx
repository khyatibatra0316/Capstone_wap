import Image9 from './Image9.webp'
import Image10 from './Image10.webp'

export default function Main() {
    return (
        <>
            <div>
                <img src={Image9} style={{width: '100%',height: '45vh',objectFit: 'cover',display: 'block',marginBottom:'70vh'}} alt="Banner"/>
                <div>
                    <img src={Image10}style={{height: '50px',width: '50px',}} alt="Teddy"/>
                </div>
            </div>
        </>
    )
}
