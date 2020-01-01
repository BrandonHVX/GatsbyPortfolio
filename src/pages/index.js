import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image from "../components/image"
import Layout from "../components/layout"
import JobsNowModal from "../components/projects/jobsnow"
import SalonModal from "../components/projects/salon"
import VibesModal from "../components/projects/vibesvideo"
import BandsModal from "../components/projects/bands"
import NyxModal from "../components/projects/nyx"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import ae from "../images/ae.svg"
import ps from "../images/ps.svg"
import ai from "../images/ai.svg"
import gd from "../images/gd.png"
import filmvideo from "../images/filmvideo.png"
import code from "../images/code.png"
import motionplay from "../images/motionplay.png"
import xd from "../images/xd.svg"
import brandonpic from "../images/BrandonPic.jpg"
import pr from "../images/Pr.svg"
import jobsnowlogo from "../images/JOBSNOW.png"
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
import red from "../images/redcam-png.png"
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
  Badge,
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
        <div>
          <SEO title="Home" />

          <section className="page-section-about mt-5" id="about">


            <div class="about-card bg-white shadow mt-7">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <a href="#">
                      <img src={brandonpic} class="rounded-circle" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-header1  text-center mb-5"></div>
              <div class="text-center mt-5 mb-1">
                <h3>
                  Brandon Gines<span class="font-weight-light"></span>
                </h3>
                <div class="h6 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Miami, Florida
                          </div>
                <div class="h6 mt-2">
           brandongines@gmail.com
                          </div>
                <div>
                  <i class="ni education_hat mr-2"></i>
                Wyncode Academy
                          </div>
                <hr class="my-4" />


                <div class="sec-title text-center">
                  <span class="badge badge-pill badge-primary"><span class="badge"> <i class="fas fa-user"></i></span>About Me </span></div>

                <div class="about-text text-center p-4">
                  <p>
                    Creative self-motivated professional with
                    cross-functional skills including expertise in
                    digital media, video production, full stack web
                    development, graphic design, marketing, project
                    management and client engagement.
                            </p>
                </div>
              </div>

              <div class="card-body">
                
              
                    <div class="sec-title text-center">
                      <span class="badge badge-pill  badge-primary"><span class="badge"> <i class="fas fa-briefcase"></i></span>Career Objective</span></div>

                      <div class="about-text text-center p-1">
                  <p>
                    Creative self-motivated professional with
                    cross-functional skills including expertise in
                    digital media, video production, full stack web
                    development, graphic design, marketing, project
                    management and client engagement.
                            </p>
                </div>
                

              </div>

              <div class="main-content">
                <div class="container ">
                  <div class="row">
                    <div class="col">
                      <div class="text-center  pt-5">
                      <div class="sec-title text-center">
                      <span class="badge badge-pill  badge-primary"><span class="badge"> <i class="fas fa-laptop"></i></span>Skills & Software</span></div>

                        <div class="row justify-content-center ">
                          <div class="col-lg-3 order-lg-2"></div>
                        </div>

                        <div class="row p-2 ">
                          <div class="col-md-6 text-center d-flex mt-5 ">
                            <label>
                              <input type="checkbox" />
                              <div class="box shadow">
                                <div class="front">
                                  <div class=" profile-card-3 h-100">
                                    <div class="background-block">
                                      <img
                                        src=" https://blog.addpipe.com/content/images/size/w700h329/2019/02/html-and-javascript-code-shown-in-editor-on-screen.jpg"
                                        alt="profile-sample1"
                                        class="background"
                                      />
                                    </div>

                                    <div class="card-content">
                                      <img
                                        src={code}
                                        alt="profile-image"
                                        class="profile"
                                      />

                                      <h5>
                                        FULL STACK WEB DEVELOPMENT
                                                </h5>
                                      <div class="icon-block mt-3">
                                        <p>
                                          <span class="mr-2">
                                            <img
                                              src={mongo}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={ex}
                                              width={80}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={reactsvg}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={node}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="back">
                                  <div class="card-header">
                               FULL STACK WEB DEVELOPMENT
                                  </div>

                                  <div class="row mt-4 pl-3 pr-3">
                                    <div class="col">
                                      <span class="progress-title">
                                        Skill Level{" "}
                                        <ProgressBar
                                          animated
                                          now={75}
                                          label={"75%"}
                                        />
                                      </span>
                                    </div>
                                    <div class="col">
                                    <span class="progress-title">
                                       Experience
                                        <ProgressBar
                                        
                                          now={100}
                                          label={"2 years"}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div class="icon-block mt-3">
                                        <p>
                                          <span class="mr-2">
                                            <img
                                              src={mongo}
                                              width={35}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-3">
                                            <img
                                              src={ex}
                                              width={65}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={node}
                                              width={34}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={reactsvg}
                                              width={34}
                                              alt=""
                                            />
                                          </span>
                                        </p>
                                      </div>
                                  <div class="icon-block mt-3 p-1">
                                
                                  MongoDB, Node.js, Express.js, React.js, HTML, CSS, SASS
                      and Bootstrap for developing full-stack web applications
                      using JavaScript excution environments for both client and
                      server-side rendering.
                                  </div>
                      
                                
                                  
                                   
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="col-md-6 text-center d-flex mt-5">
                            <label>
                              <input type="checkbox" />
                              <div class="box shadow">
                                <div class="front">
                                  <div class=" profile-card-3 h-100">
                                    <div class="background-block">
                                      <img
                                        src=" https://blog.addpipe.com/content/images/size/w700h329/2019/02/html-and-javascript-code-shown-in-editor-on-screen.jpg"
                                        alt="profile-sample1"
                                        class="background"
                                      />
                                    </div>

                                    <div class="card-content">
                                      <img
                                        src={filmvideo}
                                        alt="profile-image"
                                        class="profile"
                                      />

                                      <h5>FILM & VIDEO PRODUCTION</h5>
                                      <div class="icon-block mt-3">
                                        <p>
                                          <span class="mr-2">
                                            <img
                                              src={pr}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={ae}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={finalcut}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="back">
                                  <div class="card-header">
                                 FILM & VIDEO PRODUCTION
                                  </div>

                                  <div class="row mt-4 pl-3 pr-3">
                                    <div class="col">
                                      <span class="progress-title">
                                        Skill Level{" "}
                                        <ProgressBar
                                          animated
                                          now={94}
                                          label={"94%"}
                                        />
                                      </span>
                                    </div>
                                    <div class="col">
                                    <span class="progress-title">
                                       Experience
                                        <ProgressBar
                                        
                                          now={100}
                                          label={"10+ years"}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div class="icon-block mt-3">
                                        <p>
                                          <span class="mr-2">
                                            <img
                                              src={pr}
                                              width={30}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={ae}
                                              width={30}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={finalcut}
                                              width={36}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={red}
                                              width={36}
                                              alt=""
                                            />
                                          </span>
                                        </p>
                                      </div>
                                  <div class="icon-block mt-3">
                                  Adobe Premreie Pro, Affter Effects
                                    and Final Cut Pro for video
                                    editing, motion graphics and
                                    finalizing content for
                                    commericials, social media content, webisodes and company
                                    interviews. High difinition 4K-8K
                                    digital content captured with Red
                                    Digital Cinema Cameras.
                                  </div>
                      
                                
                                  
                                   
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="col-md-6 text-center d-flex mt-5">
                            <label>
                              <input type="checkbox" />
                              <div class="box shadow h-100">
                                <div class="front">
                                  <div class=" profile-card-3">
                                    <div class="background-block">
                                      <img
                                        src=" https://blog.addpipe.com/content/images/size/w700h329/2019/02/html-and-javascript-code-shown-in-editor-on-screen.jpg"
                                        alt="profile-sample1"
                                        class="background"
                                      />
                                    </div>

                                    <div class="card-content">
                                      <img
                                        src={filmvideo}
                                        alt="profile-image"
                                        class="profile"
                                      />

                                      <h5>MOTION GRAPHICS</h5>
                                      <div class="icon-block mt-3">
                                        
                                          <span class="mr-2">
                                            <img
                                              src={ae}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={ps}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={ai}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                      
                                        
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="back">
                                  <div class="card-header">
                                  MOTION GRAPHICS
                                  </div>

                                  <div class="row mt-4 pl-3 pr-3">
                                    <div class="col">
                                      <span class="progress-title">
                                        Skill Level{" "}
                                        <ProgressBar
                                          animated
                                          now={80}
                                          label={"80%"}
                                        />
                                      </span>
                                    </div>
                                    <div class="col">
                                    <span class="progress-title">
                                       Experience
                                        <ProgressBar
                                        
                                          now={100}
                                          label={"4 years"}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div class="icon-block mt-3">
                                        <p>
                                          <span class="mr-2">
                                            <img
                                              src={ae}
                                              width={30}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={ps}
                                              width={30}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={ai}
                                              width={30}
                                              alt=""
                                            />
                                          </span>
                                    
                                        </p>
                                      </div>
                                  <div class="icon-block mt-3">
                                  Adobe Affer Effects, Photoshop and Illustrator used to
                      design, create and animate text, titles, graphics and
                      vector elements used to enhance commericalized video
                      content.
                                  </div>
                      
                                
                                  
                                   
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="col-md-6 text-center d-flex mt-5">
                            <label>
                              <input type="checkbox" />
                              <div class="box shadow pb-5">
                                <div class="front">
                                  <div class=" profile-card-3">
                                    <div class="background-block">
                                      <img
                                        src=" https://blog.addpipe.com/content/images/size/w700h329/2019/02/html-and-javascript-code-shown-in-editor-on-screen.jpg"
                                        alt="profile-sample1"
                                        class="background"
                                      />
                                    </div>

                                    <div class="card-content">
                                      <img
                                        src={filmvideo}
                                        alt="profile-image"
                                        class="profile"
                                      />

                                      <h5>GRAPHIC DESIGN</h5>
                                      <div class="icon-block mt-3">
                                        <p>
                                          <span class="mr-2">
                                            <img
                                              src={ps}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={ai}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={xd}
                                              width={40}
                                              alt=""
                                            />
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                            
                                <div class="back">
                                  <div class="card-header">
                                  GRAPHIC DESIGN
                                  </div>






                                  <div class="row mt-4 pl-3 pr-3">
                                    <div class="col">
                                      <span class="progress-title">
                                        Skill Level{" "}
                                        <ProgressBar
                                          animated
                                          now={95}
                                          label={"95%"}
                                        />
                                      </span>
                                    </div>
                                    <div class="col">
                                    <span class="progress-title">
                                       Experience
                                        <ProgressBar
                                        
                                          now={100}
                                          label={"10 years"}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div class="icon-block mt-3">
                                        <p>
                                          <span class="mr-2">
                                            <img
                                              src={ps}
                                              width={30}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={ai}
                                              width={30}
                                              alt=""
                                            />
                                          </span>
                                          <span class="mr-2">
                                            <img
                                              src={xd}
                                              width={30}
                                              alt=""
                                            />
                                          </span>
                                      
                                        </p>
                                      </div>
                                  <div class="icon-block mt-3">
                                  Adobe Photoshop, Illustrator and XD used to design
                      stunning graphics, vector logos, print, web and moblie
                      media layouts for social media advertisements marketing
                      campagins and interactive websites.
                                  </div>
                      
                                
                                  
                                   
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </section>

          <section className="page-section-projects mb-5" id="portfolio">
            <div class="skills-card bg-white shadow">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2"></div>
              </div>
              <div class="sec-title text-center">
                      <span class="badge badge-pill  badge-primary"><span class="badge"> <i class="fas fa-laptop"></i></span>Projects</span></div>

              <div>
                <Tab.Container defaultActiveKey="first">
                  <Nav variant="pills" style={navtabs}>
                    <Nav.Item>
                      <Nav.Link eventKey="first">WEB DEVELOPMENT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">VIDEO PR0DUCTION</Nav.Link>
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
                        <div>
                          <div className="row gutters">
                            <div className="col-lg-6 col-md-6">
                              <div className="col">
                                <div class="cards">
                                  <div class="arrow-right">
                                    <JobsNowModal />
                                  </div>

                                  <h4 class="pg-title">JOBS NOW</h4>
                                  <p class="pg-text">
                                    Career Networking web application.
                                  </p>

                                  <div class="pic">
                                    <Img
                                      fluid={
                                        this.props.data.images.edges[1].node
                                          .childImageSharp.fluid
                                      }
                                    />
                                  </div>

                                  <div class="social">
                                    <i class="fab fa-react"></i>
                                    <i class="fab fa-js"></i>
                                    <i class="fab fa-node"></i>
                                    <i class="fab fa-bootstrap"></i>
                                  </div>

                                  <button></button>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="col">
                                <div class="cards">
                                  <div class="arrow-right">
                                    <NyxModal />
                                  </div>
                                  <h4 class="pg-title">NYX NEWS</h4>
                                  <p class="pg-text">
                                    Career Networking web application.
                                  </p>
                                  <div class="pic">
                                    <Img
                                      fluid={
                                        this.props.data.images.edges[2].node
                                          .childImageSharp.fluid
                                      }
                                    />
                                  </div>

                                  <div class="social">
                                    <i class="fab fa-react"></i>
                                    <i class="fab fa-js"></i>
                                    <i class="fab fa-node"></i>
                                    <i class="fab fa-bootstrap"></i>
                                  </div>
                                  <button></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <section id="portfolio">
                        <div>
                          <div className="row gutters">
                            <div className="col-lg-6 col-md-6">
                              <div className="col">
                                <div class="cards">
                                  <div class="arrow-right">
                                    <BandsModal />
                                  </div>

                                  <h5 class="pg-title">Taylor Alexandria</h5>
                                  <p class="pg-text">
                                    Company Profile and Interview
                                  </p>

                                  <div class="pic">
                                    <Img
                                      fluid={
                                        this.props.data.images.edges[4].node
                                          .childImageSharp.fluid
                                      }
                                    />
                                  </div>
                             
                                  <div class="social">
                                    <i class="fas fa-film"></i>{" "}
                                    <i class="fab fa-adobe"></i>
                                    <i class="fas fa-desktop"></i>
                                  </div>

                                  <button></button>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="col">
                                <div class="cards">
                                  <div class="arrow-right">
                                    <VibesModal />
                                  </div>
                                  <h5 class="pg-title">Vibes and Views</h5>
                                  <p class="pg-text">
                                    Reality Television Pilot
                                  </p>
                                  <div class="pic">
                                    <Img
                                      fluid={
                                        this.props.data.images.edges[3].node
                                          .childImageSharp.fluid
                                      }
                                    />
                                  </div>
                                  
                                  <div class="social">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-github"></i>
                                  </div>
                                  <button></button>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="col">
                                <div class="cards">
                                  <div class="arrow-right">
                                    <SalonModal />
                                  </div>
                                  <h4 class="pg-title">Solatto Salon</h4>
                                  <p class="pg-text">
                                    Company Profile and Interview{" "}
                                  </p>
                                  <div class="pic">
                                    <Img
                                      fluid={
                                        this.props.data.images.edges[5].node
                                          .childImageSharp.fluid
                                      }
                                    />
                                  </div>
                              
                                  <div class="social">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-github"></i>
                                  </div>
                                  <button></button>
                                </div>
                              </div>
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
                                onClick={this.handlePortfolioClick.bind(
                                  this,
                                  6
                                )}
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
                                onClick={this.handlePortfolioClick.bind(
                                  this,
                                  0
                                )}
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
                                  <div className="project-name">
                                    Project Name
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                              <a
                                className="portfolio-box"
                                href="img/portfolio/fullsize/6.jpg"
                                onClick={this.handlePortfolioClick.bind(
                                  this,
                                  6
                                )}
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
                                  <div className="project-name">
                                    Project Name
                                  </div>
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
                                onClick={this.handlePortfolioClick.bind(
                                  this,
                                  9
                                )}
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
                                onClick={this.handlePortfolioClick.bind(
                                  this,
                                  7
                                )}
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
                                  <div className="project-name">
                                    Project Name
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-6 col-sm-6 mt-4">
                              <a
                                className="portfolio-box"
                                href="img/portfolio/fullsize/6.jpg"
                                onClick={this.handlePortfolioClick.bind(
                                  this,
                                  8
                                )}
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
                                  <div className="project-name">
                                    Project Name
                                  </div>
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
            </div>
          </section>

          <section>
            <section class="page-section-resume" id="resume">
              <div class="container">
                <div class="text-center mt-5 mb-5">
                  <h2>
                    <Badge pill variant="secondary">
                      {" "}
                      RESUME
                  </Badge>
                  </h2>
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

                      <div class="timeline-arrow"></div>

                      <div class="resume-wrap  d-flex">
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
                            Web Developer for non-profit organization dedicated
                            to teaching kids film production.
                          </p>
                          <li class="mt-2">
                            Responsibile for development of new full stack web
                            application using MongoDB, Express, React and Node
                            to register new applicants and share program related
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
                            <FontAwesomeIcon icon={faFilm} />
                          </span>
                        </div>
                        <div class="text pl-3">
                          <span class="date">OCT 2017- AUG 2019</span>
                          <h2>Digital Media Producer</h2>
                          <span class="position">Florida Film House</span>
                          <p class="bg-white">
                            Digital Media Producer for commerical film
                            production company specializing in creating video
                            content for national businesses and brands.
                          </p>
                          <li class="mt-2">
                            Produced commericals and video interviews used for
                            social media advertisments and marketing campaigns
                            for the Urban Film Festival.{" "}
                          </li>
                          <li class="mt-2">
                            Performed audio and video editing services in order
                            to develop content from raw input into a polished,
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
                            independent films, sporting events and documentries
                            on over 500+ productions.
                          </p>

                          <li class="mt-2">
                            After Effects Editor for Fox Sports 3D experience at
                            the 2016 Daytona 500
                          </li>
                          <li class="mt-2">
                            On-Stage videographer during live stream broadcast
                            of the 2016 Three Points Music Festival in Miami,
                            FL.
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
                            Maintained management skills coupled with my
                            customer service skills, for increased retention
                            rate of clients.
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
                            Created weekly database of attendees used for
                            surveys and marketing research.
                          </li>
                          <li class="mt-2">
                            Provided general administrative and organizational
                            support; such as faxing documents to clients,
                            copying, filing, responding to emails, answering
                            directed calls and ordering products and services
                            related to specific events.
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
                            connect with listeners and promote contests
                            throughout the community.
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
                      <div class="mt-5">
                      <h6 class="heading-mini text-center">FULL STACK WEB DEVELOPMENT</h6>
                        <div class="row mt-3">
                          {" "}
                          <div class="col-md-6 ">
                            {" "}
                            <div class="progress-wrap">

