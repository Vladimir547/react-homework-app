import React from 'react';
import './fonts.css'
import data from '../data.json'
import './names.css'

class Fonts extends React.Component {
    render() {
            console.log(data);
        return (
            <ul>
                {data.map((item, index) => {
                    return (
                    <li key={index + item} className='list__item'>
                        <h3>{item.name.first}</h3>
                        <h4>{item.name.last}</h4>
                    </li>
                    );
                })}
            </ul>
        )
    }
}

export default Fonts;
