import styled from 'styled-components'

export const GetMeetingCategory = () => {
  return (
    <>
      <Container>
        <CategoryChipsWrap>
          <CategoryChip>오프라인</CategoryChip>
          <CategoryChip>주식</CategoryChip>
        </CategoryChipsWrap>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 430px;
  background-color: grey;
`

const CategoryChipsWrap = styled.div`
  margin: 12px 24px 12px;
  display: flex;
  width: auto;
  gap: 4px;
`

const CategoryChip = styled.div`
  width: auto;
  height: 25px;
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 4px 8px;
  border-radius: 4px;
`