<div class="row">
<div class="col">
<h6>HTML/CSS</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div> </div>
                          </div>
                          <div class="col-md-6 ">
                            <div class="progress-wrap">
                            
<div class="row">
<div class="col">
<h6>JAVASCRIPT</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div>
                            </div>
                          </div>
                          <div class="col-md-6 ">
                            <div class="progress-wrap">
                            
<div class="row">
<div class="col">
<h6>REACT.JS</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div>
                            </div>
                          </div>
                          <div class="col-md-6 ">
                            
                          <div class="progress-wrap">
                            
                            <div class="row">
                            <div class="col">
                            <h6>NODE.JS</h6>
                            </div>
                            <div class="col">
                            <ProgressBar now={80} label={"80%"} />
                            </div>
                            </div>
                                                        </div>
                          </div>
                          <div class="col-md-6 ">
                          <div class="progress-wrap">
                            
                            <div class="row">
                            <div class="col">
                            <h6>SQL</h6>
                            </div>
                            <div class="col">
                            <ProgressBar now={80} label={"80%"} />
                            </div>
                            </div>
                                                        </div>
                          </div>
                          <div class="col-md-6 ">
                          <div class="progress-wrap">
                            
                            <div class="row">
                            <div class="col">
                            <h6>RUBY ON RAILS</h6>
                            </div>
                            <div class="col">
                            <ProgressBar now={80} label={"80%"} />
                            </div>
                            </div>
                                                        </div>
                          </div>
                     
                        </div>
                      </div>
             


                      <div class="mt-5">
                      <h6 class="heading-mini text-center">VIDEO PRODUCTION</h6>
                        <div class="row mt-3">
                          {" "}
                          <div class="col-md-6 ">
                            {" "}
                            <div class="progress-wrap">

