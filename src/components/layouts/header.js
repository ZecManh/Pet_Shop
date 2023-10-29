import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UserOutlined from "@ant-design/icons";
function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary nav-bar d-flex justify-space-between"
    >
      <Navbar.Brand href="#">
        <img src="https://dt-pet-care.myshopify.com/cdn/shop/files/logo_300x300.png?v=1625137186" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", margin: "auto" }}
          >
            <Nav.Link
              className="home-navbar me-5"
              href="#action1"
              style={{ fontSize: "18px", color: "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="shop-navbar me-5"
              href="#action"
              style={{ fontSize: "18px", color: "white" }}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              className="dog-navbar me-5"
              href="#"
              style={{ fontSize: "18px", color: "white" }}
            >
              Dog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll"  style={{ flex: "none" }}>
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#action1" className="user me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                style={{ color: "white" }}
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </Nav.Link>
            <Nav.Link href="#action2" className="cart me-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
                style={{ color: "white" }}
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
