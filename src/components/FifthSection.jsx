import React from 'react'

const FifthSection = () => {
  return (
    <div>
      <div className="FifthSection flex flex-col items-center font-Sora my-20">
          <h1 className='font-bold text-[40px] '>Our Attorneys</h1>
          <p className=' text-center'>Our expert lawyers help to solve you case instantly </p>
          <div className='flex gap-10 mt-6 font-Inter'>
            <div>
              <img src="./images/Attorney1.png" alt="" />
              <p className='font-bold text-[24px] text-center'>Swift Braze</p>
              <p className='font-semibold text-center '>Women’s lawyer</p>
            </div>
            <div>
              <img src="./images/Attorney2.png" alt="" />
              <p className='font-bold text-[24px] text-center'>Jenny jenifier</p>
              <p className='font-semibold  text-center'>Criminal Defence Lawyer</p>
            </div>
            <div>
              <img src="./images/Attorney3.png" alt="" />
              <p className='font-bold text-[24px] text-center'>Emily watson</p>
              <p className='font-semibold text-center '>Cooperate lawyer</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FifthSection
