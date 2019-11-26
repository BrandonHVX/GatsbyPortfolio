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

          <body>
            <div class="page-holder">
              <section class="hero">
                <div class="container">
                  <div id="page-3" class="page three">
                    <p class="lead mt-5 font-weight-light">
                      With Jobs Now you can create a career profile, post a job,
                      and like or comment on a post of your interest.
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

                    <div class="row  text-center">
                      <div class="col-lg-4">
                        <div class="features-item mb-5 mb-lg-0">
                          <div>
                            <img src={mongo} alt="" width={80} />
                          </div>
                          <h3 class="h5">MongoDB</h3>
                          <p>
                            NonSQL database for storing our users, profiles,
                            posts, likes and comment data.
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="features-item mb-5 mb-lg-0">
                          <div>
                            <img src={ex} alt="" width={175} />
                          </div>
                          <h3 class="h5">Express.Js</h3>
                          <p>
                            Javascript framework running on Node used for our
                            back-end server routes and communication with
                            MongooDB database.
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 mb-5">
                        <div class="features-item mb-5 mb-lg-0">
                          <div>
                            <img src={reactsvg} alt="" width={80} />
                          </div>
                          <h3 class="h5">React.Js</h3>
                          <p>
                            Javascript libaray used to develop our user
                            interface and experience for front-end development.
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="features-item mb-5 mb-lg-0">
                          <div>
                            <img src={node} alt="" width={80} />
                          </div>
                          <h3 class="h5">Node.Js</h3>
                          <p>
                            Javascript run-time environment for the server-side
                            execution of our web application.
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="features-item mb-5 mb-lg-0">
                          <div>
                            <img src={bootstrap} alt="" width={80} />
                          </div>
                          <h3 class="h5">Bootstrap</h3>
                          <p>
                            Based HTML and CSS use for our moblie responsive
                            layout, colors, buttons, forms, text and navigation
                            components.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="gallery" style={{ backgroundColor: "#050aab" }}>
                <div class="container text-center">
                  <div class="row align-items-center text-white">
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
                          data-device="iPhone7-2"
                          data-orientation="portrait"
                          data-color="black"
                          class="device"
                        >
                          <div class="screen">
                            <img alt="..." class="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </body>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ color: "white", backgroundColor: "#00000072" }}>
        <Button onClick={props.onHide}>View Site</Button>
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
        style={{
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
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
