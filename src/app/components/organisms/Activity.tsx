import React, { FC, memo } from 'react'
import SectionHeading from '../atoms/SectionHeading'

const Activity: FC = memo(() => {
  return (
    <section className='activity mb-20'>
      <SectionHeading>活動指標の選択</SectionHeading>
      <div>
        <ul className='flex flex-col items-center justify-center gap-5'>
          <li className='w-full'>
            <input id='static' type='radio' className='hidden peer' name='activeState' />
            <label
              className='border-collapse border-slate-400 border-2 block peer-checked:bg-pink-500 h-11 p-2 rounded-md'
              htmlFor='static'
            >
              座り仕事が多く、1日運動はたまに歩いたり階段を登ったりする程度である
            </label>
          </li>
          <li className='w-full'>
            <input id='normal' type='radio' className='hidden peer' name='activeState' />
            <label
              className='border-collapse border-slate-400 border-2 block peer-checked:bg-yellow-500 h-11 p-2 rounded-md'
              htmlFor='normal'
            >
              立ち仕事や重労働が多く、比較的一日中動き回ってる
            </label>
          </li>
          <li className='w-full'>
            <input id='active' type='radio' className='hidden peer' name='activeState' />
            <label
              className='border-collapse border-slate-400 border-2 block peer-checked:bg-sky-500 h-11 p-2 rounded-md'
              htmlFor='active'
            >
              立ち仕事や重労働が多く、それに加えジムでトレーニングを行ったり運動をしている
            </label>
          </li>
        </ul>
      </div>
    </section>
  )
})

export default Activity
