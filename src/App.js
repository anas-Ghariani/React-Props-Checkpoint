import "./App.css";
import img1 from "./imges/img1.jpeg";
import img2 from "./imges/img2.jpeg";
import img3 from "./imges/img3.jpeg";
import img4 from "./imges/img4.jpeg";
import ProfileComponent from "./Profile/ProfileComponent";
import {
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Navbar,
  Container,
  Button,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const handleName = (name) => {
  alert(`I Am ${name}`);
};
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">personal account.</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Privacy</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*Carousel & img1 img2 img3 */}

      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"1200px"}
            src={img3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"1200px"}
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"1200px"}
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*ProfileComponent & cardform */}
      <div className="cardform">
        <ProfileComponent
          name="anas-Gharyani"
          bio="Biography, I am Anas Gharyani from Libya, age 27, I study at gomycode in Tunis
"
          handleName={handleName}
          profession="I Am An IT Engneer"
        >
          {" "}
          <img src={img4} alt="myprofile"></img>
        </ProfileComponent>
        {/* form */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>EmailAddress</Form.Label>
            <Form.Control
              type="email"
              placeholder="anasnabilghariani@gmail.com"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      {/* footer */}
      <div className="footer">
        <footer className="page-footer font-small blue pt-4 footer1">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">profile information</h5>
                <p>
                  About a personal page Contact us or contact us via e-mail
                  Blogger of the social networking page
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-0" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Email address : anasnabilghariani@gmail.com</a>
                  </li>
                  <li>
                    <a href="#!">Phone Number : 00218924010030</a>
                  </li>
                  <li>
                    <a href="#!">Other phone_numper : 00218914010030</a>
                  </li>
                  <li>
                    <a href="#!">Address : Aluwaina-tunes</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">link</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram-square"></i>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2022 Copyright:
            <a href="#!"> wallpaper.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
