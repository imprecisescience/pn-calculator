import React from 'react'
import tw from 'tailwind-styled-components'
import { BsRecord } from 'react-icons/bs'

const Yang = ({ name, change, relation, subject, object }) => {
  return (
    <Wrapper>
      <StaticContainer>
        <Name>{name}</Name>
        <StrokeContainer>
          <LongStroke />
        </StrokeContainer>
        <Relation>{relation}</Relation>
      </StaticContainer>
      <OptionContainer>{change && <BsX size={28} />}</OptionContainer>
      <RoleContainer>{subject ? '世' : object ? '應' : ''}</RoleContainer>
    </Wrapper>
  )
}

export default Yang

const Wrapper = tw.div`
h-6 w-full my-2 relative
`
const StaticContainer = tw.div`
flex
`
const OptionContainer = tw.div`
absolute -right-7 top-0
`
const RoleContainer = tw.div`
absolute -top-4 text-xs left-1/2 
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
