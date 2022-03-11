import React from 'react'
import tw from 'tailwind-styled-components'
import { hexagrams } from '../data/trigrams'
import Yin from './yin'
import Yang from './yang'

const Hexagram = ({ original, transformed, changingLine }) => {
  const originalHexagram = hexagrams[original[0]][original[1]]
  const transformedHexagram = hexagrams[transformed[0]][transformed[1]]
  const originalRelations = originalHexagram.Relations.filter(
    (r) => r.Palace === originalHexagram.Palace
  )
  const transformedRelations = transformedHexagram.Relations.filter(
    (r) => r.Palace === originalHexagram.Palace
  )

  return (
    <Wrapper>
      <OriginalContainer>
        <HexagramContainer>
          <PalanceContainer>{originalHexagram.Palace}</PalanceContainer>
          <LinesContainer>
            {originalHexagram.Pattern.map((line, index) => {
              return line === 0 ? (
                <Yin
                  key={'O' + index}
                  name={originalHexagram.Earth[index]}
                  relation={originalRelations[0].Relation[index]}
                  change={index === changingLine}
                  subject={originalHexagram.Subject === index}
                  object={originalHexagram.Object === index}
                />
              ) : (
                <Yang
                  key={'O' + index}
                  name={originalHexagram.Earth[index]}
                  relation={originalRelations[0].Relation[index]}
                  change={index === changingLine}
                  subject={originalHexagram.Subject === index}
                  object={originalHexagram.Object === index}
                />
              )
            })}
          </LinesContainer>
          <NameContainer>{originalHexagram.Name}</NameContainer>
        </HexagramContainer>
      </OriginalContainer>
      <TransformedContainer>
        <HexagramContainer>
          <PalanceContainer>{originalHexagram.Palace}</PalanceContainer>
          <LinesContainer>
            {transformedHexagram.Pattern.map((line, index) => {
              return line === 0 ? (
                <Yin
                  key={'T' + index}
                  name={transformedHexagram.Earth[index]}
                  relation={transformedRelations[0].Relation[index]}
                />
              ) : (
                <Yang
                  key={'T' + index}
                  name={transformedHexagram.Earth[index]}
                  relation={transformedRelations[0].Relation[index]}
                />
              )
            })}
          </LinesContainer>
          <NameContainer>{transformedHexagram.Name}</NameContainer>
        </HexagramContainer>
      </TransformedContainer>
    </Wrapper>
  )
}

export default Hexagram

const Wrapper = tw.div`
flex gap-x-12
`
const OriginalContainer = tw.div`
flex flex-col gap-y-4
`
const TransformedContainer = tw.div`
flex flex-col gap-y-4
`
const HexagramContainer = tw.div`
flex flex-col gap-y-4 items-center
`
const PalanceContainer = tw.div`
`
const NameContainer = tw.div`
w-1
`
const LinesContainer = tw.div`
flex flex-col items-center w-40
`
