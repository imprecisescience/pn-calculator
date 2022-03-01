import { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
// import { sexagenaryCycle } from '../data/trigrams'

const EightWords = ({ scycle }) => {
  return (
    <Wrapper>
      <SexagenaryCycleContainer>
        <label className='w-1 font-bold'>日元</label>
        <span className='w-1'>{scycle.Name}</span>
      </SexagenaryCycleContainer>
      <LuckContainer>
        <label className='w-1 font-bold'>天乙</label>
        <span className='w-1'>{scycle.Luck}</span>
      </LuckContainer>
      <EmptyContainer>
        <label className='w-1 font-bold'>空亡</label>
        <span className='w-1'>{scycle.Empty}</span>
      </EmptyContainer>
      <TombContainer>
        <label className='w-1 font-bold'>墓庫</label>
        <span className='w-1'>{scycle.Tomb}</span>
      </TombContainer>
      <FlowerContainer>
        <label className='w-1 font-bold'>咸池</label>
        <span className='w-1'>{scycle.Flower}</span>
      </FlowerContainer>
    </Wrapper>
  )
}

export default EightWords

const Wrapper = tw.div`
flex gap-x-8
`
const SexagenaryCycleContainer = tw.div`
flex flex-col
`
const LuckContainer = tw.div`
flex flex-col
`
const EmptyContainer = tw.div`
flex flex-col
`
const TombContainer = tw.div`
flex flex-col
`
const FlowerContainer = tw.div`
flex flex-col
`
