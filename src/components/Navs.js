import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/starred', text: 'Starred'}
]

const Navs = () => {
    return (
        <div>
            <ul>
                { LINKS.map((item, ind) => {
                    return (
                        <li key={`nav_key_${ind}`}>
                            <Link to={ item.to }>
                                { item.text }
                            </Link>
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
}

export default Navs;