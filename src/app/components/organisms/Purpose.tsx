import React, { FC, memo } from 'react'
import SectionHeading from '../atoms/SectionHeading'

const Purpose: FC = memo(() => {
  return (
    <section className='purpose mb-20'>
      <SectionHeading>目的の選択</SectionHeading>
      <div>
        <ul className='flex flex-col items-center justify-center gap-5'>
          <li className='w-full'>
            <input id='fat' type='radio' name='purpose' className='hidden peer' />
            <label
              className='border-collapse border-slate-400 border-2 block peer-checked:bg-red-500 p-2 text-center rounded-md'
              htmlFor='fat'
            >
              増量
            </label>
          </li>
          <li className='w-full'>
            <input id='keep' type='radio' name='purpose' className='hidden peer' />
            <label
              className='border-collapse border-slate-400 border-2 block peer-checked:bg-yellow-500 p-2 text-center rounded-md'
              htmlFor='keep'
            >
              維持
            </label>
          </li>
          <li className='w-full'>
            <input id='slim' type='radio' name='purpose' className='hidden peer' />
            <label
              className='border-collapse border-slate-400 border-2 block peer-checked:bg-blue-500 p-2 text-center rounded-md'
              htmlFor='slim'
            >
              減量
            </label>
          </li>
        </ul>
      </div>
    </section>
  )
})

export default Purpose
