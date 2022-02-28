import React from 'react'
import tw from 'tailwind-styled-components'
import { trigrams, hexagrams } from '../data/trigrams'
import Yin from './yin'
import Yang from './yang'

const Hexagram = () => {
  let phoneNumber = '98686841'
  let upperTotal = 0
  let lowerTotal = 0
  let upperSeq = 0
  let lowerSeq = 0
  let changingLine = 0

  phoneNumber.split('').map((c, index) => {
    if (index < 4) {
      upperTotal += parseInt(c)
    } else {
      lowerTotal += parseInt(c)
    }
  })
  upperSeq = upperTotal % 8
  lowerSeq = lowerTotal % 8
  changingLine = 6 - ((upperTotal + lowerTotal) % 6)

  console.log('upperTotal=' + upperTotal + ',' + upperSeq)
  console.log('lowerTotal=' + lowerTotal + ',' + lowerSeq)
  console.log('changingline = ' + changingLine)

  return (
    <Wrapper>
      <OriginalContainer>
        <HexagramContainer>
          <PalanceContainer>
            {hexagrams[upperSeq][lowerSeq].Palace}
          </PalanceContainer>
          <LinesContainer>
            {hexagrams[upperSeq][lowerSeq].Pattern.map((line, index) => {
              return [
                hexagrams[upperSeq][lowerSeq].Subject === index ? (
                  <Role>世</Role>
                ) : hexagrams[upperSeq][lowerSeq].Object === index ? (
                  <Role>應</Role>
                ) : (
                  ''
                ),
                line === 0 ? (
                  <Yin
                    key={'O' + index}
                    name={hexagrams[upperSeq][lowerSeq].Earth[index]}
                    relation={hexagrams[upperSeq][lowerSeq].Relation[index]}
                    change={index === changingLine}
                  />
                ) : (
                  <Yang
                    key={'O' + index}
                    name={hexagrams[upperSeq][lowerSeq].Earth[index]}
                    relation={hexagrams[upperSeq][lowerSeq].Relation[index]}
                    change={index === changingLine}
                  />
                ),
              ]
            })}
          </LinesContainer>
          <NameContainer>{hexagrams[upperSeq][lowerSeq].Name}</NameContainer>
        </HexagramContainer>
      </OriginalContainer>
      <TransformedContainer>
        <HexagramContainer>
          <PalanceContainer>
            {hexagrams[upperSeq][lowerSeq].Palace}
          </PalanceContainer>
          <LinesContainer>
            {hexagrams[upperSeq][lowerSeq].Pattern.map((line, index) => {
              return line === 0 ? (
                <Yin
                  key={'T' + index}
                  name={hexagrams[upperSeq][lowerSeq].Earth[index]}
                  relation={hexagrams[upperSeq][lowerSeq].Relation[index]}
                  change={index === changingLine}
                />
              ) : (
                <Yang
                  key={'T' + index}
                  name={hexagrams[upperSeq][lowerSeq].Earth[index]}
                  relation={hexagrams[upperSeq][lowerSeq].Relation[index]}
                  change={index === changingLine}
                />
              )
            })}
          </LinesContainer>
          <NameContainer>{hexagrams[upperSeq][lowerSeq].Name}</NameContainer>
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
flex flex-col items-center
`
const Role = tw.div`
w-1 text-s
`
