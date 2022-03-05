import logo from '../images/white-logo-tinder.png'
import colorLogo from '../images/color-logo.tinder.png'


const Nav = ({minimal, authToken}) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo} alt="logo"/>
            </div>

            {!authToken && !minimal && <button className="nav-button">Log in</button>}
        </nav>
    )
}
export default Nav