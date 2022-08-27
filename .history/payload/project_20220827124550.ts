import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '간송 메타버스 뮤지엄 혜원 전신첩 NFT',
      startedAt: '2022-07',
      endedAt: '2022-08',
      where: '아톰릭스랩 (Atomrigs Lab)',
      descriptions: [
        { content: 'Development and operation of Mashup API of Aggregation Layer' },
        {
          content: 'Add Foo Feature in 2019',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
            { content: 'Integer non turpis ante' },
          ],
        },
        {
          content: 'Launched Bar Service in 2018',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
            {
              content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
            },
          ],
        },
      ],
    },
    {
      title: 'Lorem ipsum Project',
      startedAt: '2016-10',
      endedAt: '2017-11',
      where: 'Bar Co., LTD.',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
    },
  ],
};

export default project;
