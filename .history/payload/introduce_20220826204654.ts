import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹/댑 서비스 개발과 컨트랙 작성, 테스트, 배포, 함수콜을 해본 경험이 있습니다. Solidity, Hardhat, ethers.js, ipfs, Git, React 등을 사용하여 NFT 프로덕션 서비스를 개발하며 대중적으로 재미있고 유의미한 서비스를 만들기 위해 항상 고민하고 있습니다.',
    'Integer ut libero eu libero mattis rutrum at at urna. Integer non turpis ante. Suspendisse vestibulum odio id libero facilisis gravida. In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus. Quisque ornare eget ex ut congue. Nam vel finibus sem. Phasellus id neque nibh. Nullam turpis velit, pharetra vitae mi non, bibendum maximus urna.',
  ],
  sign: 'Woojin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;