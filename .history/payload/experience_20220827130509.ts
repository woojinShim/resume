import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '아톰릭스랩 (Atomrigs Lab)',
      position: 'dApp 개발자',
      startedAt: '2022-02',
      endedAt: '2022-08',
      descriptions: [
        '블록체인 Secure MPC 기반 지갑, 댑 개발 스타트업 (17명)',
        'NFT Project Studiearn 컨트랙트 테스트코드 작성, UI개발',
        'P2E 포트리스 아레나 NFT Marketplace 컨트랙트 테스트코드 작성',
        '간송 메타버스 뮤지엄 혜원NFT 보유자에게 단오풍정 영인본 배송을 위한 주소입력 서비스 개발',
        '간송 메타버스 뮤지엄 주유청강 NFT 수요조사 설문지 페이지 개발'
      ],
      skillKeywords: ['Etherurm', "Klaytn", 'Solidity', 'Hardhat', 'ethers.js', 'JavaScript', 'Firebase'],
    },
  ],
};

export default experience;
