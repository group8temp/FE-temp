import { CommonLikeIcon, CommonViewIcon } from '@/components'
import styled from 'styled-components'

export const GetDetailStats = () => {
  const like = 7234234
  const view = 72342342
  const time = '20년 전'

  return (
    <>
      <Container>
        <IconWrap>
          <CommonLikeIcon size={16} />
          {like}
          <CommonViewIcon size={16} />
          {view}
          <Dot>・</Dot>
          {time}
        </IconWrap>
      </Container>
    </>
  )
}

// 수정전
// const Container = styled.div`
//   width: 430px;
//   display: flex;
// `

// const IconWrap = styled.div`
//   display: flex;
//   gap: 4px;
//   color: ${props => props.theme.greyScale.grey6};
//   margin: 12px 24px 0;
// `
// const Time = styled.div`
//   font-size: 14px;
// `

// const Dot = styled.div``


// 수정 후 (9.23)
const Container = styled.div`
  width: 100%;
  display: flex;
`

const IconWrap = styled.div`
  display: flex;
  gap: 4px;
  color: ${props => props.theme.greyScale.grey6};
  margin: 3.5% 6.4% 0;
  font-size: 14px;
`

const Dot = styled.div``
