import { ISkill } from '../component/skill/ISkill';

const blockchain: ISkill.Skill = {
  category: 'Blockchain',
  items: [
    {
      title: 'Solidity',
      level: 3,
    },
    {
      title: 'Hardhat',
      level: 3,
    },
    {
      title: 'ethers.js',
      level: 3,
    },
    {
      title: 'ipfs',
      level: 2,
    },
  ],
};

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Go',
      level: 1,
    },
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'Java',
      level: 2,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Next.js',
      level: 1,
    },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'javascript',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Docker',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'The Graph',
    },
    {
      title: 'Chainlink',
    },
    {
      title: 'Gitlab',
    },
    {
      title: 'Alchemy',
    },
    {
      title: 'Firebase',
    },
    {
      title: 'Postman',
    },
    {
      title: 'Remix',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [blockchain, backend, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
