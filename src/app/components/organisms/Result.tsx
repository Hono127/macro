import React, { FC, memo } from 'react'
import PrimaryButton from '../atoms/PrimaryButton'
import SectionHeading from '../atoms/SectionHeading'

const Result: FC = memo(() => {
  return (
    <section className='result mb-20'>
      <PrimaryButton />
      <SectionHeading>計算結果</SectionHeading>
      {/*
        男性：10×体重kg＋6.25×身長cm−5×年齢＋5
        女性：10×体重kg＋6.25×身長cm−5×年齢−161 
      */}
      <div>
        <ul className='flex flex-col justify-center items-start w-full gap-8 mb-20'>
          <li className='border-2 w-64'>タンパク質：500</li>
          <li className='border-2 w-64'>炭水化物：500</li>
          <li className='border-2 w-64'>脂質：500</li>
        </ul>
        <p>総摂取カロリー</p>
      </div>
    </section>
  )
})

export default Result
