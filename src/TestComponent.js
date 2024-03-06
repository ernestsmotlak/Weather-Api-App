import React from 'react'

const TestComponent = () => {
    const time1 = new Date('2024-02-09');
    const day1 = time1.getDay();

    const map = new Map();
    map.set(0, 'Ned');
    map.set(1, 'Pon');
    map.set(2, 'Tor');
    map.set(3, 'Sre');
    map.set(4, 'Čet');
    map.set(5, 'Pet');
    map.set(6, 'Sob');
    
    console.log(map.get(day1));


    return (
        <div>
            njoom
        </div>
    )
}

export default TestComponent