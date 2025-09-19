"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Facebook Pixel
  useEffect(() => {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    fbq("init", "SUA_PIXEL_ID_AQUI");
    fbq("track", "PageView");
  }, []);

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
        if (typeof fbq !== "undefined") {
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
      <div className="mb-4 flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full w-fit text-sm">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>Site 100% Seguro</span>
      </div>

      {/* Header */}
      <header className="text-center mb-12 bg-[#ffdce8ff]">
        <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#4d8840] overflow-hidden">
          <img
            src="/perfil-1.jpeg"
            alt="Afiliada"
            className="w-24 h-24 object-cover object-center"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e15e31] flex flex-col h-24">
          Tônico Poderoso<span className="md:ml-75 text-base underline">tônico capilar</span>
        </h1>
        <p className="text-xl text-black max-w-2xl mx-auto">
          Recupera, fortalece e acelera o crescimento dos fios. Ideal para
          mulheres que querem cabelos mais <strong>fortes, longos e saudáveis</strong>.
        </p>
      </header>

      {/* Benefícios */}
      <section className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full mb-8 border border-l-8 border-[#e15e31]">
        <h2 className="text-2xl font-semibold mb-4 text-[#4d8840]">
          Por que escolher o Tônico?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl">
          <li>✅ Estimula o crescimento acelerado dos fios</li>
          <li>✅ Reduz a queda e fortalece a raiz</li>
          <li>✅ Fórmula natural, dermatologicamente testada</li>
          <li>✅ Resultados visíveis em poucas semanas</li>
        </ul>
      </section>

      {/* Depoimentos */}
      <section className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full mb-8 border border-l-8 border-[#4d8840]">
        <h2 className="text-2xl font-semibold mb-4 text-[#e15e31]">
          Mulheres reais, resultados reais
        </h2>
        <div className="space-y-4 text-gray-700 italic">
          <img
            src="/depoimentos-tonico.png"
            alt="Depoimentos"
            className="mx-auto mb-4 border-4 border-[#4d8840] rounded-2xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border border-[#4d8840] bg-[#e15e31] p-8 rounded-2xl shadow-lg max-w-xl w-full text-center text-white">
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
              className="bg-emerald-600 text-white font-semibold p-3 rounded-lg cursor-pointer hover:bg-emerald-500 transition"
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
            onClick={() => fbq("track", "Purchase")}
          >
            Ir para a Loja Oficial
          </a>
        )}
      </section>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5511949391753?text=Ol%C3%A1%2C%20quero%20mais%20informações%20sobre%20o%20t%C3%B4nico"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:block fixed bottom-6 right-6 w-22 h-22 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition z-50"
      >
        <img src="/whatsapp.svg" alt="WhatsApp" />
      </a>
      <a
        href="https://wa.me/5511949391753?text=Ol%C3%A1%2C%20quero%20mais%20informações%20sobre%20o%20t%C3%B4nico"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4  bg-green-500 text-white font-bold p-3 rounded-lg hover:bg-green-600 transition flex-1 text-center"
      >
        Fale direto comigo pelo WhatsApp
      </a>
    </div>
  );
}
