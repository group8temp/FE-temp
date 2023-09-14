import { Header, Modal, ChatField } from 'components/index'
import { styled } from 'styled-components'
import { ArrowLeft2, More } from 'iconsax-react'
export const ChatOn = () => {
  return (
    <>
      <Modal
        title="asd"
        content="asd"></Modal>
      <Header
        centerText="USERNAME"
        leftIcon={<ArrowLeft2 />}>
        <StyledIcon>
          <More />
        </StyledIcon>
      </Header>
      <ChatField />
    </>
  )
}

export const StyledIcon = styled.button``
