import { Footer, Header, SubHeader } from 'components/common/index'
import { ArrowLeft2, SearchNormal1, Notification } from 'iconsax-react'
import styled from 'styled-components'
import { CAREER_SUBHEADER_TEXT } from 'constants/index'
import { CareerMainCard, CareerMainFilterBar } from '@/components/career'
export const CareerMain = () => {
  const mockData = [
    {
      id: 1,
      category: '커리어',
      type: '스터디',
      jobs: ['진짜', '왤케'],
      positions: ['사장', '사원'],
      sex: '남성',
      ageRange: ['20대', '30대'],
      image: [
        'https://images.velog.io/images/hanblueblue/post/3a0b0464-a4f4-44b9-820a-d14e47f98eec/js.png'
      ],
      title: '타이틀1',
      description: 'Meeting Description',
      headCount: 10,
      recruitedPersonnel: 3,
      startDate: '2023-09-18T00:00:00.000+00:00',
      endDate: '2023-09-20T00:00:00.000+00:00',
      onOff: true,
      place: 'Meeting Place',
      week: '매주',
      days: ['월요일', '목요일'],
      time: '10:00 AM',
      progressTime: '2 hours',
      hits: 1,
      likes: 0,
      createdAt: '2023-09-20T20:31:06.132466',
      closing: false
    },
    {
      id: 2,
      category: '커리어',
      type: '스터디',
      jobs: ['하기가', '싫을까?'],
      positions: ['사장', '사원'],
      sex: '남성',
      ageRange: ['20대', '30대'],
      image: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
      ],
      title: '타이틀2',
      description: 'Meeting Description',
      headCount: 10,
      recruitedPersonnel: 3,
      startDate: '2023-09-18T00:00:00.000+00:00',
      endDate: '2023-09-20T00:00:00.000+00:00',
      onOff: true,
      place: 'Meeting Place',
      week: '매주',
      days: ['월요일', '목요일'],
      time: '10:00 AM',
      progressTime: '2 hours',
      hits: 1,
      likes: 0,
      createdAt: '2023-09-20T20:31:06.132466',
      closing: false
    },
    {
      id: 3,
      category: '커리어',
      type: '스터디',
      jobs: ['언제 다하노;;'],
      positions: ['사장', '사원'],
      sex: '남성',
      ageRange: ['20대', '30대'],
      image: [
        'data:image/png;base64,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'
      ],
      title: '타이틀3',
      description: 'Meeting Description',
      headCount: 10,
      recruitedPersonnel: 3,
      startDate: '2023-09-18T00:00:00.000+00:00',
      endDate: '2023-09-20T00:00:00.000+00:00',
      onOff: true,
      place: 'Meeting Place',
      week: '매주',
      days: ['월요일', '목요일'],
      time: '10:00 AM',
      progressTime: '2 hours',
      hits: 1,
      likes: 0,
      createdAt: '2023-09-20T20:31:06.132466',
      closing: false
    }
  ]

  return (
    <Wrap>
      <Header
        leftIcon={<ArrowLeft2 />}
        centerText="같이 성장해요">
        <IconWrapper>
          <SearchNormal1 />
        </IconWrapper>
        <StyledIcon>
          <Notification />
        </StyledIcon>
      </Header>

      <SubHeader
        items={CAREER_SUBHEADER_TEXT}
        initialItem="커리어"
      />

      <CareerMainFilterBar />

      <CareerMainCard responseData={mockData} />

      <Footer />
    </Wrap>
  )
}

const Wrap = styled.div`
  overflow-y: scroll;
  height: 100%;
`
const StyledIcon = styled.button``
const IconWrapper = styled.button`
  margin-right: 10px;
`
