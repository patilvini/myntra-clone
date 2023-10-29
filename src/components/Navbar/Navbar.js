import { Link } from "react-router-dom";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Navbar.scss";
import Logo from "../../icons/logo";

const Navbar = () => {
  return (
    <div className="nav-container flex-vc-se">
      {/* <img src={logo} alt="Myntra Logo" width={80} height={50} /> */}
      <Link to="/">
        <Logo className="myntra-logo" />
      </Link>
      <div className="collections">
        <ul className="flex-vc">
          <li>
            <Link className="bold-text-large" to="/shop/men">
              MEN
            </Link>
          </li>
          <li>
            <Link className="bold-text-large" to="/shop/women">
              WOMEN
            </Link>
          </li>
          <li>
            <Link className="bold-text-large" to="/shop/kids">
              KIDS
            </Link>
          </li>
          <li>
            <Link className="bold-text-large">HOME & LIVING</Link>
          </li>
        </ul>
      </div>

      <div className="nav-search">
        <i>
          <SearchOutlinedIcon fontSize="large" />
        </i>
        <input placeholder="Search for products, brands and more" />
      </div>
      <div>
        <ul className="flex-vc-se bold-text-medium">
          <li className="flex-column flex-vc">
            <i className="mb-12">
              <PersonOutlineOutlinedIcon fontSize="large" />
            </i>
            <Link className="bold-text-medium">Profile</Link>
          </li>
          <li className="flex-column flex-vc">
            <i className="mb-12">
              <FavoriteBorderOutlinedIcon fontSize="large" />
            </i>
            <Link className="bold-text-medium">Wishlist</Link>
          </li>
          <li className="flex-column flex-vc">
            <i className="mb-12">
              <ShoppingBagOutlinedIcon fontSize="large" />
            </i>
            <Link className="bold-text-medium">Bag</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
