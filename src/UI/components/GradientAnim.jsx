import React from 'react'

const GradientAnim = ({
  gradientRef,
  mobile = '',
  hide
}) => {
  return (
    <div ref={gradientRef} className={`hide-${hide} abs center-abs`}>
        <div className='c-disp-s abs center-abs'>
            <div className={`circle c-disp-s scale${mobile} soft-blue`}/>
        </div>
        <div className='c-disp-s abs center-abs'>
            <div className={`circle c-disp-s scale-y${mobile} soft-blue`}/>
        </div>
        <div className='c-disp-s abs center-abs'>
            <div className={`circle c-disp-s scale-z${mobile} soft-blue`}/>
        </div>
    </div>
  )
}

export default GradientAnim