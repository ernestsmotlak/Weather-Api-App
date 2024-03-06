import React from 'react'
import './Main.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const Main = ({ weatherData }) => {
    var currentTimeReversedString = weatherData?.current?.last_updated.slice(0, 10).split('-').reverse().join('-').replaceAll('-', '/');

    var date = new Date(weatherData?.current?.last_updated);
    const map = new Map();
    map.set(0, 'Nedelja');
    map.set(1, 'Ponedeljek');
    map.set(2, 'Torek');
    map.set(3, 'Sreda');
    map.set(4, 'Četrtek');
    map.set(5, 'Petek');
    map.set(6, 'Sobota');

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    const printDayOfWeek = (map, time) => {
        return map.get(time.getDay());
    }

    var finalMin = function (minutes) {
        if (minutes < 10) {
            return ('0' + minutes);
        } else {
            return minutes;
        }
    };

    return (
        <div>
            <div className="main container">
                <div className="main row">
                    <div className="main col first">
                        {printDayOfWeek(map, date)}  {hours}:{finalMin(minutes)}
                        <br />
                        {currentTimeReversedString}
                        <br />
                        {weatherData?.current?.condition?.text}
                    </div>
                </div>
                <div className="main row">
                    <div className="main col second">
                        <img className='mainImage' src={weatherData?.current?.condition.icon} alt="Weather Icon" />
                        <br />

                        <div className="main inner container text-center">
                            <div className="main row inner">
                                <div className="main col inner">
                                    {weatherData?.current?.temp_c} °C
                                </div>
                                <div className="main col inner">
                                    {weatherData?.current?.feelslike_c} °C
                                </div>
                            </div>
                            <div className="main row inner">
                                <div className="main col inner">
                                    {weatherData?.current?.wind_kph} km/h
                                </div>
                                <div className="main col inner">
                                    {weatherData?.current?.humidity} %
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="main row">
                    <div className="main col third">
                        <i class="bi bi-geo-alt-fill"></i>
                        {weatherData?.location?.name}, {weatherData?.location?.country}
                    </div>
                </div>
            </div>

            {weatherData ? (
                <div>

                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default Main