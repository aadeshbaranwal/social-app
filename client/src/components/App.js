import React, { Component } from 'react';

import AppWithRouter from './AppWithRouter';
import './App.css'
import Particles from "react-tsparticles";

class App extends Component {
  render() {
    return (
        <div>
            <AppWithRouter />
            <Particles
              id="tsparticles"
              options={{
                background: {
                  color: {
                    value: "rgb(255 255 255)",
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: false,
                      mode: "push",
                    },
                    onHover: {
                      enable: false,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 100,
                      duration: 1.8,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#3f51b5",
                  },
                  links: {
                    color: "#3f51b5",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 0.1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 3,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                    value: 100,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
            />
        </div>
    );
  }
}

// const App = () => <AppWithRouter />;

export default App;
