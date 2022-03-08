import "./menu.css";

const Menu = () => {
  return (
    <div>
      <nav className="navigation">
        <ul className="mainmenu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <label htmlFor="products">Dropdown</label>
            <input type="checkbox" id="products" />
            <ul className="submenu">
              <li>
                <a href="">Menu One</a>
              </li>
              <li>
                <label htmlFor="bottoms">Menu Two</label>
                <input type="checkbox" id="bottoms" />
                <ul className="sub-submenu">
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
                <a href="">Menu Three</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
