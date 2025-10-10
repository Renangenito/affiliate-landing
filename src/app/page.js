"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && typeof fbq !== "undefined") {
          fbq("track", "Lead", { email });
        }
      } else {
        alert("Erro ao enviar e-mail, tente novamente.");
      }
    } catch (err) {
      console.error(err);
      alert("Falha na conexão.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundColor: "#ffdce8ff",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "200px",
      }}
    >
      <div className="text-[#d64d87] mb-4 flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full w-fit text-sm">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>Site 100% Seguro</span>
      </div>

      {/* Header */}
      <header className="text-center mb-12 bg-[#ffdce8ff]">
        <div className=" w-24 h-24 md:w-50 md:h-50 rounded-full mx-auto mb-4 border-4 border-[#d64d87] overflow-hidden">
          <img
            src="/cronograma_capilar_fashion_gold.png"
            alt="Foto de perfil da pessoa mulher afiliada"
            className="w-24 h-24 md:w-50 md:h-50  object-cover object-center"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#d64d87] flex flex-col h-24">
        Cronograma Capilar 
          <span className="md:ml-75 text-base underline">Fashion Gold</span>
        </h1>
        <section className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full border border-l-8 border-r-8 border-[#d64d87]">
          <h2 className=" text-2xl font-semibold mb-4 text-[#d64d87]">
            Quais os benefícios do Cronograma?
          </h2>
          <img
            src="/cronograma_capilar_fashion_gold.png"
            alt="Imagem da embalagem do produto Tônico poderoso"
            className="w-72 h-70 md:w-80 md:h-70 object-cover object-center"
          />
          <p className="text-xl text-black max-w-2xl mx-auto">
            Recupera, fortalece e acelera o crescimento dos fios. Ideal para
            mulheres que querem cabelos mais{" "}
            <strong>fortes, longos e saudáveis✨</strong>.
          </p>
        </section>
      </header>

      {/* Benefícios */}
      <section className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full mb-13 border border-l-8 border-r-8 border-[#e15e31]">
        <h2 className="text-2xl font-semibold mb-4 text-[#e15e31]">
          Por que escolher o Cronograma Fashion Gold?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl">
          <li>✅ Estimula o crescimento acelerado dos fios</li>
          <li>✅ Reduz a queda e fortalece a raiz</li>
          <li>✅ Fórmula natural, dermatologicamente testada</li>
          <li>✅ Resultados visíveis em poucas semanas</li>
        </ul>
      </section>

      {/* Depoimentos */}
      <section className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full mb-8 border border-l-8 border-r-8 border-[#d64d87]">
        <h2 className="text-2xl font-semibold mb-4 text-[#d64d87]">
          Mulheres reais, resultados reais
        </h2>
        <div className="space-y-4 text-gray-700 italic">
          <img
            src="/"
            alt="Depoimentos de possas reais em print"
            className="mx-auto mb-4 border-4 border-[#d64d87] rounded-2xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border border-[#FFFFFF] bg-[#4c62a8] p-8 rounded-2xl shadow-lg max-w-xl w-full text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Garanta já o seu!</h2>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-lg w-full text-black border-white placeholder-white"
              required
            />

            <button
              type="submit"
              className="bg-[#d64d87] text-white font-semibold p-3 rounded-lg cursor-pointer hover:bg-emerald-500 transition"
            >
              Quero Receber o Link de Compra
            </button>
          </form>
        )}

        {submitted && (
          <a
            href="https://pay.goold.club/aff/R841JA/V151TAGR"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black font-bold p-3 rounded-lg hover:bg-yellow-500 transition inline-block w-full text-center mt-4"
            onClick={() => {
              if (
                typeof window !== "undefined" &&
                typeof fbq !== "undefined"
              ) {
                fbq("track", "Purchase");
              }
            }}
          >
            Ir para a Loja Oficial
          </a>
        )}
      </section>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5511943887334?text=Ol%C3%A1%2C%20quero%20mais%20informações%20sobre%20o%20t%C3%B4nico"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:block fixed bottom-6 right-6 w-22 h-22 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition z-50"
      >
        <img src="/whatsapp.svg" alt="WhatsApp" />
      </a>
      <a
        href="https://wa.me/5511943887334?text=Ol%C3%A1%2C%20quero%20mais%20informações%20sobre%20o%20t%C3%B4nico"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4  bg-green-500 text-white font-bold p-3 rounded-lg hover:bg-green-600 transition flex-1 text-center"
      >
        Fale direto comigo pelo WhatsApp
      </a>
    </div>
  );
}
