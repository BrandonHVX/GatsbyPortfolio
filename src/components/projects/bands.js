import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"

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
        style={{ color: "#f4623a", backgroundColor: "#000000b7" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="text-uppercase text-white font-weight-bold">
            Vibes and Views
          </h2>
        </Modal.Title>
      </Modal.Header>
      <div class="text-white " style={{ backgroundColor: "#000000b7" }}>
        <div class="container"></div>
      </div>
      <Modal.Body style={{ color: "white", backgroundColor: "#000000b7" }}>
        <div class="d-flex justify-content-center  mb-3">
          <ReactPlayer url="https://youtu.be/FE5VhXSu3TU" playing />
        </div>
      </Modal.Body>

      <Modal.Footer
        style={{
          color: "white",
          backgroundColor: "#000000b7",
          fontSize: "0.9rem",
        }}
      >
        <div class="row gutters mb-3">
          <div class="col-sm-6 mb-3 text-main">
            <h4 class="heading-title">Description</h4>
            Company profile and Interview with Miami based Fashion
            Designer/Stylist Taylor Alexandria.
          </div>

          <div class="col-sm-6">
            <h4 class="heading-title">Production Credits</h4>
            <ul class="credits">
              <li>Producers: Ronnie Eith & Brandon Gines</li>
              <li>Director: Brandon Gines</li>
              <li>Editor/MotionFX: Brandon Gines</li>
              <li>Camera A Operator: Brandon Gines</li>
              <li>Camera B Operator: Ido Eyo</li>
              <li>Production Assistant: Kufray Eyo & Remy Jean</li>
              <li>Production Company: Florida Film House</li>
            </ul>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

function BandsModal() {
  const [modalShowNyx, setModalShowNyx] = React.useState(false)

  return (
    <div>
      <a
        onClick={() => setModalShowNyx(true)}
        style={{
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        {" "}
        Play Video
      </a>
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        style={{
          marginLeft: "5px",
        }}
      />
      <Bands show={modalShowNyx} onHide={() => setModalShowNyx(false)} />
    </div>
  )
}
export default class BandsTA extends Component {
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
        <BandsModal />
      </div>
    )
  }
}
