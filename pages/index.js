import { useState } from 'react'
import tw from 'tailwind-styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { MdCake, MdPhone } from 'react-icons/md'
import Link from 'next/link'
import 'react-datepicker/dist/react-datepicker.css'

export default function Home() {
  const [birthDate, setBirthDate] = useState(new Date())
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <Wrapper>
      <MainContainer>
        <InputContainer>
          <NumberContainer>
            <MdPhone size={28} />
            <Input
              placeholder='8-digit number'
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
              dropdownMode='select'
              wrapperClassName='date-picker'
            />
          </DateContainer>
          <Link
            href={{
              pathname: '/result',
              query: { phoneNumber: phoneNumber, birthDate: birthDate },
            }}
          >
            <SubmitButton>計算</SubmitButton>
          </Link>
        </InputContainer>
        <HistoryContainer>History</HistoryContainer>
      </MainContainer>
    </Wrapper>
  )
}

const Wrapper = tw.div`
bg-gray-200 flex justify-center 
`

const MainContainer = tw.div`
w-1/3 flex flex-col h-screen m-8 p-8 bg-white rounded-lg
`

const InputContainer = tw.div`
`
const HistoryContainer = tw.div`
flex-1
`
const NumberContainer = tw.div`
flex items-center
`

const DateContainer = tw.div`
flex items-center mt-4
`

const Input = tw.input`
ml-2 bg-gray-100 p-1 h-10 rounded-2 w-full text-slate-600
`

const SubmitButton = tw.button`
w-full bg-black text-white text-xl mt-4 p-2
`
