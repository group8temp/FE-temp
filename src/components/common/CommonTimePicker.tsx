import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import styled from 'styled-components'
import dayjs from 'dayjs'

export const CommonTimePicker = ({
  onTimeChange
}: {
  onTimeChange: (time: string) => void
}) => {
  const sxStyle = {
    minWidth: '382px'
    // backgroundColor: 'rgba(0,200,0,0.3)'
    // border: '3px solid red',
    // borderRadius: '10px'
    // padding: '20px',
    // margin: '20px',
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <Wrap>
          <StyledTimePicker
            label={'오전 12:00'}
            ampm={true} // 오전・오후 표시 활성화
            autoFocus={false} // 마운트시 자동 포커스
            sx={sxStyle}
            formatDensity="spacious"
            minutesStep={30}
            format="hh:mm a" // 시간 형식을 "hh:mm aa" 설정
            onChange={(newTime: any) => {
              const formattedTime = dayjs(newTime).format('hh:mm a').toUpperCase()
              onTimeChange(formattedTime)
            }}
          />
        </Wrap>
      </DemoContainer>
    </LocalizationProvider>
  )
}

const Wrap = styled.div`
  display: flex;
  width: 382px;
`

const StyledTimePicker = styled(TimePicker)`
  display: flex;
  border: 1px solid red;
`
