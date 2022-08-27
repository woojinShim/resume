import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요',
    'Integer ut libero eu libero mattis rutrum at at urna. Integer non turpis ante. Suspendisse vestibulum odio id libero facilisis gravida. In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus. Quisque ornare eget ex ut congue. Nam vel finibus sem. Phasellus id neque nibh. Nullam turpis velit, pharetra vitae mi non, bibendum maximus urna.',
  ],
  sign: 'Woojin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
