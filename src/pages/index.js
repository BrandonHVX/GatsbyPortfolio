import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import ae from "../images/ae.svg"
import ps from "../images/ps.svg"
import ai from "../images/ai.svg"
import xd from "../images/xd.svg"
import pr from "../images/Pr.svg"
import rails from "../images/rails.svg"
import sass from "../images/sass.svg"
import bootstrap from "../images/bootstrap.svg"
import bgheader from "../images/slide-4.jpg"
import node from "../images/node.svg"
import slack from "../images/slack.svg"
import git from "../images/git.svg"
import npm from "../images/npm.png"
import vue from "../images/vuejs.svg"
import js from "../images/js.svg"
import ruby from "../images/ruby.png"
import html5 from "../images/html5.svg"
import reactsvg from "../images/react.svg"
import ex from "../images/ex.png"
import redcam from "../images/redcam-png.png"
import mongo from "../images/mongo.png"
import finalcut from "../images/finalcut.png"
import {
  Card,
  Nav,
  Tab,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Container,
  Jumbotron,
  Button,
  Modal,
  ProgressBar,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faFilm } from "@fortawesome/free-solid-svg-icons"
import { faPalette } from "@fortawesome/free-solid-svg-icons"
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { Parallax, Background } from "react-parallax"
import ReactPlayer from "react-player"

const navtabs = {
  display: "flex",

  justifyContent: "center",
}
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
}

const text = {
  fontSize: "20px",
  marginTop: "20px",
  marginRight: "10px",
}

