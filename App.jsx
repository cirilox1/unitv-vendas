
import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';

export default function App() {
  const PIX_KEY = "71903758130";
  const WHATS = "5562994430322"; // country code + number
  const whatsappLink = `https://wa.me/${WHATS}?text=${encodeURIComponent("Quero garantir minha Unitv sem mensalidade!")}`;

  const [secondsLeft, setSecondsLeft] = useState(4 * 60 * 60);
  const qrCanvasRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setSecondsLeft(s => (s>0? s-1:0)), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // generate QR from PIX key (simple text QR — banks may accept scanning to copy the key)
    if(qrCanvasRef.current) {
      QRCode.toCanvas(qrCanvasRef.current, PIX_KEY, { width: 260 }, function (error) {
        if (error) console.error(error);
      });
    }
  }, [qrCanvasRef]);

  function formatTime(s){
    const h = String(Math.floor(s/3600)).padStart(2,'0');
    const m = String(Math.floor((s%3600)/60)).padStart(2,'0');
    const sec = String(s%60).padStart(2,'0');
    return `${h}:${m}:${sec}`;
  }

  async function copyPix(){
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      alert("PIX copiado: " + PIX_KEY);
    } catch(e){
      alert("Erro ao copiar. Copie manualmente: " + PIX_KEY);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center">UNITV</div>
            <div>
              <h1 className="font-bold text-xl">Unitv</h1>
              <p className="text-sm text-gray-500">TV Box Vitalícia — Sem mensalidade</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#benefits" className="text-sm hover:underline">Benefícios</a>
            <a href="#reviews" className="text-sm hover:underline">Depoimentos</a>
            <a href="#guarantee" className="text-sm hover:underline">Garantia</a>
            <a href="#checkout" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm shadow">Comprar</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mb-4 inline-block">
            <strong className="text-yellow-800">🚨 Promoção Relâmpago</strong> — Oferta por tempo limitado
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">CHEGA DE PAGAR BOLETO! A TV Box Vitalícia que ACABA com a mensalidade chegou!</h2>

          <p className="mt-4 text-gray-700">Assista filmes, séries e esportes em alta definição sem pagar mensalidade. Pague uma vez, use para sempre.</p>

          <div className="mt-6 flex items-center gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="text-sm text-gray-500">DE</div>
              <div className="text-2xl line-through text-gray-400">R$ 499,00</div>
              <div className="text-3xl font-extrabold text-green-600">R$ 400,00</div>
              <div className="text-xs text-gray-500">ou 12x de R$ 33,33 sem juros</div>
            </div>

            <div className="flex-1">
              <button
                onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-lg text-lg font-bold shadow-lg hover:scale-[1.01] transition-transform"
              >
                EU QUERO ECONOMIZAR AGORA!
              </button>

              <div className="mt-2 text-sm text-gray-500">Oferta válida enquanto o tempo não zerar.</div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <div className="bg-red-600 text-white px-3 py-2 rounded">Estoque Limitado</div>
            <div className="font-mono bg-gray-900 text-white px-3 py-2 rounded">{formatTime(secondsLeft)}</div>
          </div>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✅ Acesso vitalício — um pagamento e pronto.</li>
            <li>✅ Instalação em 2 minutos: plug & play.</li>
            <li>✅ Qualidade HD/4K com pouquíssimos travamentos.</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="#checkout" className="inline-block bg-yellow-500 text-black px-5 py-3 font-bold rounded-lg shadow">COMPRAR AGORA</a>
            <a href="#guarantee" className="inline-block border border-gray-300 px-4 py-3 rounded-lg text-sm">7 dias de garantia</a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="rounded-xl shadow-2xl w-full h-64 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15)), url(https://images.unsplash.com/photo-1526178613651-4c2b8a4a0f08?auto=format&fit=crop&w=800&q=60)'}}>
              <div className="p-6 text-white">
                <div className="text-sm opacity-90">Conteúdo Ilimitado</div>
                <h3 className="text-xl font-extrabold">Filmes • Séries • Esportes • Canais</h3>
                <p className="mt-2 text-xs opacity-90">Um aparelho — todo o entretenimento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Você sabia que está JOGANDO DINHEIRO FORA todo mês?</h3>
            <p className="mt-3 text-gray-700">Compare o gasto com TV a cabo e streamings contra a solução Unitv — pague uma vez e esqueça boletos.</p>
          </div>

          <div>
            <div className="shadow-md rounded-lg overflow-hidden border">
              <div className="grid grid-cols-2 divide-x">
                <div className="p-6 bg-gray-50">
                  <h4 className="font-bold">TV A CABO / STREAMINGS</h4>
                  <ul className="mt-3 text-sm space-y-2 text-gray-600">
                    <li>❌ Custo alto e recorrente</li>
                    <li>❌ Boletos mensais</li>
                    <li>❌ Conteúdo limitado</li>
                  </ul>
                </div>
                <div className="p-6 bg-white">
                  <h4 className="font-bold text-green-600">UNITV</h4>
                  <ul className="mt-3 text-sm space-y-2 text-gray-700">
                    <li>✅ Custo único (R$ 400)</li>
                    <li>✅ Zero mensalidade</li>
                    <li>✅ Conteúdo ilimitado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Sua TV com a única tecnologia que te devolve o controle financeiro!</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold">Acesso Vitalício</h4>
              <p className="mt-2 text-sm text-gray-600">Comprou, ligou, e tem para sempre — sem mais cobranças.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold">Instalação Fácil</h4>
              <p className="mt-2 text-sm text-gray-600">Plug & Play: qualquer pessoa instala em 2 minutos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold">Qualidade Premium</h4>
              <p className="mt-2 text-sm text-gray-600">Suporta HD e 4K — curtição sem travar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold">Tudo Liberado</h4>
              <p className="mt-2 text-sm text-gray-600">Filmes, séries e esportes juntos — sem ficar trocando assinaturas.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold">O que nossos clientes que CORTARAM O BOLETO estão dizendo</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Mariana S.', text: 'Eu gastava R$ 150 só com streamings. Agora, com o Unitv, meu orçamento está livre e o conteúdo é até melhor! Valeu cada centavo.' },
              { name: 'João P.', text: 'Instalei em 2 minutos e nunca mais me preocupei com mensalidade. Recomendo.' },
              { name: 'Fernanda R.', text: 'A qualidade é absurda pelo preço. Valeu demais.' }
            ].map((r,i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">👤</div>
                  <div>
                    <div className="font-bold">{r.name}</div>
                    <div className="text-xs text-gray-400">Cliente verificado</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="checkout" className="py-12">
        <div className="max-w-4xl mx-auto px-6 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold">Última chamada — Garanta o seu Unitv agora</h3>
              <p className="mt-2 text-gray-600">Preço promocional por tempo limitado. Estoque quase esgotado.</p>

              <div className="mt-4">
                <div className="text-sm text-gray-500">Valor à vista</div>
                <div className="text-3xl font-bold text-green-600">R$ 400,00</div>
                <div className="text-sm text-gray-500">ou 12x de R$ 33,33 sem juros</div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-5 py-3 rounded-lg font-bold">COMPRAR AGORA — R$ 400</button>
                <button onClick={copyPix} className="w-full border border-gray-300 px-5 py-3 rounded-lg">Pagar no PIX (R$ 400)</button>
              </div>

              <div className="mt-4 text-xs text-gray-500">Compra segura • Garantia de 7 dias • Estoque limitado</div>

              <div className="mt-6 flex gap-3">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-block bg-green-500 text-white px-4 py-3 rounded-lg">Falar no WhatsApp</a>
                <a href="#" onClick={(e)=>{e.preventDefault(); document.getElementById('pix-area')?.scrollIntoView({behavior:'smooth'})}} className="inline-block border border-gray-300 px-4 py-3 rounded-lg">Ver PIX / QR</a>
              </div>
            </div>

            <div className="w-48">
              <img src="https://images.unsplash.com/photo-1585386959984-a4155227c8d6?auto=format&fit=crop&w=400&q=60" alt="Unitv box" className="rounded-lg shadow" />
            </div>
          </div>
        </div>
      </section>

      <section id="pix-area" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 bg-gray-50 rounded-xl shadow p-6">
          <h4 className="font-bold text-lg">PIX — Copie ou Escaneie</h4>
          <p className="text-sm text-gray-600">Use o PIX abaixo para pagar: copie o número ou escaneie o QR.</p>

          <div className="mt-4 flex flex-col md:flex-row items-center gap-6">
            <div>
              <canvas ref={qrCanvasRef} />
            </div>
            <div>
              <div className="font-mono text-xl">{PIX_KEY}</div>
              <div className="mt-3 flex gap-3">
                <button onClick={copyPix} className="px-4 py-2 rounded bg-blue-600 text-white">Copiar PIX</button>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="px-4 py-2 rounded border">Avisar por WhatsApp</a>
              </div>
              <div className="mt-3 text-xs text-gray-500">Caso o banco não aceite o QR direto, copie a chave e cole no seu app.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="guarantee" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-xl font-bold">Garantia Incondicional de 7 dias</h4>
          <p className="mt-3 text-gray-600">Se você não amar a liberdade de não ter mensalidade, devolvemos seu dinheiro — sem perguntas.</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold">Unitv</div>
            <div className="text-sm text-gray-400">Selos de segurança e formas de pagamento aceitas</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-16 bg-gray-700 rounded flex items-center justify-center">Visa</div>
            <div className="h-8 w-16 bg-gray-700 rounded flex items-center justify-center">Master</div>
            <div className="h-8 w-16 bg-gray-700 rounded flex items-center justify-center">PIX</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
