import React from 'react'
import tw from 'tailwind-styled-components'
import { BsX } from 'react-icons/bs'

const Yin = ({ name, change, relation, subject, object }) => {
  return (
    <Wrapper>
      <StaticContainer>
        <Name>{name}</Name>
        <StrokeContainer>
          <ShortStroke />
          <ShortStroke />
        </StrokeContainer>
        <Relation>{relation}</Relation>
      </StaticContainer>
      <OptionContainer>{change && <BsX size={28} />}</OptionContainer>
      <RoleContainer>{subject ? '世' : object ? '應' : ''}</RoleContainer>
    </Wrapper>
  )
}

export default Yin

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
flex-1 flex justify-between
`
const ShortStroke = tw.div`
h-6 w-12 bg-black 
`
const Name = tw.div`
mr-2
`
const Relation = tw.div`
ml-2 
`
