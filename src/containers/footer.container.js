import React, {
    Component
} from 'react';

import logo_Hexagon_pie from '../images/logo_Hexagon_pie.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer" >
                <img className="logo_Hexagon_pie" src={logo_Hexagon_pie}/>
            </div>
        );
    }

}

export default Footer;
