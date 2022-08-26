import {React,useCallback} from 'react';
import './App.css';
import Main from './components/Main';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function App() {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
    document.querySelector("#tsparticles canvas").style.zIndex = -10;
  }, []);

  const options = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "connect",
        },
        resize: true,
      },
      modes: {
        connect: {
          distance:	120,
	        links: {
            opacity	:	0.7
          },
          radius	:	200
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: {
          min: 1,
          max: 6
        },
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5
        },
        animation: {
          count: 0,
          enable: true,
          speed: 2,
          decay: 0,
          sync: false,
          destroy: 'none',
          startValue: 'random',
          minimumValue: 0.1
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true
  };

  return (
    <div>
      <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={options} />
      <Main />
    </div>
  );
}

export default App;
