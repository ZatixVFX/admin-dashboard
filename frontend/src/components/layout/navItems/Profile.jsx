import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import { useLogoutMutation } from "../../../slices/usersApiSlice";
import { logout } from "../../../slices/authSlice";

import {
  GearIcon,
  LogoutIcon,
  ProfileIcon,
  SupportIcon,
  SwitchAccIcon,
} from "../../Icons";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dropdown as={Nav.Item} drop>
      <Dropdown.Toggle as={Nav.Link} href="" className="px-2">
        <Image
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="profile pic"
          roundedCircle
          style={{
            width: "100%",
            height: "38px",
            boxShadow: "0px 0px 3px 3px #6c757d",
          }}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className="profile-menu py-0">
        <Link
          className="dropdown-item profile-item d-flex px-3 pt-3"
          to="/user-profile"
        >
          <ProfileIcon className="fs-5" />
          <Container>
            <h6>Profile</h6>
            <p>Public profile</p>
          </Container>
        </Link>
        <Link
          className="dropdown-item profile-item d-flex px-3 pt-3"
          to="/account-settings"
        >
          <GearIcon className="fs-5" />
          <Container>
            <h6>Settings</h6>
            <p>Account settings</p>
          </Container>
        </Link>
        <Link
          to="/dashboards"
          className="dropdown-item profile-item d-flex px-3 pt-3"
        >
          <SupportIcon className="fs-5" />
          <Container>
            <h6>Support</h6>
            <p>Help center</p>
          </Container>
        </Link>
        <div className="dropdown-item premium d-flex justify-content-between p-2">
          <Dropdown.ItemText className="fw-semibold">
            Premium Account
          </Dropdown.ItemText>
          <Form>
            <Form.Check disabled type="switch" id="premium" />
          </Form>
        </div>
        <Link
          to="/dashboards"
          className="dropdown-item profile-item d-flex px-3 pt-3"
        >
          <SwitchAccIcon className="fs-5" />
          <Container>
            <h6>Switch account</h6>
          </Container>
        </Link>
        <Link
          onClick={logoutHandler}
          className="dropdown-item profile-item d-flex px-3 pt-3"
        >
          <LogoutIcon className="fs-5" />
          <Container>
            <h6>Logout</h6>
          </Container>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Profile;
