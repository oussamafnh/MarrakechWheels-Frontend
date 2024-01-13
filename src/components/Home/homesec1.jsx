import React from 'react';
import Image from '../../asset/img1.jpg';
import '../../Style/Home/homesec1.css';
import { Mercedesamglogo } from '../../asset/mercedesamglogo';


const Homesec1 = () => {
    return (
        <div className='homesec1'>
            <div className="content">
                <div className="leftside">
                    <div className="leftsidecontent">
                        <div className="title">
                            <h1>Mercedes-AMG G 63</h1>
                        </div>

                        <button type="button" class="button">
                            <h1>BUY NOW</h1>
                            <h1>$ 150,000</h1>
                        </button>
                    </div>
                </div>
                <div className="rightside" style={{ backgroundImage: `url(${Image})` }}>
                    <Mercedesamglogo />
                </div>
            </div>
        </div >
    )
}

export default Homesec1