import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '이더리움, 클레이튼 기반 댑 서비스 개발과 스마트컨트랙트 개발/테스트/배포/함수콜을 해본 경험이 있습니다. Solidity, Hardhat, ethers.js, ipfs, Git, React 등을 사용하여 NFT 프로덕션 서비스를 개발하며 대중적으로 재미있고 유익한 서비스를 만들기 위해 항상 고민하고 있습니다.',
    '신뢰 기반의 탈중개 프로토콜, 탈중앙화 블록체인 생 태계를 만드는데 기여하고 싶습니다. 기존 시스템에 투명성과 공정성을 더하는, 큰 사회적 의미 를 가질 것이라는 믿음과 확신이 저의 원동력입니다. DAO, NFT, Defi에 관심이 많고 새로운 기술을 이해하고 적용하는 일을 좋아합니다.',
  ],
  sign: 'Woojin',

  latestUpdated: lastestUpdatedAt,
};

export default introduce;
