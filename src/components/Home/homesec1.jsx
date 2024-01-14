import React from 'react';
import Image from '../../asset/img1.jpg';
import '../../style/Home/homesec1.css';
import { Mercedesamglogo } from '../../asset/mercedesamglogo';
import { Speedsvg } from '../../asset/speedsvg';
import { Enginesvg } from '../../asset/enginesvg';
import { Gearssvg } from '../../asset/gearssvg';
import { Fuelsvg } from '../../asset/fuelsvg';



const Homesec1 = () => {

    return (
        <div className='homesec1'>
            <div className="content">
                <div className="leftside">
                    <div className="leftsidecontent">
                        <div className="title">
                            <h1>Mercedes-AMG G 63</h1>
                        </div>
                        <div className="fichetechnic">
                            <div className="fichtechsub">
                                <Speedsvg />
                                <h2>0-100 km/h</h2>
                                <h1>4.5s</h1>
                            </div>
                            <div className="fichtechsub">
                                <Enginesvg />
                                <h2>Engine Power</h2>
                                <h1>577 HP</h1>
                            </div>
                            <div className="fichtechsub">
                                <Gearssvg />
                                <h2>Transmission</h2>
                                <h1>Automatic w/OD</h1>
                            </div>
                            <div className="fichtechsub">
                                <Fuelsvg />
                                <h2>Fuel Type</h2>
                                <h1>Premium Gasoline</h1>
                            </div>
                        </div>

                        <button type="button" className="button">
                            <h1>BUY NOW</h1>
                            <h1>$ 150,000</h1>
                        </button>
                    </div>
                </div>
                <div className="rightside" style={{ backgroundImage: `url(${Image})` }}>
                    <Mercedesamglogo />
                </div>
            <svg className="scrolldown" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </div>
        </div>
    )
}




export default Homesec1