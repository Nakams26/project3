//Importing images
import tennisBall from "../assets/tennis-balls.png"
import basketBall from "../assets/basketball.png"
import hockey from "../assets/hockey-stick.png"

//Header component
const Header = () => {
    return (
        <header>
            <div className="wrapper flexHeader">
                <div className="textHeader">
            <h1>What's the score?</h1>
            <h2>The perfect app to get sports result</h2>
            <h2>Try it now! </h2>
            </div>
            <div className="imageHeader">
                <div className="imgContainer"><img className="tennisBall" src={tennisBall} alt="tennis ball" /></div>
                <div className="imgContainer"><img className="basketBall" src={basketBall} alt="basket ball" /></div>
                <div className="imgContainer"><img className="hockeyStick" src={hockey} alt="hockey stick and puck" /></div>
            </div>
            </div>
        </header>
    )
}

export default Header