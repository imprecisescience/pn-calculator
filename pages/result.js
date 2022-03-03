import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Hexagram from "../components/hexagram";
import EightWords from "../components/eightwords";
import { MdOutlineArrowBack } from "react-icons/md";
import { trigrams, sexagenaryCycle } from "../data/trigrams";
import Footer from "../components/footer";

const Result = () => {
  const router = useRouter();
  const { phoneNumber, birthDate } = router.query;

  const [original, setOriginal] = useState([0, 0]);
  const [transformed, setTransformed] = useState([0, 0]);
  const [changingLine, setChangingLine] = useState(0);
  const [scycle, setSCycle] = useState(sexagenaryCycle[0]);

  const getHexagrams = () => {
    let upperTotal = 0;
    let lowerTotal = 0;

    phoneNumber.split("").map((c, index) => {
      if (index < 4) {
        upperTotal += parseInt(c);
      } else {
        lowerTotal += parseInt(c);
      }
    });
    const upperSeq = upperTotal % 8;
    const lowerSeq = lowerTotal % 8;
    const cLine =
      (upperTotal + lowerTotal) % 6 === 0
        ? 0
        : 6 - ((upperTotal + lowerTotal) % 6);

    setChangingLine(cLine);
    setOriginal([upperSeq, lowerSeq]);

    if (cLine < 3) {
      setTransformed([trigrams[upperSeq].Change[cLine], lowerSeq]);
    } else {
      setTransformed([upperSeq, trigrams[lowerSeq].Change[cLine - 3]]);
    }
  };

  const getSexagenaryCycle = () => {
    const year = parseInt(birthDate.substring(0, 4));
    const month = parseInt(birthDate.substring(5, 7));
    const day = parseInt(birthDate.substring(8));

    const leapYear = Math.floor((year - 1944) / 4);
    let monthDays = 0;
    for (let i = 1; i < month; i++) {
      if (i == 2) {
        monthDays += 29;
      } else if (i % 2 != 0 || i == 8) {
        monthDays += 31;
      } else {
        monthDays += 30;
      }
    }
    const sexagenaryCycleDay =
      (leapYear + (year - 1944) * 5 + monthDays + day) % 60;
    setSCycle(sexagenaryCycle[sexagenaryCycleDay]);
  };

  const saveHistory = () => {
    let initialValue = JSON.parse(localStorage.getItem("pnQueryHistory"));
    if (initialValue) {
      initialValue.unshift({ phoneNumber: phoneNumber, birthDate: birthDate });
    } else {
      initialValue = [{ phoneNumber: phoneNumber, birthDate: birthDate }];
    }
    localStorage.setItem(
      "pnQueryHistory",
      JSON.stringify(initialValue.slice(0, 10))
    );
  };

  useEffect(() => {
    if (router.isReady) {
      getHexagrams();
      getSexagenaryCycle();
      saveHistory();
    }
  }, [phoneNumber, birthDate]);

  return (
    <Wrapper>
      <MainContainer>
        <ButtonContainer>
          <Link href="/" passHref>
            <span>
              <MdOutlineArrowBack size={28} />
            </span>
          </Link>
        </ButtonContainer>

        <Title>電話號碼起卦配八字</Title>
        {birthDate && phoneNumber && (
          <>
            <BirthContainer>
              <BirthDate>{birthDate}</BirthDate>
              <EightWords scycle={scycle} />
            </BirthContainer>
            <HexagramContainer>
              <PhoneNumber>{phoneNumber}</PhoneNumber>
              <Hexagram
                original={original}
                transformed={transformed}
                changingLine={changingLine}
              />
            </HexagramContainer>
          </>
        )}
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default Result;

const Wrapper = tw.div`
bg-gray-200 flex flex-col items-center
`;
const MainContainer = tw.div`
flex flex-col m-8 p-8 bg-white rounded-lg relative
`;
const Title = tw.div`
text-3xl text-center mb-8
`;
const BirthContainer = tw.div`
pb-4 mb-4 border-b border-slate-300
`;
const HexagramContainer = tw.div``;

const BirthDate = tw.div`
text-slate-500 text-xl text-bold mb-4
`;
const PhoneNumber = tw.div`
text-slate-500 text-xl text-bold mb-4
`;
const ButtonContainer = tw.div`
absolute left-4 top-4 bg-gray-200 rounded-full cursor-pointer
`;
