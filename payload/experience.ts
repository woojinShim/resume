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
        '블록체인 Secure MPC 기반 지갑, 디앱 개발 스타트업 (17명)',
        'Studiearn NFT Contract UI개발',
        'P2E 포트리스 아레나 NFT Marketplace Contract Test Case',
        '간송미술관 NFT 홀더 대상 영인본 배송 주소입력 서비스 개발',
        '간송미술관 NFT 수요조사 지갑 기반 설문 개발',
      ],
      skillKeywords: [
        'Etherurm',
        'Klaytn',
        'Solidity',
        'Hardhat',
        'ethers.js',
        'JavaScript',
        'Firebase',
      ],
    },
  ],
};

export default experience;
