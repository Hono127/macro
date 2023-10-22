'use client'

import Image from 'next/image'
import Gender from './components/organisms/Gender'
import PersonalData from './components/organisms/PersonalData'
import Activity from './components/organisms/Activity'
import Purpose from './components/organisms/Purpose'
import Result from './components/organisms/Result'

export default function Home() {
  const eventClick = () => {
    alert('クリック')
  }
  return (
    <main className='min-h-screen p-12 flex flex-col items-center'>
      <Gender />
      <PersonalData />
      <Activity />
      <Purpose />
      <Result />
    </main>
  )
}
