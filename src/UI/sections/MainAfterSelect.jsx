import GameButton from '../components/GameButton'
import { useRef, useEffect } from 'react'
import GradientAnim from '../components/GradientAnim';
import { useResize } from '../../context/ResizeProvider'

const MainAfterSelect = ({
    choosen,
    result,
    playAgain
}) => {
    let rendered = false;
    let played = useRef(false);
    let resized = useResize();
    let gradientRef = useRef();
    let userRef = useRef();
    let machineRef = useRef();

    let colors = {
        'scissors': 'orange',
        'paper': 'blue',
        'rock': 'red',
        'lizard': 'purple',
        'spock': 'cyan',
    }

    let translate = (p, u, m) => {
        if(p.current){
            u.current.style.transform = 'translateX(-45%)';
            m.current.style.transform = 'translateX(39%)';
        }else{
            setTimeout(() => {
                u.current.style.transform = 'translateX(-45%)';
                m.current.style.transform = 'translateX(39%)';
            }, 3000)
            p.current = true;
        }
    }

    let notTranslate = (p, u, m) => {
        u.current.style.transform = 'translateX(-7%)';
        m.current.style.transform = 'translateX(10%)';
        p.current = true;
    }

    let showRadialAnim = (ref) => {
        ref.current.classList.remove('disapear');
    }

    useEffect(() => {
        if(!rendered){
            resized > 376 ?
            (translate(played, userRef, machineRef),
            showRadialAnim(gradientRef)) :
            notTranslate(played, userRef, machineRef)
            rendered = true;
        }
    }, [resized]);

    return (
        <div className='elements-cont margin-x inner-h-cont fade-in'>

            <div className='margin-a fade-in-x prompt r'>
                <div className='txt-y margin-z'>
                    <span>{result.current}</span>
                </div>
                <div
                    className='play-outline play-btn wide-cont pointer'
                    onClick={() => {playAgain(), played = false}}
                >
                    <span>PLAY AGAIN</span>
                </div>
            </div>

            <div
                className='inner-v-cont transform center-column col-xy displaceX-neg10px flex-end-m'
                ref={userRef}
            >
                <div className='txt-x margin-y hide-mobile'>
                    <span>YOU PICKED</span>
                </div>
                <div>
                    <div className='elements-cont'>
                        <GradientAnim gradientRef={gradientRef}
                            mobile={'-m'}
                            hide={'desktop'} />
                        <GameButton
                            color={colors[choosen[0]]}
                            iconName={choosen[0]}
                            selected={true} />
                    </div>
                </div>
                <div className='txt-x-m hide-desktop margin-b-m'>
                    <span>YOU PICKED</span>
                </div>
            </div>

            <div
                className='inner-v-cont center-column col-xyz elements-cont transform flex-end-m displaceX-15px'
                ref={machineRef}
            >
                <div className='txt-x margin-y hide-mobile'>
                    <span>THE HOUSE PICKED</span>
                </div>

                <div className='dark-circle-cont'>
                    <GradientAnim gradientRef={gradientRef}
                        mobile={''}
                        hide={'mobile'} />
                    <div className='dark-blue abs center-abs c-disp-s circle dark-circle margin-b' />
                    <div className='fade-in-y'>
                        <GameButton
                            color={colors[choosen[1]]}
                            iconName={choosen[1]}
                            selected={true}
                        />
                    </div>
                </div>

                <div className='txt-x-m margin-b-m hide-desktop'>
                    <span>THE HOUSE PICKED</span>
                </div>
            </div>
        </div>
    )
}

export default MainAfterSelect