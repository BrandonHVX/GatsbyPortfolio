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
            Taylor Alexandria
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
          color: "black",
          backgroundColor: "#fff",
          fontSize: "0.9rem",
        }}
      >
        <div class="container">

          <div class="row">
            <div class="col-sm-6 md-4 text-center">

              <span class="badge badge-pill  badge-primary">Description</span>
              <p class='mt-2'>Interview with Miami based Fashion Designer Taylor Alexandria as she discucess her history, style and future plans for Bands by Taylor Alexandria.</p>

            </div>
            <div class="col-sm-6 md-6 text-center">
              <div class="col-padding">
                <span class="badge badge-pill  badge-primary">Production Credits</span>
                <p class="credits mt-2">

                  <li><strong>Producers:</strong>Ronnie Eith & Brandon Gines</li>
                  <li><strong>Director:</strong> Brandon Gines</li>
                  <li><strong>Editor:</strong> Brandon Gines</li>
                  <li><strong>Camera Operater:</strong> Ido Eyo</li>
                  <li><strong>Lighting/Grip:</strong> Kufray Eyo </li>
                  <li><strong>Audio Engineer:</strong> Steven Torres </li>
                  <li><strong>Production Asst.:</strong> Remy Jean</li>
                  <li><strong>Production Company:</strong> Florida Film House</li>

                </p>
              </div>
            </div>


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

        class='play-button'
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
