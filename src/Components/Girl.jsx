import './Girl.css';
import pic2 from '../images/girl.png';

const Devka = () => {
    return (
    <>    
        <div className= 'container2'>
            <div className="text2">
                <p className = 'p4'>WHY THRIVE?</p>
                <p className = 'p5'>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?  Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</p>
            </div>
            <div className="surot2">
                <img src = {pic2} alt = ''/>
            </div>
            
            
        </div>
        <div className="container3">
        <p className = 'p6'>ABOUT US</p>
        <div className= 'div7'>
            <p className = 'p7'>We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
            
        </div>    
        <p className = 'p8'>WE CAN HELP YOU WITH</p>


    </div>
    </>
    )
}
export default Devka;