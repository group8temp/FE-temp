import styled from 'styled-components'
import {
  CareerMainItemCreateButton,
  CareerMainItemsWrap
} from 'components/career/index'

export const CareerMainCard = () => {
  return (
    <Card>
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />

      <CareerMainItemCreateButton />
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  width: 430px;
  margin: 0 auto; /* Center the card horizontally */
`
