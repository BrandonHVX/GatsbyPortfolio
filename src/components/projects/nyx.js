import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import bootstrap from "../../images/bootstrap.svg"
import bgheader from "../../images/slide-4.jpg"
import node from "../../images/node.svg"
import vue from "../../images/vuejs.svg"
import reactsvg from "../../images/react.svg"
import ex from "../../images/ex.png"
import nyt from "../../images/nyt.png"
import redcam from "../../images/redcam-png.png"
import mongo from "../../images/mongo.png"
import mui from "../../images/mui.png"
import nyxlogo from "../../images/nyxlogo.png"

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
import { faArrowAltCircleRight } from "@fortawesome/react-fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
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

const NyxImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "2.jpg" }) {
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

function Nyx(props) {
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
            NYX NEWS
          </h2>
        </Modal.Title>
      </Modal.Header>

      <div class="text-white " style={{ backgroundColor: "#00000072" }}>
        <div class="container"></div>
      </div>

      <Modal.Body style={{ color: "white", backgroundColor: "#00000072" }}>
        <div>
          <NyxImage />

          <div class="project-page">
            <div class="page-holder">
              <section class="hero">
                <div class="container">
                  <div id="page-3" class="page three">
                    <p class="lead mt-5 font-weight-light">
                      NYX NEWS is the new way to get your daily top stories. Our
                      platform is designed to display your favorite sections of
                      the New York Times upon request.
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
                              <i class="fa fa-gears"><img src={nyt} width={50} ></img></i>
                              <h4>New York Times API </h4>
                              <p>Ability for client and server-side commuincation
                            with the back-end server of the New York Times
                            website.</p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-8">

                            <div class="single-service">
                              <i class="fa fa-gears"><img src={ex} width={50} ></img></i>
                              <h4>Express</h4>
                              <p>      Javascript framework running on Node used for our
                            back-end server routes and communication with the API. </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-8">

                            <div class="single-service">
                              <i class="fa fa-gears"><img src={reactsvg} width={50} ></img></i>
                              <h4>React.Js</h4>
                              <p>Javascript libaray used to develop our user
                            interface and experience for front-end development. </p>
                            </div>
                          </div>

                          <div class="col-lg-6 col-md-8">

                            <div class="single-service">
                              <i class="fa fa-gears"><img src={bootstrap} width={50} ></img></i>
                              <h4>Bootstrap</h4>
                              <p> Based HTML and CSS use for our moblie responsive
                            layout, colors, buttons, forms, text and navigation
                            components.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                  </div>
                </div>
              </section>

              <section class="gallery" style={{ backgroundColor: "black" }}>
                <div class="container text-center">
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <img src={nyxlogo} width={300} />
                    </div>
                    <div class="col-lg-6 d-lg-block">
                      <div class="device-wrapper mx-auto">
                        <div
                          data-device="iPhone7-2"
                          data-orientation="portrait"
                          data-color="black"
                          class="device"
                        >
                          <div class="screen">

                          </div>
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
        <Button onClick={props.onHide}>View Site</Button>
      </Modal.Footer>
    </Modal>
  )
}

function NyxModal() {
  const [modalShowNyx, setModalShowNyx] = React.useState(false)

  return (
    <div>
      <a
        onClick={() => setModalShowNyx(true)}
        class="play-button"
      >
        {" "}
        View Project
      </a>
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        style={{
          marginLeft: "5px",
        }}
      />
      <Nyx show={modalShowNyx} onHide={() => setModalShowNyx(false)} />
    </div>
  )
}

export default class NyxNews extends Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShowNyx: false,
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
      modalShowNyx: isShown,
      modalCurrent: current,
    })
  }
  render() {
    return (
      <div>
        <NyxModal />
      </div>
    )
  }
}
