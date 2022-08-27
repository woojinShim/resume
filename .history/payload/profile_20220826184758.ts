import { faBaby, faBackward, faBlog, faBook, faEnvelope, faPhone, faRandom, faRing, faVenus } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube, faWpressr } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '심우진',
    small: '(Lewis)',
  },
  contact: [
    {
      title: 'cmshim22@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-9151-9300',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/woojinShim',
      link: 'https://github.com/woojinShim',
      icon: faGithub,
    },
    {
      link: 'https://velog.io/@woojinshim103',
      icon: faBook,
    },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UCN015PIYR742TB0Ku5AaW9Q',
      // icon: faRss,
      icon: faYoutube,
    },
  ],
  notice: {
    title: "This resume is a sample page of 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
