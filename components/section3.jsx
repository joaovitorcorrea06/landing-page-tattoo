import React from 'react'

const Section3 = ({animations3i1}) => {
  return (
    <div className="hero min-h-screen bg-base-200 flex flex-col" id='section3'>
      <div className={`hero-content flex-col lg:flex-row ${animations3i1} section3Hover my-5`} id='section3Img1'>
        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
      <div className={`hero-content flex-col lg:flex-row-reverse ${animations3i1} section3Hover`} id='section3Img1'>
        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Section3