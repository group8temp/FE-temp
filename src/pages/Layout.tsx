import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.main.white};
  max-width: 767px;
  box-shadow: rgba(130, 130, 130, 0.15) 0px 0px 20px;
`
