import Link from 'next/link';
import Image from 'next/image';

import facebook from '../../public/svg/facebook.svg';
import linkedin from '../../public/svg/linkedin.svg';
import codepen from '../../public/svg/codepen.svg';
import stackoverflow from '../../public/svg/stackoverflow.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <ul className="footer__nav paragraph--small">
            <li className="footer__nav--link">
              <Link href="/#features"
              >Features</Link>
            </li>
            <li className="footer__nav--link">
              <Link href="/#about"
              >What i do?</Link>
            </li>
            <li className="footer__nav--link">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="footer__nav--link">
              <Link href="/#portfolio"
              >Portfolio</Link>
            </li>
            <li className="footer__nav--link">
              <Link href="/#contact">Ping me</Link>
            </li>
          </ul>
          <ul className="footer__social-media">
            <a
              href="https://web.facebook.com/ilyaskhanhdh/"
              target="blank"
              className="footer__social-media--icon"
            >
              <Image src={facebook} alt="facebook" />
            </a>
            <a
              href="https://codepen.io/m_ik"
              target="blank"
              className="footer__social-media--icon"
            >
              <Image src={codepen} alt="codepen" />
            </a>
            <a
              href="https://stackoverflow.com/users/14023580/therealilyaskhan"
              target="blank"
              className="footer__social-media--icon"
            >
              <Image src={stackoverflow} alt="stackoverflow.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/therealilyaskhan/"
              target="blank"
              className="footer__social-media--icon"
            >
              <Image src={linkedin} alt="linkedin" />
            </a>
          </ul>
        </div>
        <div className="footer__copyright paragraph--small">
          2021 &copy; all copyrights are reserved by Muhammad Ilyas
        </div>
      </div>
    </footer>
  );
}
