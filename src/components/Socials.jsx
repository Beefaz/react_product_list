import '../styles/socials.css'
import LogoTwitter from '../assets/images/svg/logo-twitter.svg';
import LogoFb from '../assets/images/svg/logo-fb.svg';
import LogoInsta from '../assets/images/svg/logo-insta.svg';

const Socials = () => {
  return (
    <div className="social-links">
      <a className="link" href="https://www.twitter.com/">
        <img src={LogoTwitter} alt='Logo-twitter'/>
      </a>
      <a className="link" href="https://www.facebook.com/">
        <img src={LogoFb} alt='Logo-fb'/>
      </a>
      <a className="link" href="https://www.instagram.com/">
        <img src={LogoInsta} alt='Logo-insta'/>
      </a>
    </div>
  );
}

export default Socials;