<div class="row">
<div class="col">
<h6>HTML/CSS</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div> </div>
                          </div>
                          <div class="col-md-6 ">
                            <div class="progress-wrap">
                            
<div class="row">
<div class="col">
<h6>JAVASCRIPT</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div>
                            </div>
                          </div>
                          <div class="col-md-6 ">
                            <div class="progress-wrap">
                            
<div class="row">
<div class="col">
<h6>REACT.JS</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div>
                            </div>
                          </div>
                          <div class="col-md-6 ">
                            
                          <div class="progress-wrap">
                            
                            <div class="row">
                            <div class="col">
                            <h6>NODE.JS</h6>
                            </div>
                            <div class="col">
                            <ProgressBar now={80} label={"80%"} />
                            </div>
                            </div>
                                                        </div>
                          </div>
                          <div class="col-md-6 ">
                          <div class="progress-wrap">
                            
                            <div class="row">
                            <div class="col">
                            <h6>SQL</h6>
                            </div>
                            <div class="col">
                            <ProgressBar now={80} label={"80%"} />
                            </div>
                            </div>
                                                        </div>
                          </div>
                          <div class="col-md-6 ">
                          <div class="progress-wrap">
                            
                            <div class="row">
                            <div class="col">
                            <h6>RUBY ON RAILS</h6>
                            </div>
                            <div class="col">
                            <ProgressBar now={80} label={"80%"} />
                            </div>
                            </div>
                                                        </div>
                          </div>
                     
                        </div>
                      </div>
             

                      <div class="mt-5">
                      <h6 class="heading-mini text-center">GRAPHIC DESIGN</h6>
                        <div class="row mt-3 ">
                          {" "}
                          <div class="col-md-6 ">
                            {" "}
                            <div class="progress-wrap">

