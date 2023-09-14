import { Button } from "components/index"
import { theme } from "styles/index"
import { styled } from "styled-components"
import { PROFILE_EDIT_TEXT } from "constants/index"


export const MyPageEditBtn = () => {
  return (
    <ButtonWrap>
      <Button
      color={theme.main.blue0}
      $bgColor={theme.main.white}
      $btnWidth="382px"
      $btnHeight="60px">
        {PROFILE_EDIT_TEXT.profileEditBtnText}
      </Button>
    </ButtonWrap>
  )
}

const ButtonWrap = styled.div`
  margin-bottom: 20px;
  Button{
    margin: 0 auto;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: ${theme.main.blueL1};
  }
`