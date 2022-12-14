import React from 'react'

const RulesModal = ({ setShowModal }) => {
    return (
        <div className='abs modal black wide-cont'>
            <div className='white inner-modal round-corner-x'>
                <div className='inner-h-cont margin-xy center-h-m displace-20px'>
                    <div className='modal-title '>
                        <span>RULES</span>
                    </div>
                    <img
                        src="images/icon-close.svg"
                        className='content pointer hide-mobile'
                        alt="close button"
                        onClick={() => setShowModal(false)}
                    />
                </div>
                <img
                    src="images/image-rules-bonus.svg"
                    className='margin-xyz modal-title'
                    alt=""
                />
                <div className='margin-xy center-h-m hide-desktop displace-20px'>
                    <img
                        src="images/icon-close.svg"
                        className='content pointer'
                        alt="close button"
                        onClick={() => setShowModal(false)}
                    />
                </div>
            </div>
        </div>
    )
}

export default RulesModal