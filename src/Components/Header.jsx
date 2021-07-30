import './Header.css';
import kuba from '../images/boys.png';


const Header =() => {
    return(
        <div className = 'container'>
            <div className = 'navbar'>
                <div className = 'thrive'>
                     Thrivetalk
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Blog</li>
                </ul>
                <input className='contact' type="button" value="CONTACT US" />
            </div>
            <div className='mother'>
                <div className= 'text'>
                    <p className = 'p1'>Thrivetalk</p>
                    <p className='p2'>HELPING YOU THRIVE IN ALL AREAS OF LIFE</p>
                    <p className= 'p3'>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
                    <div className="buttons">
                        <input className= 'who' type="button" value="WHO AM I" />
                        <input className= 'what' type="button" value="WHAT I DO" />
                    </div>
                </div>
                <div className = 'surot'>
                    <img src = {kuba} alt=''  />
                </div>
            </div>
        </div>
    )
}

export default Header;