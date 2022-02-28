import React from 'react'
import tw from 'tailwind-styled-components'
import { BsRecord } from 'react-icons/bs'

const Yang = ({ name, change, relation }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <StrokeContainer>
        <LongStroke />
      </StrokeContainer>
      <Relation>{relation}</Relation>
      {change && <BsRecord size={28} />}
    </Wrapper>
  )
}

export default Yang

const Wrapper = tw.div`
h-6 w-32 flex my-2
`
const StrokeContainer = tw.div`
flex-1 flex 
`
const LongStroke = tw.div`
h-6 w-full bg-black 
`
const Name = tw.div`
mr-2
`
const Relation = tw.div`
ml-2
`
