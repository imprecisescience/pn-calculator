import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdCake, MdPhone, MdMoreVert } from "react-icons/md";
import Link from "next/link";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../components/footer";

export default function Home() {
  const [birthDate, setBirthDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [history, setHistory] = useState();

  useEffect(() => {
    const initialValue = JSON.parse(localStorage.getItem("pnQueryHistory"));
    setHistory(initialValue || []);
  }, []);

  return (
    <Wrapper>
      <MainContainer>
        <Title>電話號碼改運</Title>
        <InputContainer>
          <NumberContainer>
            <MdPhone size={28} />
            <Input
              placeholder="8-digit number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></Input>
          </NumberContainer>
          <DateContainer>
            <MdCake size={28} />
            <DatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              wrapperClassName="date-picker"
            />
          </DateContainer>
          <Link
            href={{
              pathname: "/result",
              query: {
                phoneNumber: phoneNumber,
                birthDate: birthDate.toISOString().slice(0, 10),
              },
            }}
          >
            <SubmitButton>計算</SubmitButton>
          </Link>
        </InputContainer>
        <HistoryContainer>
          <HistoryTitle>查詢紀錄</HistoryTitle>
          {history &&
            history.map((h, index) => {
              return (
                <ItemContainer key={index}>
                  <PhoneContainer> {h.phoneNumber}</PhoneContainer>
                  <BirthContainer>{h.birthDate}</BirthContainer>
                  <ActionButton>
                    <Link
                      href={{
                        pathname: "/result",
                        query: {
                          phoneNumber: h.phoneNumber,
                          birthDate: h.birthDate,
                        },
                      }}
                    >
                      <span>
                        <MdMoreVert />
                      </span>
                    </Link>
                  </ActionButton>
                </ItemContainer>
              );
            })}
        </HistoryContainer>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = tw.div`
bg-gray-200 flex flex-col items-center 
`;
const MainContainer = tw.div`
sm:w-full md:w-1/2 lg:w-1/3 flex flex-col m-8 p-8 bg-white rounded-lg
`;
const InputContainer = tw.div`
`;
const HistoryContainer = tw.div`
flex-1 mt-10
`;
const NumberContainer = tw.div`
flex items-center
`;
const DateContainer = tw.div`
flex items-center mt-4
`;
const Input = tw.input`
ml-2 bg-gray-100 p-1 h-10 rounded-2 w-full text-slate-600
`;
const SubmitButton = tw.button`
w-full bg-black text-white text-xl mt-4 p-2
`;
const Title = tw.div`
text-3xl text-center font-bold mb-8
`;
const ItemContainer = tw.div`
flex items-center odd:bg-white even:bg-gray-200 
`;
const PhoneContainer = tw.div`
flex-1 p-2 
`;
const BirthContainer = tw.div`
flex-1 p-2 
`;
const ActionButton = tw.div`
px-2 cursor-pointer
`;
const HistoryTitle = tw.div`
text-xl mb-4 font-semibold
`;
