import { profileNCareerFilter } from '@/constants'
import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { useState } from 'react'
import { iconMapping } from '@/components'

interface SelectedAnswerProps {
  $isSelected: boolean
  onClick: () => void
}

export const MeetupTypeSelector2 = () => {
  const [selectedItems, setSeletedItems] = useState<string[]>([])
  console.log(selectedItems)
  const isItemSelected = (item: string) => {
    return selectedItems.includes(item)
  }

  const handleSelectedItem = item => {
    // 아이템이 이미 선택되었는지 확인
    const isSelected = selectedItems.includes(item)

    if (isSelected) {
      // 이미 선택된 경우, 해당 아이템을 배열에서 제거
      setSeletedItems(prevItems =>
        prevItems.filter(prevItem => prevItem !== item)
      )
    } else {
      // 선택되지 않은 경우, 해당 아이템을 배열에 추가
      setSeletedItems(prevItems => [...prevItems, item])
    }
  }
  const AnswerItems = profileNCareerFilter.meetingJopType.map(item => (
    <AnswerItem
      key={item}
      onClick={() => handleSelectedItem(item)}
      $isSelected={isItemSelected(item)}>
      <IconWrapper
        $isSelected={isItemSelected(item)}
        onClick={() => handleSelectedItem(item)}>
        {iconMapping[item]}
      </IconWrapper>
      {item}
    </AnswerItem>
  ))

  return (
    <>
      <CareerCreateMeetingCommonQuestion>
        어떤 종류의 모임을 만드시겠어요?
      </CareerCreateMeetingCommonQuestion>
      <AnswerItemFlexWrap>{AnswerItems}</AnswerItemFlexWrap>
    </>
  )
}

const AnswerItem = styled.div<SelectedAnswerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  border-radius: 21px;
  padding: 12px;
  cursor: pointer;
  background-color: ${props =>
    props.$isSelected
      ? props.theme.subColor.blie10
      : props.theme.subColor.blueGrey};
  color: ${props => (props.$isSelected ? props.theme.main.blue0 : '#000')};
`
const AnswerItemFlexWrap = styled.div`
  width: 382px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-width: 120px;
  cursor: pointer;
`

const IconWrapper = styled.div<SelectedAnswerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  color: ${props => (props.$isSelected ? props.theme.main.blue0 : ' #ff4040')};
  width: 16px;
  height: 16px;
`