<div class="row">
<div class="col">
<h6>HTML/CSS</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div> </div>
                          </div>
                          <div class="col-md-6 ">
                            <div class="progress-wrap">
                            
<div class="row">
<div class="col">
<h6>JAVASCRIPT</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div>
                            </div>
                          </div>
                          <div class="col-md-6 ">
                            <div class="progress-wrap">
                            
<div class="row">
<div class="col">
<h6>REACT.JS</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div>
                            </div>
                          </div>
                          <div class="col-md-6 ">
                            
                          <div class="progress-wrap">
                            
                            <div class="row">
                            <div class="col">
                            <h6>NODE.JS</h6>
                            </div>
                            <div class="col">
                            <ProgressBar now={80} label={"80%"} />
                            </div>
                            </div>
                                                        </div>
                          </div>
                          <div class="col-md-6 ">
                          <div class="progress-wrap">
                            
                            <div class="row">
                            <div class="col">
                            <h6>SQL</h6>
                            </div>
                            <div class="col">
                            <ProgressBar now={80} label={"80%"} />
                            </div>
                            </div>
                                                        </div>
                          </div>
                          <div class="col-md-6 ">
                          <div class="progress-wrap">
                            
                            <div class="row">
                            <div class="col">
                            <h6>RUBY ON RAILS</h6>
                            </div>
                            <div class="col">
                            <ProgressBar now={80} label={"80%"} />
                            </div>
                            </div>
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
                                <span class="position">
                                  {" "}
                                  In depth-knowledge
                                </span>{" "}
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
                                                       
<div class="row">
<div class="col">
<h6>REACT.JS</h6>
</div>
<div class="col">
<ProgressBar now={80} label={"80%"} />
</div>
</div>
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
                                applications, video production and graphic
                                design for marketing campaigns
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="resume-wrap d-flex ">
                            <div class="text ">
                              <p>
                                <span class="position"> Exceptional</span> of
                                full stack web development, UX/UI design for web
                                applications, video production and graphic
                                design for marketing campaigns
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
        </div>
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
