import { styled } from 'styled-components'
import { useResetRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useOutsideClick } from 'hooks/index'
import {
  MessageBlock,
  MessageTime,
  MessageBox,
  MemberImg,
  MsgActions
} from 'components/index'
import { Flexbox, columnise } from 'styles/index'
//ChatField
export const Recipient = ({
  message,
  $sender,
  createdAt,
  showCreatedTime,
  showMsgActions,
  toggleMsgActions
}) => {
  const reset = useResetRecoilState(msgActionsState)
  const ref = useOutsideClick({
    onClickOutside: () => {
      reset()
    }
  })

  return (
    <MessageBlock $sender={$sender}>
      {showCreatedTime && (
        <MemberImg
          src={'https://avatars.githubusercontent.com/u/142562921?s=200&v=4'}
        />
      )}
      {!showCreatedTime && <MemberImg src="" />}
      <RecipientBlock>
        {showCreatedTime && <MemberName>고스트 사원</MemberName>}
        <Flexbox>
          <MessageBox
            $sender={$sender}
            onDoubleClick={toggleMsgActions}>
            {message}
            {showMsgActions && typeof message === 'string' && (
              <MsgActions
                msgRef={ref}
                $sender={$sender}
                message={message}
              />
            )}
          </MessageBox>
          <MessageTime
            time={showCreatedTime ? createdAt : null}
            $sender={$sender}
          />
        </Flexbox>
      </RecipientBlock>
    </MessageBlock>
  )
}

const RecipientBlock = styled.div`
  ${columnise};
`
const MemberName = styled.span`
  color: ${props => props.theme.greyScale.grey7};
  font-size: 12px;
  line-height: 18px;
`
