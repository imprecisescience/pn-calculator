import { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import Hexagram from './components/hexagram'

const Result = () => {
  const router = useRouter()
  const { phoneNumber, birthDate } = router.query

  return (
    <Wrapper>
      <MainContainer>
        <Title>Result</Title>
        <BirthContainer>8 word</BirthContainer>
        <HexagramContainer>
          <Hexagram />
        </HexagramContainer>
      </MainContainer>
    </Wrapper>
  )
}

export default Result

const Wrapper = tw.div`
bg-gray-200 flex justify-center 
`
const MainContainer = tw.div`
flex flex-col h-screen m-8 p-8 bg-white rounded-lg
`
const Title = tw.div`
text-3xl text-center mb-8
`
const BirthContainer = tw.div``
const HexagramContainer = tw.div``
