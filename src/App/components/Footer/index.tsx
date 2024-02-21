import { Link, StyledFooter } from "./styled";

import TwitterIcon from "../../assets/icon-twitter.svg?react";
import FacebookIcon from "../../assets/icon-facebook.svg?react";
import PinterestIcon from "../../assets/icon-pinterest.svg?react";
import InstagramIcon from "../../assets/icon-instagram.svg?react";

const Footer = () => (
  <StyledFooter className="py-5">
    <div className="container">
      <div className="row text-center text-lg-start">
        <div className="col-lg-4">
          <h3 className="fw-bold fs-1 pe-lg-5 text-white mb-4">Shortly</h3>
        </div>
        <div className="col-lg-2">
          <span className="fw-bold text-white">Features</span>
          <ul className="p-0 mt-3 d-grid gap-1">
            <li className="list-group-item">
              <Link>Link Shortening</Link>
            </li>
            <li className="list-group-item">
              <Link>Branded Links</Link>
            </li>
            <li className="list-group-item">
              <Link>Analytics</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2">
          <span className="fw-bold text-white">Resources</span>
          <ul className="p-0 mt-3 d-grid gap-1">
            <li className="list-group-item">
              <Link>Blog</Link>
            </li>
            <li className="list-group-item">
              <Link>Developers</Link>
            </li>
            <li className="list-group-item">
              <Link>Support</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2">
          <span className="fw-bold text-white">Company</span>
          <ul className="p-0 mt-3 d-grid gap-1">
            <li className="list-group-item">
              <Link>About</Link>
            </li>
            <li className="list-group-item">
              <Link>Our Team</Link>
            </li>
            <li className="list-group-item">
              <Link>Careers</Link>
            </li>
            <li className="list-group-item">
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 mt-4">
          <div className="d-flex gap-3 justify-content-center text-white">
            <Link>
              <FacebookIcon />
            </Link>
            <Link>
              <TwitterIcon />
            </Link>
            <Link>
              <PinterestIcon />
            </Link>
            <Link>
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
