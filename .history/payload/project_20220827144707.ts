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
        { content: '주유청강 NFT 수요조사 설문지 페이지 개발' },
      ],
    },
    {
      title: 'Junior NFT, DAO 프로젝트',
      startedAt: '2022-05',
      where: '아톰릭스랩 (Atomrigs Lab)',
      descriptions: [
        { content: '다량 민팅시 가스비 절감을 위한 ERC-721a 사용' },
        { content: 'Reveal 방식을 적용한 ipfs tokenURI' },
        { content: '랜덤한 이미지 조합과 Metadata 생성 후 Pinata에 CID 등록' },
        { content: 'NFT를 listing, buying, cancel 할 수 있는 Marketplace 컨트랙트 배포' },
        { content: 'The Graph를 이용하여 거래 정보를 subGraph Indexing' },
        { content: '오픈제플린을 이용한 DAO 온체인 거버넌스 구현' },
      ],
    },
    {
      title: 'Studiearn',
      startedAt: '2022-02',
      endedAt: '2022-04',
      where: '아톰릭스랩 (Atomrigs Lab)',
      descriptions: [
        { content: 'Mocha, chai를 이용한 FT, NFT Contract Test Case 작성' },
        { content: 'React를 이용한 댑 UI 기능 구현' },
      ],
    },
  ],
};

export default project;