function Bands(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      class=" bg-secondary mb-3"
    >
      <Modal.Header
        closeButton
        style={{ color: "#f4623a", backgroundColor: "#000000bf" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="text-uppercase text-white font-weight-bold">
            Bands by Taylor Alexandria
          </h2>
        </Modal.Title>
      </Modal.Header>

      <div class="text-white " style={{ backgroundColor: "#000000bf" }}>
        <div class="container">
          <p>
            Company profile and Interview with Miami based fashion designer
            Taylor Alexandria.
          </p>
        </div>
      </div>

      <Modal.Body style={{ color: "white", backgroundColor: "#000000b1" }}>
        <div class="d-flex justify-content-center mb-3">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=FE5VhXSu3TU"
            playing
          />
        </div>
      </Modal.Body>
      <Modal.Footer style={{ color: "white", backgroundColor: "#000000bf" }}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function BandsModal() {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <div>
      <Button
        className="btn-modal"
        variant="transparent"
        onClick={() => setModalShow(true)}
      >
        View Project
      </Button>

      <Bands show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section className="page-section-about " id="about">
          <section
            class="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
            id="about-section"
          >
            <div class="container">
              {" "}
              <div class="row d-flex no-gutters">
                <div class="col-md-6 col-lg-6 d-flex justify-content-center">
                  <Image />
                </div>

                <div class="col-md-6 col-lg-6 pl-md-5 py-5">
                  <div class="row justify-content-start pb-3">
                    <div class="col-md-12 heading-section">
                      <h2 class="mb-4">About Me</h2>
                      <p>
                        {" "}
                        Creative self-motivated professional with
                        cross-functional skills including expertise in digital
                        media, video production, full stack web development,
                        graphic design, marketing, project management and client
                        engagement.
                      </p>
                      <ul class="about-info mt-4 px-md-0 px-2">
                        <li class="d-flex">
                          <span>Name:</span> <span>Brandon Gines </span>
                        </li>
                        <li class="d-flex">
                          <span>Date of birth:</span>{" "}
                          <span>November 28, 1989</span>
                        </li>
                        <li class="d-flex">
                          <span>Address:</span> <span>Miami, FL 33138 USA</span>
                        </li>
                        <li class="d-flex">
                          <span>Email:</span>{" "}
                          <span>
                            <a href="mailto: brandongines@gmail.com">
                              brandongines@gmail.com
                            </a>
                          </span>
                        </li>
                        <li class="d-flex">
                          <span>Phone: </span>{" "}
                          <span>
                            <a href="tel:310-651-1330">310-651-1330</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="counter-wrap  d-flex mt-md-3">
                    <div class="text">
                      <p>
                        <a href="#" class="btn btn-primary py-3 px-3">
                          Download CV
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Parallax strength={400}>
          <div />
          <section id="services-section">
            <div class="container-fluid px-md-5">
              <div class="row justify-content-center py-5 mt-5">
                <div class="col-md-12 heading-section text-center ">
                  <h1 class="big big-2">Services</h1>

                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-6 text-center  d-flex ftco-animate">
                  <div class="services-1  shadow">
                    <span class="icon">
                      <i class="flaticon-analysis"></i>
                    </span>
                    <div class="desc ">
                      <h3 class="mb-5">Full Stack Web Development</h3>
                      <p>
                        <span class="mr-2">
                          <img src={mongo} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={node} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={ex} width={80} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={reactsvg} width={40} alt="" />
                        </span>
                      </p>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 text-center d-flex ftco-animate">
                  <div class="services-1 shadow">
                    <span class="icon">
                      <i class="flaticon-flasks"></i>
                    </span>
                    <div class="desc">
                      <h3 class="mb-5">Content Creation</h3>
                      <p>
                        <span class="mr-2">
                          <img src={pr} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={ae} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={finalcut} width={50} class="mb-1" alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={redcam} width={48} alt="" />
                        </span>
                      </p>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 text-center d-flex ftco-animate">
                  <div class="services-1 shadow">
                    <span class="icon">
                      <i class="flaticon-ideas"></i>
                    </span>
                    <div class="desc">
                      <h3 class="mb-5"> Graphic & Web Design</h3>
                      <p>
                        <span class="mr-2">
                          <img src={ps} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={ai} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={xd} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={html5} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={sass} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={bootstrap} width={40} alt="" />
                        </span>
                      </p>

                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 text-center d-flex ftco-animate">
                  <div class="services-1 shadow">
                    <span class="icon">
                      <i class="flaticon-ux-design"></i>
                    </span>
                    <div class="desc">
                      <h3 class="mb-5">Motion Graphics</h3>

                      <p>
                        <span class="mr-2">
                          <img src={ae} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={ps} width={40} alt="" />
                        </span>
                        <span class="mr-2">
                          <img src={ai} width={40} alt="" />
                        </span>
                      </p>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Background>
            <div style={{ height: "1800px" }}>
              <img src={bgheader} className="custom-bg" />
            </div>
          </Background>
        </Parallax>

        <section className="page-section" id="portfolio">
          <div class="col-md-12 heading-section text-center">
            <h1 class="heading">Projects</h1>
          </div>
          <div style={text}>
            <Tab.Container defaultActiveKey="first">
              <Nav variant="pills" style={navtabs}>
                <Nav.Item>
                  <Nav.Link eventKey="first">WEB DEVELOPMENT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">VIDEO CONENT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">GRAPHIC DESIGN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">MOTION GRAPHICS</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content style={{ margin: "40px auto" }}>
                <Tab.Pane eventKey="first">
                  <section id="portfolio">
                    <div className="container-fluid ">
                      <div className="row gutters justify-content-md-center">
                        <div className="col-lg-6 col-md-6">
                          <a className="portfolio-box">
                            <Img
                              fluid={
                                this.props.data.images.edges[1].node
                                  .childImageSharp.fluid
                              }
                              className="img d-flex justify-content-center align-items-center"
                            />
                            <div className="portfolio-box-caption">
                              <div className="project-category text-white">
                                <h1>Jobs Now</h1>
                              </div>
                              <div className="project-name">
                                <BandsModal />
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <a
                            className="portfolio-box"
                            href="img/portfolio/fullsize/2.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 1)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[2].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption">
                              <div className="project-category text-white">
                                <h1>Jobs Now</h1>
                              </div>
                              <div className="project-name">Project Name</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <section id="portfolio">
                    <div className="container-fluid p-0">
                      <div className="row gutters">
                        <div className="col-lg-6 col-sm-6">
                          <a
                            className="portfolio-box"
                            href="images/portfolio/fullsize/4.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 3)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[3].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">
                                Category
                              </div>
                              <div className="project-name"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <a
                            className="portfolio-box"
                            href="img/portfolio/fullsize/5.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 4)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[4].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">
                                Category
                              </div>
                              <div className="project-name">Project Name</div>
                            </div>
                          </a>
                        </div>
                        <div
                          className="col-lg-6 col-sm-6 mt-4
                        "
                        >
                          <a
                            className="portfolio-box"
                            href="img/portfolio/fullsize/6.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 5)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[5].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption p-3">
                              <div className="project-category text-white-50">
                                Category
                              </div>
                              <div className="project-name">Project Name</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <section id="portfolio">
                    <div className="container-fluid p-0">
                      <div className="row gutters justify-content-md-center">
                        <div className="col-lg-6 col-sm-6">
                          <a
                            className="portfolio-box"
                            href="images/portfolio/fullsize/4.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 6)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[6].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">
                                Category
                              </div>
                              <div className="project-name"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <a
                            className="portfolio-box"
                            href="img/portfolio/fullsize/5.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 0)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[0].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">
                                Category
                              </div>
                              <div className="project-name">Project Name</div>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <a
                            className="portfolio-box"
                            href="img/portfolio/fullsize/6.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 6)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[6].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption p-3">
                              <div className="project-category text-white-50">
                                Category
                              </div>
                              <div className="project-name">Project Name</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <section id="portfolio">
                    <div className="container-fluid p-0">
                      <div className="row gutters">
                        <div className="col-lg-6 col-sm-6">
                          <a
                            className="portfolio-box"
                            href="images/portfolio/fullsize/4.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 9)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[9].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">
                                Category
                              </div>
                              <div className="project-name"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <a
                            className="portfolio-box"
                            href="img/portfolio/fullsize/5.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 7)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[7].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">
                                Category
                              </div>
                              <div className="project-name">Project Name</div>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6 col-sm-6 mt-4">
                          <a
                            className="portfolio-box"
                            href="img/portfolio/fullsize/6.jpg"
                            onClick={this.handlePortfolioClick.bind(this, 8)}
                          >
                            <Img
                              fluid={
                                this.props.data.images.edges[8].node
                                  .childImageSharp.fluid
                              }
                            />
                            <div className="portfolio-box-caption p-3">
                              <div className="project-category text-white-50">
                                Category
                              </div>
                              <div className="project-name">Project Name</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </section>

        <section className="page-section-resume" id="services">
          <section
            class="ftco-section ftco-no-pb goto-here"
            id="resume-section"
          >
            <div class="container">
              <div class="col-md-12 heading-section text-center ">
                <h1 class="heading">Resume</h1>

                <p> </p>
              </div>
              <div class="row mt-5">
                <div class="col-sm-3 md-3">
                  <nav id="navi">
                    <ul>
                      <li>
                        <a href="#page-1">Education</a>
                      </li>
                      <li>
                        <a href="#page-2">Experience</a>
                      </li>
                      <li>
                        <a href="#page-3">Skills</a>
                      </li>
                      <li>
                        <a href="#page-4">Expertise</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="col-md-9">
                  <div id="page-1" class="page">
                    <h2 class="heading">Education</h2>
                    <div class="resume-wrap d-flex ">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas">
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </span>
                      </div>
                      <div class="text pl-3">
                        <span class="date">AUG 2018 - OCT 2018</span>
                        <h2>Full Stack Web Development Program</h2>
                        <span class="position">
                          Wyncode Academy - Miami, FL
                        </span>
                        <p>
                          Certificate of compeletion certified by Florida
                          Department of Education.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="resume-wrap d-flex">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas">
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </span>
                      </div>
                      <div class="text pl-3">
                        <span class="date">2002-2004</span>
                        <h2>Video Production Internship</h2>
                        <span class="position">
                          Stepstone Productions - St. Louis, MO
                        </span>
                        <p>
                          Certificate of compeletion certified by St. Louis
                          Agency on Training and Employment.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="resume-wrap d-flex">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas">
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </span>
                      </div>
                      <div class="text pl-3">
                        <span class="date">2002-2004</span>
                        <h2>A.S. Mass Communication</h2>
                        <span class="position">
                          St. Louis Community College
                        </span>
                      </div>
                    </div>
                  </div>

                  <div id="page-2" class="page two">
                    <h2 class="heading">Experience</h2>
                    <div class="resume-wrap d-flex">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas">
                          <FontAwesomeIcon icon={faCode} />
                        </span>
                      </div>
                      <div class="text pl-3">
                        <span class="date">AUG 2019 - PRESENT</span>
                        <h2>Web Developer</h2>
                        <span class="position">
                          1st Take Youth Film Program - Miami, Florida
                        </span>
                        <p>
                          Web Developer for non-profit organization dedicated to
                          teaching kids film production.
                        </p>
                        <li class="mt-2">
                          Responsibile for development of new full stack web
                          application using MongoDB, Express, React and Node to
                          register new applicants and share program related
                          information.{" "}
                        </li>
                        <li class="mt-2">
                          Designing and coding custom HTML emails for
                          clients/in-house newsletters and invitations for
                          distribution through mailchimp and campaign monitor.
                        </li>
                      </div>
                    </div>
                    <div class="resume-wrap d-flex">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas">
                          <FontAwesomeIcon icon={faPhotoVideo} />
                        </span>
                      </div>
                      <div class="text pl-3">
                        <span class="date">OCT 2017- AUG 2019</span>
                        <h2>Digital Media Producer</h2>
                        <span class="position">Florida Film House</span>
                        <p>
                          Digital Media Producer for commerical film production
                          company specializing in creating video content for
                          national businesses and brands.
                        </p>
                        <li class="mt-2">
                          Produced commericals and video interviews used for
                          social media advertisments and marketing campaigns for
                          the Urban Film Festival.{" "}
                        </li>
                        <li class="mt-2">
                          Performed audio and video editing services in order to
                          develop content from raw input into a polished,
                          professional, and compelling final product.
                        </li>
                      </div>
                    </div>
                    <div class="resume-wrap d-flex ">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas">
                          <FontAwesomeIcon icon={faFilm} />
                        </span>
                      </div>
                      <div class="text pl-3">
                        <span class="date">SEPT 2013-2016</span>
                        <h2>Videographer & Editor</h2>
                        <span class="position">
                          Rum Bum Film and HD Studios
                        </span>
                        <h6>Miami, Florida</h6>
                        <p>
                          Videographer & Editor for live shows, music videos,
                          independent films, sporting events and documentries on
                          over 500+ productions.
                        </p>

                        <li class="mt-2">
                          After Effects Editor for Fox Sports 3D experience at
                          the 2016 Daytona 500
                        </li>
                        <li class="mt-2">
                          On-Stage videographer during live stream broadcast of
                          the 2016 Three Points Music Festival in Miami, FL.
                        </li>
                      </div>
                    </div>
                    <div class="resume-wrap d-flex ">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas">
                          <FontAwesomeIcon icon={faPalette} />
                        </span>
                      </div>
                      <div class="text pl-3">
                        <span class="date">2007-2012</span>
                        <h2>Freelance Multimedia Artist</h2>
                        <span class="position">Independent Contractor</span>
                        <h6>Atlanta, GA / Miami, FL</h6>

                        <p>
                          Freelance Media artist working with business
                          professionals, small businesses and local brands
                          including lawyers, real estate agents, event
                          promoters, restaurants and local radio stations.
                        </p>
                        <li class="mt-2">
                          Communicated effectively with clients to develop
                          custom print advertisements and visual marketing
                          material.
                        </li>
                        <li class="mt-2">
                          Projects included logos, flyers, business cards,
                          brochures, website banners, page layouts and video
                          commericial and interviews for small amd local
                          businesses.
                        </li>
                        <li class="mt-2">
                          Maintained management skills coupled with my customer
                          service skills, for increased retention rate of
                          clients.
                        </li>
                      </div>
                    </div>
                    <div class="resume-wrap d-flex ">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </span>
                      </div>
                      <div class="text pl-3">
                        <span class="date">2004-2006</span>
                        <h2>Marketing Assistant</h2>
                        <span class="position">
                          The Palace Skating Rink and Family Entertainment
                          Center
                        </span>
                        <h6>St. Louis, MO</h6>
                        <p>
                          Marketing Assistant for popluar roller skating rink
                          known for hosting birthday parties, live events and
                          various family related activities.
                        </p>
                        <li class="mt-2">
                          Assisted in planning, designing and distribution of
                          marketing materials including flyers, posters and
                          brochures for all events and programs.
                        </li>
                        <li class="mt-2">
                          Created weekly database of attendees used for surveys
                          and marketing research.
                        </li>
                        <li class="mt-2">
                          Provided general administrative and organizational
                          support; such as faxing documents to clients, copying,
                          filing, responding to emails, answering directed calls
                          and ordering products and services related to specific
                          events.
                        </li>
                      </div>
                    </div>

                    <div class="resume-wrap d-flex ">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </span>
                      </div>
                      <div class="text pl-3">
                        <span class="date">2003-2004</span>
                        <h2>Radio Broadcasting Internship</h2>
                        <span class="position">
                          Clear Channel Communications - 100.3 The Beat
                        </span>
                        <h6>St. Louis, MO</h6>
                        <p>
                          Fall internship with local radio station 100.3 The
                          Beat. Learned and gained experience in broadcasting,
                          live production, marketing and promotions.
                        </p>
                        <li class="mt-2">
                          Assited with planning of promotional campagins to
                          connect with listeners and promote contests throughout
                          the community.
                        </li>

                        <li class="mt-2">
                          Perfomed office and administrative duties including,
                          answers phones, copying and filing paperwork
                        </li>

                        <li class="mt-2">
                          Responsible preparing scripts for on-air talent for
                          advertisements and providing the radio host with
                          reading and research material.
                        </li>
                      </div>
                    </div>
                  </div>
                  <div id="page-3" class="page three">
                    <h2 class="heading">Skills</h2>
                    <div>
                      <h6 style={styles}>Coding</h6>
                      <div class="row">
                        {" "}
                        <div class="col-md-6 ">
                          {" "}
                          <div class="progress-wrap">
                            <h3>HTML/CSS</h3>
                            <ProgressBar now={80} label={"80%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3>JavaScript</h3>
                            <ProgressBar now={73} label={"73%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3>Bootstrap</h3>
                            <ProgressBar now={80} label={"80%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3>React.Js</h3>
                            <ProgressBar now={70} label={"70%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3>Gatsby.Js</h3>
                            <ProgressBar now={78} label={"78%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3>Ruby on Rails</h3>
                            <ProgressBar now={67} label={"67%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3>Node.Js</h3>
                            <ProgressBar now={70} label={"75%"} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5">
                      <h6>Creative Skills</h6>
                      <div class="row">
                        {" "}
                        <div class="col-md-6 ">
                          {" "}
                          <div class="progress-wrap">
                            <h3> Video Production</h3>
                            <ProgressBar now={95} label={"95%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3> Graphic Design</h3>
                            <ProgressBar now={90} label={"95%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3>Motion Graphics</h3>
                            <ProgressBar now={78} label={"78%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3>Brochure & Page Layout</h3>
                            <ProgressBar now={90} label={"90%"} />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="progress-wrap">
                            <h3>Web Design</h3>
                            <ProgressBar now={88} label={"88%"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="page-4" class="page four">
                    <h2 class="heading">Expertise</h2>
                    <div class="row">
                      <div class="col-md-6 ">
                        <div class="resume-wrap d-flex ">
                          <div class="text ">
                            <p>
                              <span class="position"> Proven Ability</span> in
                              full stack web development, UX/UI design for web
                              applications, video production and graphic design
                              for marketing campaigns
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="resume-wrap d-flex ">
                          <div class="text ">
                            <p>
                              <span class="position"> In depth-knowledge</span>{" "}
                              in graphic design for creating visual idenity.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="resume-wrap d-flex ">
                          <div class="text ">
                            <p>
                              <span class="position">
                                {" "}
                                Comprehensive understanding and experience{" "}
                              </span>{" "}
                              in full stack web development, UX/UI design for
                              web applications, video production and graphic
                              design for marketing campaigns
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="resume-wrap d-flex ">
                          <div class="text ">
                            <p>
                              <span class="position"> Excellent</span> of full
                              stack web development, UX/UI design for web
                              applications, video production and graphic design
                              for marketing campaigns
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="resume-wrap d-flex ">
                          <div class="text ">
                            <p>
                              <span class="position"> Exceptional</span> of full
                              stack web development, UX/UI design for web
                              applications, video production and graphic design
                              for marketing campaigns
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a
              className="btn btn-light btn-xl"
              href="https://startbootstrap.com/themes/creative/"
            >
              Download Now!
            </a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Ready to start your next project with us? Give us a call or
                  send us an email and we will get back to you as soon as
                  possible!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+1 (202) 555-0149</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:contact@yourwebsite.com">
                  contact@yourwebsite.com
                </a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`