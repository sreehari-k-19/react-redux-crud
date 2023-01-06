import React from 'react';
import cup from '../images/pngwing.com.png'
import Card from './card ';
import teams from './teamDetails'

const Teams = () => {
    const [Argentina, France, Morocco, Croatia] = teams;

    return (
    <div className='semi'>
        <h1>FIFA 2022 WORLD CUP SEMI FINALS</h1>
        <div className='teams'>
            {/* <p>{teams[0].image}</p> */}
            <div className='a'>
                <Card team={Argentina} />
            </div>
            <div className='b'>

                <Card team={France} />
            </div>
            <div className='cup'>
                <img src={cup} alt="cup" />
            </div>
            <div className='c'>
                <Card team={Croatia} />
            </div>
            <div className='d'>
                <Card team={Morocco} />
            </div>
        </div>
    </div>
    )
}

export default Teams