import React from 'react'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Phone from "../images/phone.png";
import btn from "../images/btn-download.png"


const Main = () => {
    return (
        <>
            <div className="main-container w-container">
                <div className="main-content">
                    <div className="main-content-text">
                            <span>OUR APP IS NOW AVAILABLE!</span>
                            <h1>Impress your clients with this amazing iPhone App</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.
                                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                                ut commodo diam libero vitae erat.
                                Aenean faucibus nibh et justo cursus id rutrum</p>
                                <a href="#" className='button btn-bg'><img src={btn} className="d-btn" alt="btn" /> Get the App now! </a>
                    </div>
                </div>
                <div className="main-image">
                    <img src={Phone} alt="Phone" />
                </div>
            </div>
        </>
    )
}

export default Main