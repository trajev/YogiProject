import React from 'react'

const SixthSection = () => {
  return (
    <div className="SixthSection relative my-40 justify-center flex flex-col">
    <div>
      <img className='absolute top-[10vh] right-0' src="./images/Ellipse1.png" alt="" />
      <img className='absolute top-[20vh] left-[-5vw]' src="./images/Ellipse2.png" alt="" />
      <img className='absolute left-[26.5vw] z-[-1] top-[8px]' src="./images/Rectangle.png" alt="" />
      <h1 className='font-Sora text-[56px] max-w-xl mx-auto text-center'>What our customer says About Us</h1>
      <img className='absolute top-[140px] left-[40vw] z-[-1]' src="./images/Skribble.png" alt="" />
    </div>
    <div className=' mx-auto mt-40'>
      <div className=' left-[24vw] top-[29vh] flex gap-2'>
        <img src="./images/Opening.png" alt="" />
        <img className=' ' src="./images/Opening.png" alt="" /></div>
      <p className='font-Sora text-[30px] max-w-3xl text-center'>Working with Wix freaks law firm was a game-changer for me. Their team handled my <br /> wrongful termination case .I highly recommend their services to anyone in need of exceptional legal representation</p></div>
    <div className=' right-[31vw] bottom-[-3vh] justify-end max-w-[57vw] flex gap-2'>
      <img src="./images/Closing.png" alt="" />
      <img className=' ' src="./images/Closing.png" alt="" /></div>
  </div>
  )
}

export default SixthSection
