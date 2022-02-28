import React from 'react'
import tw from 'tailwind-styled-components'
import { BsX } from 'react-icons/bs'

const Yin = ({ name, change, relation }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <StrokeContainer>
        <ShortStroke />
        <ShortStroke />
      </StrokeContainer>
      <Relation>{relation}</Relation>
      {change && <BsX size={28} />}
    </Wrapper>
  )
}

export default Yin

const Wrapper = tw.div`
h-6 w-36 flex my-2
`
const StrokeContainer = tw.div`
flex-1 flex justify-between
`
const ShortStroke = tw.div`
h-6 w-10 bg-black 
`
const Name = tw.div`
mr-2
`
const Relation = tw.div`
ml-2
`
