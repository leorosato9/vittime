import { useState } from "react";

export default function GameQuiz() {
  const scenarios = [
    {
      text: "Un incendio si sviluppa in un edificio abitato, con persone bloccate all’interno e strutture a rischio.",
      correct: "Vigili del Fuoco",
      explanation:
        "In situazioni di incendio e salvataggio tecnico è necessario un intervento specializzato per mettere in sicurezza persone e strutture. Questo compito spetta ai Vigili del Fuoco, formati per operare in condizioni estreme.",
      image: "/scontornato/pomscontornato.png",
      imageAlt: "Vigili del Fuoco",
    },
    {
      text: "In una zona periferica vengono segnalate attività sospette che richiedono un intervento rapido e una presenza costante sul territorio.",
      correct: "Arma dei Carabinieri",
      explanation:
        "Il controllo del territorio e gli interventi di prossimità rientrano nelle competenze dell’Arma dei Carabinieri, che garantisce una presenza diffusa e continua sul territorio nazionale.",
      image: "/scontornato/carscontornato.png",
      imageAlt: "Arma dei Carabinieri",
    },
    {
      text: "Vengono scoperti traffici illegali e frodi che causano gravi danni all’economia dello Stato.",
      correct: "Guardia di Finanza",
      explanation:
        "La Guardia di Finanza è specializzata nel contrasto ai reati economici e finanziari. Il suo intervento tutela la legalità economica e le risorse pubbliche.",
      image: "/scontornato/finscontornato.jpg",
      imageAlt: "Guardia di Finanza",
    },
    {
      text: "Un velivolo civile è in difficoltà e necessita di supporto aereo immediato per la sicurezza dello spazio aereo e delle persone a bordo.",
      correct: "Aeronautica Militare",
      explanation:
        "La sicurezza dello spazio aereo e le operazioni di supporto ai velivoli in emergenza sono affidate all’Aeronautica Militare.",
      image: "/scontornato/aerscontornato.avif",
      imageAlt: "Aeronautica Militare",
    },
  ];

  const options = [
    "Vigili del Fuoco",
    "Arma dei Carabinieri",
    "Guardia di Finanza",
    "Aeronautica Militare",
  ];

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const current = scenarios[index];

  const handleSelect = (opt) => {
    setSelected(opt);
    setShowExplanation(true);
  };

  const next = () => {
    setSelected(null);
    setShowExplanation(false);
    setIndex((i) => i + 1);
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setShowExplanation(false);
  };

  return (
    <div className={`GameLayout ${showExplanation ? "isRevealed" : ""}`}>
      <div className="GameLeft">
        <p className="GameScenarioText">{current.text}</p>

        <div className="GameOptions">
          {options.map((opt) => {
            let cls = "";

            if (showExplanation) {
              if (opt === current.correct) cls = "correct";
              else if (opt === selected) cls = "wrong";
              else cls = "idle";
            }

            return (
              <button
                key={opt}
                className={`GameOption ${cls}`}
                onClick={() => handleSelect(opt)}
                disabled={showExplanation}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="GameExplanation">
            <p>{current.explanation}</p>

            <button
              className="GameNext"
              onClick={index < scenarios.length - 1 ? next : restart}
            >
              {index < scenarios.length - 1 ? "Prossimo" : "Ricomincia"}
            </button>
          </div>
        )}
      </div>

      {showExplanation && current.image && (
        <div className="GameRight">
          <img className="GameRevealImage" src={current.image} alt={current.imageAlt || ""} />
        </div>
      )}
    </div>
  );
}
