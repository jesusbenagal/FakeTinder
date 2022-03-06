import logo from '../images/white-logo-tinder.png'
import colorLogo from '../images/color-logo.tinder.png'


const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo} alt="logo"/>
            </div>

            {!authToken && !minimal && <button className="nav-button"
            onClick={handleClick}
            disabled={showModal}
            >Log in</button>}
        </nav>
    )
}
export default Nav