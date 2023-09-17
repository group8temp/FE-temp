//채팅방 상단 공지(토글X)
import { styled } from 'styled-components'
import { Edit } from 'iconsax-react'

export const ChatAnn = ({ isRegistered }) => {
  return (
    <>
      {isRegistered && (
        <ChatTopBar isRegistered={true}>
          <Edit />
          <TopBarContent>공지입니다.</TopBarContent>
        </ChatTopBar>
      )}
    </>
  )
}

export const ChatTopBar = styled.div<{ isRegistered?: boolean }>`
  display: flex;
  padding: 12px 24px;
  background-color: ${props => props.theme.greyScale.bluegrey};
  color: ${props => props.theme.main.blue0};
  border-top: ${props =>
    props.isRegistered ? `1px solid ${props.theme.greyScale.grey3}` : 'none'};
`
export const TopBarContent = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  padding-left: 8px;
  align-self: center;
  color: ${props => props.theme.main.black};
`
