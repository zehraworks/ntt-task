import React from 'react'
import Title from './Title'
import Cards from './Cards'
import More from './More'

export default function Main() {
  return (
    <div className='container flex flex-col gap-y-5 mx-auto px-4'>
        <Title/>
        <Cards/>
        <More/>
    </div>
  )
}
