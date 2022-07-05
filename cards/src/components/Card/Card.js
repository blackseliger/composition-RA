import React from 'react'
import PropTypes from 'prop-types'

function Card({children, ...infoCard}) {
    return (
        <div className="card" style={{maxWidth: `${300}px`}}>
            {infoCard.title !== 'No pic' ? children : null}
                <div className="card-body" style={{width: `${18}rem`}}>
                    <h5 className="card-title">{infoCard.title}</h5>
                    <p className="card-text">{infoCard.text}</p>
                    <a href="/#" className="btn btn-primary">{infoCard.link}</a>
                </div>
        </div>
    )
}

Card.propTypes = {}

export default Card
