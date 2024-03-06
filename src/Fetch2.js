import React, { useEffect, useState } from 'react';
import './Fetch2.css';
import CardDeck from './Components/CardDeck';
import Main from './Components/Main';
import Footer from './Components/Footer';


function Fetch2() {
    const [weatherData, setWeatherData] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [savedInput, setSavedInput] = useState('');
    const [shouldfetchData, setShouldFetchData] = useState(false);
    const [error, setError] = useState('');
    const [showComponents, setShowComponents] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch(
                // `http://localhost:8080/http://api.weatherapi.com/v1/current.json?key=11a3eabe04a14e73b6e182356241501&q=${savedInput}&aqi=no`
                `https://api.weatherapi.com/v1/forecast.json?key=11a3eabe04a14e73b6e182356241501&q=${savedInput}&days=5&aqi=no&alerts=no`
            );

            if (!response.ok) {
                throw new Error('Bad Request');
            }

            const data = await response.json();
            setWeatherData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Error fetching weather data. Please try again.');
        }
    };


    useEffect(() => {
        if (shouldfetchData === true) {
            fetchData();
            setShouldFetchData(false);
        }
    }, [shouldfetchData]);

    // From input field -> savedInput

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            if (inputValue.trim() !== '') {
                setError('');
                setShouldFetchData(true);
                setShowComponents(true);
                saveInput();
            } else {
                setError('Invalid input. Please enter a location.');
            }
        }
    };

    const saveInput = () => {
        setSavedInput(inputValue);
    }


    function fetchDataOnButtonClick() {
        console.log('button pressed.');
        if (inputValue.trim() !== '') {
            setError('');
            setShouldFetchData(true);
            setShowComponents(true);
            saveInput();
        } else {
            setError('Invalid input. Please enter a location.');
        }
    }


    return (
        <div className='fetch'>
            <br />
            <h1>Weather App</h1>
            <div className='outerTextInputField'>Vpišite željeno mesto: <br />
                <input type='text' className='innerTextInputField' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleEnterPress}></input>
                <button type="button" className="fetch2 btn" onClick={fetchDataOnButtonClick}>
                    <i className="bi bi-cloud-check-fill"></i>
                </button>
            </div>

            {showComponents ? (<div>
                <div className='printInputText'>
                    {error ? <p>{error}</p> : null}
                </div>

                <Main weatherData={weatherData} />

                <div>
                    <CardDeck weatherData={weatherData} />
                </div>
            </div>) : (null)}

            <div>
                <Footer />
            </div>

        </div>
    );
}

export default Fetch2;
