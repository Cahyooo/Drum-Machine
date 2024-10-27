import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const key = event.key.toUpperCase();
      const audio = document.querySelector(`#${key} audio`);
      const audioId = audio.id;
      getMessage(audioId);
      audio.currentTime = 0;
      audio.play();
    });
  }, []);

  const getMessage = (id) => {
    switch (id) {
      case "Q":
        setMessage("Closed HH");
        break;
      case "W":
        setMessage("Open HH");
        break;
      case "E":
        setMessage("Heater 1");
        break;
      case "A":
        setMessage("Heater 2");
        break;
      case "S":
        setMessage("Heater 3");
        break;
      case "D":
        setMessage("Heater 4");
        break;
      case "Z":
        setMessage("Clap");
        break;
      case "X":
        setMessage("Kick n Hat");
        break;
      case "C":
        setMessage("Kick");
        break;
    }
  };

  const handleAudio = (e) => {
    const id = e.currentTarget.id;
    const audio = document.querySelector(`#${id} audio`);
    const audioId = audio.id;
    getMessage(audioId);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <main
      id="drum-machine"
      className="position-absolute top-50 start-50 translate-middle"
    >
      <h1 className="text-center">Drum Machine</h1>
      <section id="display" className=" d-flex justify-content-around">
        <div>
          <div className="row">
            <div
              id="Q"
              className="drum-pad col text-center align-content-center"
              onClick={handleAudio}
            >
              Q<audio className="clip" id="Q" src="/Cev_H2.mp3"></audio>
            </div>
            <div
              id="W"
              className="drum-pad col text-center align-content-center"
              onClick={handleAudio}
            >
              W<audio className="clip" id="W" src="/Dsc_Oh.mp3"></audio>
            </div>
            <div
              id="E"
              className="drum-pad col text-center align-content-center"
              onClick={handleAudio}
            >
              E<audio className="clip" id="E" src="/Heater-1.mp3"></audio>
            </div>
          </div>
          <div className="row">
            <div
              id="A"
              className="drum-pad col text-center align-content-center"
              onClick={handleAudio}
            >
              A<audio className="clip" id="A" src="/Heater-2.mp3"></audio>
            </div>
            <div
              id="S"
              className="drum-pad col text-center align-content-center"
              onClick={handleAudio}
            >
              S<audio className="clip" id="S" src="/Heater-3.mp3"></audio>
            </div>
            <div
              id="D"
              className="drum-pad col text-center align-content-center"
              onClick={handleAudio}
            >
              D<audio className="clip" id="D" src="/Heater-4_1.mp3"></audio>
            </div>
          </div>
          <div className="row">
            <div
              id="Z"
              className="drum-pad col text-center align-content-center"
              onClick={handleAudio}
            >
              Z<audio className="clip" id="Z" src="/Heater-6.mp3"></audio>
            </div>
            <div
              id="X"
              className="drum-pad col text-center align-content-center"
              onClick={handleAudio}
            >
              X<audio className="clip" id="X" src="/Kick_n_Hat.mp3"></audio>
            </div>
            <div
              id="C"
              className="drum-pad col text-center align-content-center"
              onClick={handleAudio}
            >
              C<audio className="clip" id="C" src="/RP4_KICK_1.mp3"></audio>
            </div>
          </div>
        </div>
        <div className="message">
          <p className="message-p">{message}</p>
        </div>
      </section>
    </main>
  );
}

export default App;
