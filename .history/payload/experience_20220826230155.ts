import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '아톰릭스랩 (Atomrigs Lab)',
      position: 'Software Enginner',
      startedAt: '2022-02',
      endedAt: '2022-08',
      descriptions: [
        'OTA Service Provider',
        'Data modeling and Mashup API development',
        'Systems Engineering and DevOps',
      ],
      skillKeywords: ['Solidity', 'Hardhat', 'ethers.js', 'JavaScript', 'Git'],
    },
  ],
};

export default experience;
