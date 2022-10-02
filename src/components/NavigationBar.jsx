import '/public/styles/Navigation.css';
import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <div id={"NavigationBar-container"}>
            <div>
                <Link to={'/'}>dhir0hit</Link>
            </div>
            <ul>
                <li><Link to={'/home'} replace={true}>Home</Link></li>
                <li><Link to={'/skills'}>Skills</Link></li>
                <li><Link to={'/'}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavigationBar;