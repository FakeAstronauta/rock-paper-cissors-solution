import React from 'react'

const GameButton = ({ iconName, color, selected }) => {
    let s = selected ? '-s' : '';
    let w = selected ? 'h-z' : '';

    return (
        <div className={`circle border-btn${s} b-disp${s} ${color}`}>
            <div className={`circle center-abs abs center-btn${s} white c-disp${s}`} />
            <img
                className={`center-abs img-btn btn-img-m ${w}`}
                src={`images/icon-${iconName}.svg`}
                alt="button's logo" />
        </div>
    )
}

export default GameButton