import { Header, Footer, SubHeader, ChatRooms } from 'components/index'
import { styled } from 'styled-components'
import { CHAT_TABS } from 'constants/index'
/*
    HEADER
    TABS
    LIST
    FOOTER
*/

export const ChatList = () => {
  return (
    <>
      <Header centerText="채팅" />
      <SubHeader
        items={CHAT_TABS}
        initialItem={CHAT_TABS[0]}
      />
      <ChatRooms />
      <Footer />
    </>
  )
}