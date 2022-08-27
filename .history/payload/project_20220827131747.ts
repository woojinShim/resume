import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '간송 메타버스 뮤지엄 혜원 전신첩 NFT 주소입력 서비스 개발',
      startedAt: '2022-07',
      endedAt: '2022-08',
      where: '아톰릭스랩 (Atomrigs Lab)',
      descriptions: [
        { content: '메타마스크 지갑 연결 시 NFT Balance를 조회하여 배송지 정보 입력란이 보이도록 구현' },
        {
          content: 'Firebase를 이용하여 읽기, 쓰기, 수정 기능 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: '국내배송, 해외배송으로 구분' },
          ],
        },
        {
          content: 'Launched Bar Service in 2018',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
            {
              content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
            },
          ],
        },
      ],
    },
    {
      title: 'Lorem ipsum Project',
      startedAt: '2016-10',
      endedAt: '2017-11',
      where: 'Bar Co., LTD.',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
    },
  ],
};

export default project;
