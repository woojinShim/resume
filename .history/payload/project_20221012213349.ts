import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '간송미술관 NFT 주소입력 서비스 개발',
      startedAt: '2022-07',
      endedAt: '2022-08',
      link: 'https://kansong.io/address.html',
      descriptions: [
        {
          content:
            '지갑주소 NFT Balance를 조회해 배송 서비스 구현',
        },
        { content: 'Firebase CRUD 구현' },
        { content: '국내, 해외로 구분' },
        { content: '주유청강 NFT 수요조사 설문지 페이지 개발' },
      ],
    },
    {
      title: '고전 NFT 프로젝트',
      startedAt: '2022-05',
      endedAt: '2022-08',
      link: 'https://github.com/woojinShim/myNFT',
      descriptions: [
        { content: 'ERC-721a' },
        { content: 'Reveal 방식의 IPFS tokenURI' },
        { content: '이미지 레이어 조합, Metadata, Pinata CID' },
        { content: 'NFT Marketplace, SubGraph 거래 정보 Indexing' },
        { content: 'OpenZeppelin DAO Voting System 구현' },
      ],
    },
    {
      title: 'Studiearn',
      startedAt: '2022-02',
      endedAt: '2022-04',
      link: '아톰릭스랩 (Atomrigs Lab)',
      descriptions: [
        { content: '어워드타입추가 기능, 어워드추가 기능, 해당어워드 민팅기능' },
        { content: 'Hardhat NFT Contract Test Case 작성' },
        { content: 'React Minting Page 개발' },
      ],
    },
    {
      title: 'Token Farm (Staking Dapp)',
      startedAt: '2022-01',
      endedAt: '2022-01',
      link: 'https://github.com/woojinShim/DeFi-Stake-Yield-Brownie',
      descriptions: [
        { content: '토큰을 Contract에 Staking하는 디앱' },
        { content: 'Python Brownie를 이용한 Web3 배포' },
        { content: 'Usedapp을 이용한 MetaMask 연결' },
      ],
    },
    {
      title: 'ERC-721토큰을 이용한 NFT 업로드',
      startedAt: '2022-01',
      endedAt: '2022-01',
      link: 'https://github.com/woojinShim/NFT-Brownie',
      descriptions: [
        { content: '분산형 파일 시스템 IPFS 이용' },
      ],
    },
    {
      title: 'ERC-20을 이용한 토큰 발행',
      startedAt: '2022-01',
      endedAt: '2022-01',
      link: 'https://github.com/woojinShim/Customize-ERC-20',
      descriptions: [

      ],
    },
    {
      title: 'GOODDA (할인정보 제공 서비스)',
      startedAt: '2021-11',
      endedAt: '2021-12',
      link: 'https://github.com/woojinShim/Goodda',
      descriptions: [
        { content: '할인정보 데이터, API 설계' },
        { content: '디자이너의 제안으로 보관함 기능을 Folder와 사용자, N : 1로 만들고 사용자가 여러 FolderList를 가질 수 있게 구현' },
        { content: 'SpringBoot, JPA, Gradle, AWS EC2/S3/RDS, SpringSecurity, JWT , MySql' },
      ],
    },
    {
      title: 'Gallery House (갤러리 공유 서비스)',
      startedAt: '2021-10',
      endedAt: '2021-10',
      link: 'https://github.com/woojinShim/Mini-Project-Gallery',
      descriptions: [
        { content: 'JPA를 활용한 DB테이블링 및 API구현, JWT 토큰을 활용한 유저 인증과 로그인 회원가입 구현' },
        { content: 'SpringBoot, JPA, Gradle, AWS EC2/S3/RDS, SpringSecurity, JWT , MySql' },
      ],
    },
  ],
};

export default project;
