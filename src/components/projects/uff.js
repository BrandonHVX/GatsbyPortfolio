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

function Uff(props) {
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
                        Urban Film Festival
          </h2>
                </Modal.Title>
            </Modal.Header>
            <div class="text-white " style={{ backgroundColor: "#000000b7" }}>
                <div class="container"></div>
            </div>
            <Modal.Body style={{ color: "white", backgroundColor: "#000000b7" }}>
                <div class="d-flex justify-content-center  mb-3">
                    <ReactPlayer url="https://youtu.be/VhN88y_kKV8" playing />
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
                            <p class='mt-2'> Motion graphic animation use in marketing campaign for 2018 Urban Film Festival.  </p>

                        </div>
                        <div class="col-sm-6 md-6 text-center">
                            <div class="col-padding">
                                <span class="badge badge-pill  badge-primary">Production Credits</span>
                                <p class="credits mt-2">


                                    <li>Editor/MotionFX: Brandon Gines</li>


                                </p>
                            </div>
                        </div>


                    </div>

                </div>
            </Modal.Footer>
        </Modal>
    )
}

function UffModal() {
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
            <Uff show={modalShowNyx} onHide={() => setModalShowNyx(false)} />
        </div>
    )
}

export default class UffVideo extends Component {
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
                <UffModal />
            </div>
        )
    }
}