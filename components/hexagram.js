import React from "react";
import tw from "tailwind-styled-components";
import { hexagrams } from "../data/trigrams";
import Yin from "./yin";
import Yang from "./yang";

const Hexagram = ({ original, transformed, changingLine }) => {
  return (
    <Wrapper>
      <OriginalContainer>
        <HexagramContainer>
          <PalanceContainer>
            {hexagrams[original[0]][original[1]].Palace}
          </PalanceContainer>
          <LinesContainer>
            {hexagrams[original[0]][original[1]].Pattern.map((line, index) => {
              return line === 0 ? (
                <Yin
                  key={"O" + index}
                  name={hexagrams[original[0]][original[1]].Earth[index]}
                  relation={hexagrams[original[0]][original[1]].Relation[index]}
                  change={index === changingLine}
                  subject={
                    hexagrams[original[0]][original[1]].Subject === index
                  }
                  object={hexagrams[original[0]][original[1]].Object === index}
                />
              ) : (
                <Yang
                  key={"O" + index}
                  name={hexagrams[original[0]][original[1]].Earth[index]}
                  relation={hexagrams[original[0]][original[1]].Relation[index]}
                  change={index === changingLine}
                  subject={
                    hexagrams[original[0]][original[1]].Subject === index
                  }
                  object={hexagrams[original[0]][original[1]].Object === index}
                />
              );
            })}
          </LinesContainer>
          <NameContainer>
            {hexagrams[original[0]][original[1]].Name}
          </NameContainer>
        </HexagramContainer>
      </OriginalContainer>
      <TransformedContainer>
        <HexagramContainer>
          <PalanceContainer>
            {hexagrams[original[0]][original[1]].Palace}
          </PalanceContainer>
          <LinesContainer>
            {hexagrams[transformed[0]][transformed[1]].Pattern.map(
              (line, index) => {
                return line === 0 ? (
                  <Yin
                    key={"T" + index}
                    name={
                      hexagrams[transformed[0]][transformed[1]].Earth[index]
                    }
                    relation={
                      hexagrams[transformed[0]][transformed[1]].Relation[index]
                    }
                  />
                ) : (
                  <Yang
                    key={"T" + index}
                    name={
                      hexagrams[transformed[0]][transformed[1]].Earth[index]
                    }
                    relation={
                      hexagrams[transformed[0]][transformed[1]].Relation[index]
                    }
                  />
                );
              }
            )}
          </LinesContainer>
          <NameContainer>
            {hexagrams[transformed[0]][transformed[1]].Name}
          </NameContainer>
        </HexagramContainer>
      </TransformedContainer>
    </Wrapper>
  );
};

export default Hexagram;

const Wrapper = tw.div`
flex gap-x-12
`;
const OriginalContainer = tw.div`
flex flex-col gap-y-4
`;
const TransformedContainer = tw.div`
flex flex-col gap-y-4
`;
const HexagramContainer = tw.div`
flex flex-col gap-y-4 items-center
`;
const PalanceContainer = tw.div`
`;
const NameContainer = tw.div`
w-1
`;
const LinesContainer = tw.div`
flex flex-col items-center w-40
`;
