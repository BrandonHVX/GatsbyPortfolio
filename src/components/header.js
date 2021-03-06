import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from "./scroller"
import { Parallax, Background } from "react-parallax"
import bgheader from "../images/slide-4.jpg"
import Lottie from "react-lottie"
import animationData from "../images/newname.json"
import Mobile from "./mobile"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "",
  },
}

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <>
        {" "}
        {/* <div class="mobile">
          <Mobile />
        </div> */}
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="container">
            <a
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
              onClick={Scroller.handleAnchorScroll}
            >
              B
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive" />

            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy
                  className="navbar-nav"
                  items={["about", "portfolio", "resume", "contact"]}
                  currentClassName="active"
                  rootEl={"#mainNav"}
                  offset={-75}
                >
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#about"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      About
                    </Nav.Link>
                  </li>

                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#portfolio"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Portfolio
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#resume"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Resume
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#contact"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Contact
                    </Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead shadow">
          <div className="container h-100">
            {" "}
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">
                  <Lottie options={defaultOptions} width={"80vmin"} />
                </h1>
                <hr className="divider my-4" />
              </div>{" "}
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  I'm a software engineer in frontend and backend development
                  for complex scalable web apps. I write about software
                  development on my blog. Want to know how I may help your
                  project? Check out my project portfolio and online resume.
                </p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#about"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Find Out More
                </a>
              </div>{" "}
            </div>
          </div>
        </header>{" "}
      </>
    )
  }
}
