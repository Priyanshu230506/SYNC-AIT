import bgImage from '../assets/bg-image.png'
import clubLogos from '../assets/club_logos'
const Footer = () => {
  return (
    <footer className='bg-white'>
        <div id="footerImg" className='mt-2'>
            <img src={bgImage} alt="Footer" className='w-full h-auto object-cover opacity-50'/>
        </div>
    </footer>
    
  )
}

export default Footer