import React from 'react';
import './styles.css';
import CApitalize from 'capitalize';
import capitalize from 'capitalize';
function DevItem({ dev }) {

    return (<li className="dev-item">
        <header>
            <img src={dev.avatar_url} alt={dev.name} />
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.map(tech => capitalize.words(tech)).join(', ')}</span>
            </div>
        </header>
        <p>
            {dev.bio}
        </p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
    </li>
    )
}
export default DevItem;