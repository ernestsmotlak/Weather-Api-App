import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className='footer row'>
                        <div className='col text-muted'>
                            Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
                        </div>
                        <div className='col'>
                            <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer