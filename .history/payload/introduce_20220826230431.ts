import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹/디앱 서비스 개발과 컨트랙 작성, 테스트, 배포, 함수콜을 해본 경험이 있습니다. Solidity, Hardhat, ethers.js, ipfs, Git, React 등을 사용하여 NFT 프로덕션 서비스를 개발하며 대중적으로 재미있고 유의미한 서비스를 만들기 위해 항상 고민하고 있습니다.',
    '블록체인 시스템과 비즈니스, 제품에 기여하는 일을 우선으로 합니다. DAO, NFT, Defi에 관심이 많고 새로운 기술을 이해하고 적용하는 일을 좋아합니다.',
  ],
  sign: 'Woojin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
