import { createUserContent, GoogleGenAI } from "@google/genai";
import { useRef, useState } from "react";
import "./gemini.scss";

// Importa a chave da API do Gemini do arquivo .env
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ID_PDF_REGULATION = import.meta.env.VITE_ID_PDF_REGULATION;
const ID_PDF_PROJECT_DESCRIPTION = import.meta.env
  .VITE_ID_PDF_PROJECT_DESCRIPTION;
const SYSTEM_INSTRUCTIONS = import.meta.env.VITE_SYSTEM_INSTRUCTIONS;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default function GeminiHelp() {
  const [userQuestion, setUserQuestion]: [string, (value: string) => void] =
    useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const askGemini = async () => {
    try {
      if (userQuestion.trim() === "") {
        alert("Preencha o campo com alguma pergunta");
        return;
      }
      setLoading(true);

      const pdfRegulation = {
        fileData: {
          mimeType: "application/pdf",
          fileUri: `https://generativelanguage.googleapis.com/v1beta/${ID_PDF_REGULATION}`,
        },
      };
      const pdfProjectDescription = {
        fileData: {
          mimeType: "application/pdf",
          fileUri: `https://generativelanguage.googleapis.com/v1beta/${ID_PDF_PROJECT_DESCRIPTION}`,
        },
      };

      const contents = [userQuestion, pdfRegulation, pdfProjectDescription];

      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [createUserContent(contents)],
        config: {
          systemInstruction: SYSTEM_INSTRUCTIONS,
        },
      });

      if (
        !!textAreaRef.current &&
        !!result.text &&
        result.text.length > textAreaRef.current?.scrollHeight
      ) {
        textAreaRef.current.value = result.text;
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      }

      setAiAnswer("");
      setLoading(false);
      setAiAnswer(result.text || "");
    } catch (e) {
      setLoading(false);
      console.error("Erro ao chamar a API do Gemini");
      console.error(e);
    }
  };

  return (
    <div className="container-gemini">
      <p className="title-section">Ajuda com o regulamento</p>

      <p className="subtitle">
        Tem alguma dúvida específica sobre o regulamento?
      </p>
      <p className="assistant-text">Pergunte ao nosso assistente! </p>

      <div className="container-ai">
        <div className="container-input-ai">
          <input
            readOnly={loading}
            className="input-ai"
            type="text"
            placeholder="Digite sua pergunta aqui..."
            onChange={(e) => setUserQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                askGemini();
              }
            }}
          />
          <button
            disabled={!userQuestion || loading}
            className="button-ai"
            onClick={(e) => askGemini()}>
            Enviar
          </button>
        </div>

        <div className="response-wrapper">
          <textarea
            ref={textAreaRef}
            value={aiAnswer}
            disabled
            placeholder="As respostas aparecerão aqui..."
            className={`ai-response-box ${loading ? "loading" : ""}`}
            name="answer-ai"
            id="answer-ai"></textarea>

          {loading && (
            <div
              className="loading-overlay"
              aria-live="polite"
              aria-label="Carregando resposta">
              <div className="loading-dots" role="img" aria-hidden>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
