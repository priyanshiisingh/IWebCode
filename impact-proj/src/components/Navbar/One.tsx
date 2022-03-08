import "./onecss.css";
import {
  HamburgerIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const Resnav = () => {
  return (
    <div>
      <nav id="menu">
        <label htmlFor="tm" id="toggle-menu">
          <span className="drop-icon">
            <HamburgerIcon />
          </span>
        </label>
        <input type="checkbox" id="tm" />
        <ul className="main-menu clearfix">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">
              Dropdown
              <span className="drop-icon">
                <ChevronDownIcon />
              </span>
              <label
                title="Toggle Drop-down"
                className="drop-icon"
                htmlFor="sm1">
                <ChevronDownIcon />
              </label>
            </a>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <a href="#">Menu One</a>
              </li>
              <li>
                <a href="#">
                  Menu Two
                  <span className="drop-icon">
                    <ChevronRightIcon />
                  </span>
                  <label
                    title="Toggle Drop-down"
                    className="drop-icon"
                    htmlFor="sm2">
                    <ChevronDownIcon />
                  </label>
                </a>
                <input type="checkbox" id="sm2" />
                <ul className="sub-menu">
                  <li>
                    <a href="#">Sub Menu One</a>
                  </li>
                  <li>
                    <a href="#">Sub Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Sub Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Menu Three</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Resnav;
