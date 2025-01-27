import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Icons
import {
  BellIcon,
  NewsIcon,
  NotificationIcon,
  InboxIcon,
  ArrowRightIcon,
  BasketIcon,
  PaypalIcon,
} from "../../Icons";

const Bell = () => {
  return (
    <Dropdown as={Nav.Item} drop>
      <Dropdown.Toggle as={Nav.Link} href="" className="px-3">
        <BellIcon />
      </Dropdown.Toggle>
      <Dropdown.Menu className="bell-menu py-0">
        <Tabs defaultActiveKey="news" id="bell-items" fill>
          <Tab
            eventKey="notifications"
            title={
              <span className="mx-2">
                <NotificationIcon className="fs-5 mb-2 mx-4" />
                Notifications
              </span>
            }
          >
            <div className="tab-header p-2">Notifications (3)</div>
            <div className="bell-items">
              {[
                {
                  name: "Elizabeth Bennet",
                  notification: "liked your post",
                },
                {
                  name: "Jessica Smith",
                  notification: "commented on your photo",
                },
                {
                  name: "Kyle Hendricks",
                  notification: "birthday today!",
                },
              ].map((data, x) => (
                <Link
                  key={x}
                  to=""
                  className="dropdown-item py-3 text-wrapping d-flex"
                >
                  <Image
                    src={`https://randomuser.me/api/portraits/${
                      x === 2 ? "men" : "women"
                    }/${x + 7}.jpg`}
                    alt="profile pic"
                    style={{
                      height: "50px",
                    }}
                    roundedCircle
                  />
                  <div
                    className="bell-item ps-4 d-block"
                    style={{ width: "100%" }}
                  >
                    <h6 className="justify-content-start text-wrap">
                      {data.name}{" "}
                      <span
                        className="ps-1"
                        style={{
                          color: "var(--bs-gray-600)",
                          display: "contents",
                        }}
                      >
                        {data.notification}
                      </span>
                    </h6>

                    <p className="text-primary mb-0">
                      {x === 0 ? `${x + 2}` : x + 2}h ago
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="tab-footer">
              <Link className="nav-link view-all ps-2" to="">
                View all <ArrowRightIcon />
              </Link>
            </div>
          </Tab>
          <Tab
            eventKey="messages"
            title={
              <span className="mx-2">
                <InboxIcon className="fs-5 mb-2 mx-4" />
                Messages
              </span>
            }
          >
            <div className="tab-header p-2">Messages (4)</div>
            <div className="bell-items">
              {["John Doe", "Sam Williams", "Jane Bennet", "Sarah Smith"].map(
                (name, x) => (
                  <Link to="" className="dropdown-item py-3 d-flex" key={x}>
                    <Image
                      src={`https://randomuser.me/api/portraits/${
                        x >= 2 ? "women" : "men"
                      }/${x}.jpg`}
                      alt="profile pic"
                      style={{
                        height: "50px",
                      }}
                      roundedCircle
                    />
                    <div
                      className="bell-item text-wrap ps-4"
                      style={{ width: "100%" }}
                    >
                      <h6>
                        {name} <span>1h ago</span>
                      </h6>

                      <p style={{ marginBottom: "0px" }}>
                        Lorem ipsum dolor sit amet....
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
            <div className="tab-footer">
              <Link className="nav-link view-all ps-2" to="">
                View all <ArrowRightIcon />
              </Link>
            </div>
          </Tab>
          <Tab
            eventKey="news"
            title={
              <span className="mx-2">
                <NewsIcon className="fs-5 mb-2 mx-4" />
                News
              </span>
            }
          >
            <div className="tab-header p-2">News (2)</div>
            <div className="bell-items">
              <Dropdown.Item to="" className="dropdown-item py-3 d-flex">
                <span
                  className="news-icon fs-3"
                  style={{ backgroundColor: "#456aeb" }}
                >
                  <BasketIcon />
                </span>
                <div
                  className="bell-item text-wrap ps-4"
                  style={{ width: "100%" }}
                >
                  <h6>Ecommerce is live</h6>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Item to="" className="dropdown-item py-3 d-flex">
                <span
                  className="news-icon fs-3"
                  style={{ backgroundColor: "#31ba7e" }}
                >
                  <PaypalIcon />
                </span>
                <div
                  className="bell-item text-wrap ps-4"
                  style={{ width: "100%" }}
                >
                  <h6>PayPal is available as payment method</h6>
                </div>
              </Dropdown.Item>
            </div>
            <div className="tab-footer">
              <Link className="nav-link view-all ps-2" to="">
                View all <ArrowRightIcon />
              </Link>
            </div>
          </Tab>
        </Tabs>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Bell;
