import styled from 'styled-components'
import { JoinMeetingStepOneTitle } from '../common'
import { Button } from '@/components'

export const IsNotApprovedJoinMeetingStepOneCard = () => {
  return (
    <Container>
      <JoinMeetingStepOneTitle />

      <Wrapper>
        <BtnWrap>
          <Button
            onClick={() => alert('채팅창 이동 로직')}
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            동의하고 시작하기
          </Button>
        </BtnWrap>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 430px;
  height: 80px;
  z-index: 100;
  bottom: 0;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 0 24px;
`
