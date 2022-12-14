import React from 'react'
import GameButton from '../components/GameButton'

const Main = ({ handleChoose }) => {
    return (
        <div className='elements-cont fade-in'>
            <img className='floating center-abs pentagon-m' src='images/bg-pentagon.svg' />
            <div className='b-disp m-auto displace-y pointer'
            onClick={() => handleChoose('scissors')}>
                <GameButton
                    color={'orange'}
                    iconName={'scissors'}
                    selecte={true}
                />
            </div>
            <div className='col-y inner-h-cont m-auto displace-x'>
                <div className='b-disp pointer'
                onClick={() => handleChoose('spock')}>
                    <GameButton
                        color={'cyan'}
                        iconName={'spock'}
                        selecte={true}
                    />
                </div>
                <div className='b-disp pointer'
                onClick={() => handleChoose('paper')}>
                    <GameButton
                        color={'blue'}
                        iconName={'paper'}
                        selecte={true}
                    />
                </div>
            </div>
            <div className='col-x inner-h-cont m-auto displace-x-m'>
                <div className='b-disp pointer'
                onClick={() => handleChoose('lizard')}>
                    <GameButton
                        color={'purple'}
                        iconName={'lizard'}
                        selecte={true}
                    />
                </div>
                <div className='b-disp pointer'
                onClick={() => handleChoose('rock')}>
                    <GameButton
                        color={'red'}
                        iconName={'rock'}
                        selecte={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Main