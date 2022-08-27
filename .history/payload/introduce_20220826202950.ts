import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹/댑 서비스 개발과 컨트랙 작성, 테스트, 배포, 함수콜을 해본 경험이 있습니다. Solidity, Hardhat, ethers.js',
    'Integer ut libero eu libero mattis rutrum at at urna. Integer non turpis ante. Suspendisse vestibulum odio id libero facilisis gravida. In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus. Quisque ornare eget ex ut congue. Nam vel finibus sem. Phasellus id neque nibh. Nullam turpis velit, pharetra vitae mi non, bibendum maximus urna.',
  ],
  sign: 'Woojin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
