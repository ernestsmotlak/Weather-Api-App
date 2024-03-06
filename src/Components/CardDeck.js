import React from 'react';
import '../Components/CardDeck.css';

const CardDeck = ({ weatherData }) => {
    var time0 = new Date(weatherData?.current?.last_updated);
    var time1 = new Date(weatherData?.forecast?.forecastday[1]?.date);
    var time2 = new Date(weatherData?.forecast?.forecastday[2]?.date);

    const map = new Map();
    map.set(0, 'Ned');
    map.set(1, 'Pon');
    map.set(2, 'Tor');
    map.set(3, 'Sre');
    map.set(4, 'Čet');
    map.set(5, 'Pet');
    map.set(6, 'Sob');


    const printDayOfWeek = (map, time) => {
        return map.get(time.getDay());
    }

    return (
        <div className='w-100 mx-auto'>
            <div className="card-container d-flex">
                {weatherData ? (
                    <>
                        <div className="card">
                            <p className='card-title cardDeck'>
                                {printDayOfWeek(map, time0)}
                            </p>
                            <div className='card-body'>
                                <img className='cardImage' src={weatherData?.forecast?.forecastday[0]?.day?.condition?.icon} alt="Weather Icon" />
                                <div className="row cardDeck">
                                    <div className="col maxTemp">
                                        {weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c}°
                                    </div>
                                    <div className="col minTemp">
                                        {weatherData?.forecast?.forecastday[0]?.day?.mintemp_c}°
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <p className='card-title cardDeck'>
                                {printDayOfWeek(map, time1)}
                            </p>
                            <div className='card-body'>
                                <img className='cardImage' src={weatherData?.forecast?.forecastday[1]?.day?.condition?.icon} alt="Weather Icon" />
                                <div className="row cardDeck">
                                    <div className="col maxTemp">
                                        {weatherData?.forecast?.forecastday[1]?.day?.maxtemp_c}°
                                    </div>
                                    <div className="col minTemp">
                                        {weatherData?.forecast?.forecastday[1]?.day?.mintemp_c}°
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <p className='card-title cardDeck'>
                                {printDayOfWeek(map, time2)}
                            </p>
                            <div className='card-body'>
                                <img className='cardImage' src={weatherData?.forecast?.forecastday[2]?.day?.condition?.icon} alt="Weather Icon" />
                                <div className="row cardDeck">
                                    <div className="col maxTemp">
                                        {weatherData?.forecast?.forecastday[2]?.day?.maxtemp_c}°
                                    </div>
                                    <div className="col minTemp">
                                        {weatherData?.forecast?.forecastday[2]?.day?.mintemp_c}°
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default CardDeck;
