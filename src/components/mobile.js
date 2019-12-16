import React from "react"

const LightContext = React.createContext()

const LightProvider = props => {
  const [lightOn, setLightOn] = React.useState(false)
  return (
    <LightContext.Provider value={{ lightOn, setLightOn }}>
      {props.children}
    </LightContext.Provider>
  )
}

const Room = () => {
  const { lightOn } = React.useContext(LightContext)
  return (
    <main id="room" className={lightOn ? "light" : "dark"}>
      <Lightbulb />
      <LightSwitch />
    </main>
  )
}

const Lightbulb = () => {
  const { lightOn } = React.useContext(LightContext)
  return (
    <img
      src="https://raw.githubusercontent.com/wyncode/gitpitch_react_hooks/master/assets/image/lightbulb.png"
      alt="lightbulb"
      id="lightbulb"
      className={lightOn ? "on" : "off"}
    />
  )
}

const LightSwitch = () => {
  const { lightOn, setLightOn } = React.useContext(LightContext)

  const flickTheSwitch = () => {
    setLightOn(!lightOn)
  }

  return (
    <button id="lightswitch" onClick={flickTheSwitch}>
      {lightOn ? "ON" : "OFF"}
    </button>
  )
}

function Mobile() {
  return (
    <LightProvider>
      <Room />
    </LightProvider>
  )
}

export default Mobile
