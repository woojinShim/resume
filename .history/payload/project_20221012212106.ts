import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '간송미술관 NFT 주소입력 서비스 개발',
      startedAt: '2022-07',
      endedAt: '2022-08',
      where: 'https://kansong.io/address.html',
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
      where: 'https://github.com/woojinShim/myNFT',
      descriptions: [
        { content: 'ERC-721a' },
        { content: 'Reveal 방식의 IPFS tokenURI' },
        { content: '이미지 레이어 조합, Metadata, Pinata CID' },
        { content: 'NFT Marketplace, SubGraph 거래 정보 Indexing' },
        { content: 'OpenZeppelin DAO 온체인 거버넌스 구현' },
      ],
    },
    {
      title: 'Studiearn',
      startedAt: '2022-02',
      endedAt: '2022-04',
      where: '아톰릭스랩 (Atomrigs Lab)',
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
      where: 'https://github.com/woojinShim/DeFi-Stake-Yield-Brownie',
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
      where: 'https://github.com/woojinShim/NFT-Brownie',
      descriptions: [
        { content: '분산형 파일 시스템 IPFS 이용' },
      ],
    },
    {
      title: 'ERC-20을 이용한 토큰 발행',
      startedAt: '2022-01',
      endedAt: '2022-01',
      where: 'https://github.com/woojinShim/Customize-ERC-20',
      descriptions: [
        { content: '분산형 파일 시스템 IPFS 이용' },
      ],
    },
  ],
};

export default project;
