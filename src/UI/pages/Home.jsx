import { useState, useEffect, useRef } from 'react'
import RulesModal from '../components/RulesModal';
import Main from '../sections/Main'
import MainAfterSelect from '../sections/MainAfterSelect'
import { ResizeProvider } from '../../context/ResizeProvider'

const Home = () => {
  let score = useRef(0);
  let firstLoad = useRef(false);
  let [choosen, setChoosen] = useState([]);
  let [showModal, setShowModal] = useState(false);

  let result = useRef();

  let rules = {
    'scissors': ['lizard', 'paper'],
    'paper': ['stone', 'spock'],
    'rock': ['lizard', 'scissors'],
    'lizard': ['paper', 'spock'],
    'spock': ['scissor', 'rock'],
  }

  let options = Object.keys(rules);
  
  if (choosen.length != 0 && !firstLoad.current) {
    firstLoad.current = true;
    if (rules[choosen[0]][0] == choosen[1] || rules[choosen[0]][1] == choosen[1]) {
      result.current = 'YOU WIN';
      score.current += 1;
    } else if (choosen[0] == choosen[1]) {
      result.current = 'TIE';
    } else {
      result.current = 'YOU LOSE';
      score.current > 0 && (score.current -= 1);
    }
  }

  let playAgain = () => {
    setChoosen([]);
    firstLoad.current = false;
  }

  let handleChoose = (userChoose) => {
    let mChoose = Math.floor(Math.random() * options.length);
    setChoosen([userChoose, options[mChoose]]);
  }

  return (
    <div className='global-cont inner-v-cont'>

      <div className='gradient-disp dark-bg' />
      <div className='main-cont'>
        <div className='side-column hide-mobile'></div>
        <div className='inner-v-cont central-column center-elems elements-cont'>

          <div className='header outline inner-h-cont'>
            <img
              className='displace-xy content logo-img'
              src="images/logo-bonus.svg"
              alt="Game logo"
            />
            <div className='display info dark-text inner-v-cont'>
              <div className='title'>
                <span>SCORE</span>
              </div>
              <div className='number'>
                <span>{score.current}</span>
              </div>
            </div>
          </div>

          {
            choosen.length != 0 ?
            <ResizeProvider>
              <MainAfterSelect
                choosen={choosen}
                result={result}
                playAgain={playAgain}
              /> 
            </ResizeProvider> :
            <Main handleChoose={handleChoose} />
          }

        </div>
        <div
          className='side-column align-side-col'
        >
          <div
            className='rules-outline rules-btn white-text pointer overall'
            onClick={() => setShowModal(true)}
          >
            <span>RULES</span>
          </div>
        </div>
      </div>

      {showModal && <RulesModal setShowModal={setShowModal} />}

    </div>
  )
}

export default Home