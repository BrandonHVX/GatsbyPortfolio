import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import bootstrap from "../../images/bootstrap.svg"
import bgheader from "../../images/slide-4.jpg"
import node from "../../images/node.svg"
import vue from "../../images/vuejs.svg"
import reactsvg from "../../images/react.svg"
import ex from "../../images/ex.png"
import redcam from "../../images/redcam-png.png"
import mongo from "../../images/mongo.png"
import mui from "../../images/mui.png"

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
import Scroller from "../../components/scroller"
import imacscreen from "../../images/imac-screen.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fabfaGitHub } from "@fortawesome/free-brands-svg-icons"

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
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

const JobsImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

function Jobs(props) {
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
        style={{ color: "#f4623a", backgroundColor: "#00000072" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="text-uppercase text-white font-weight-bold">
            Jobs Now
          </h2>
        </Modal.Title>
      </Modal.Header>

      <div class="text-white " style={{ backgroundColor: "#00000072" }}>
        <div class="container"></div>
      </div>

      <Modal.Body style={{ color: "white", backgroundColor: "#00000072" }}>
        <div>
          <JobsImage />

          <div class="project-page">
            <div class="page-holder">
              <section class="hero">
                <div class="container">
                  <div id="page-3" class="page three">
                    <p class="lead mt-5 font-weight-light">
                      Jobs Now is designed for career professionals in search for your next dream job. Sign up, create a profile, post jobs, like and comment on job postings.
                    </p>
                  </div>
                </div>
              </section>

              <section class="features">
                <div class="container">
                  <div id="page-3" class="page three">
                    <h2 class="heading" style={{ textAlign: "center" }}>
                      Technology
                    </h2>
                    <section class="services pt-100 pb-50 mt-4" id="services">
                      <div class="container">

                        <div class="row">
                          <div class="col-lg-6 col-md-8">
                            <div class="single-service">
                              <i class="fa fa-gears"><img src={mongo} width={40} ></img></i>
                              <h4>MongoDB </h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-8">

                            <div class="single-service">
                              <i class="fa fa-gears"><img src={ex} width={50} ></img></i>
                              <h4>Express</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-8">

                            <div class="single-service">
                              <i class="fa fa-gears"><img src={reactsvg} width={50} ></img></i>
                              <h4>React.Js</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-8">

                            <div class="single-service">
                              <i class="fa fa-gears"><img src={node} width={50} ></img></i>
                              <h4>Node.js</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-8">

                            <div class="single-service">
                              <i class="fa fa-gears"><img src={bootstrap} width={50} ></img></i>
                              <h4>Bootstrap</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-8">

                            <div class="single-service">
                              <i class="fa fa-gears"><img src={mui} width={40} ></img></i>
                              <h4>Material UI</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                  </div>
                </div>
              </section>

              <section class="gallery" style={{ backgroundColor: "blue" }}>
                <div class="container text-center">
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <h2 class="hero-heading">Moblie Responsive</h2>
                      <p class="lead mt-5 font-weight-light">
                        With ShowTrackr you can track your favorite TV shows
                        automatically, so you never loose track of your TV shows
                        ever again. 🍿
                      </p>
                    </div>
                    <div class="col-lg-6 d-lg-block">
                      <div class="device-wrapper mx-auto">
                        <div
                          data-device="iPhone7-3"
                          data-orientation="portrait"
                          data-color="black"
                          class="device"
                        >

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ color: "white", backgroundColor: "#00000072" }}>
        <Button onClick={props.onHide}>Git Hub</Button><Button onClick={props.onHide}>View Site</Button>
      </Modal.Footer>
    </Modal>
  )
}

function JobsModal() {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <div>
      <a
        onClick={() => setModalShow(true)}
        class="play-button"
      >
        {" "}
        View Project
      </a>

      <Jobs show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default class Jobsnow extends Component {
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
      <div>
        <JobsModal />
      </div>
    )
  }
}
