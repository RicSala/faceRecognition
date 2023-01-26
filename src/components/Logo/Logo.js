import React from "react";
import Tilt from 'react-parallax-tilt';
import 'tachyons'
import './Logo.css';


const Logo = () => {
    return (

        <div className="ma4 mt0" style={{ height: '150px', width: '150px' }}>
            <Tilt
                className="br2 shadow-2"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}>
            <div style={{ height: '150px', width: '150px',}} className="logo inner-element">
                <h1 className="white">Find that Face 👀</h1>
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;
