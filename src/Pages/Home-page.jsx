import { useNavigate } from "react-router-dom";
import { useState } from "react";

const cardsInfo = [
  {
    title: "Amplia variedad de ofertas",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9icyUyMGluJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Encuentra oportunidades laborales en una amplia gama de tecnologías y niveles de experiencia.",
  },
  {
    title: "Conexión directa con empresas",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9icyUyMGluJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Postula directamente a las ofertas de trabajo y conecta con los reclutadores de las empresas.",
  },
  {
    title: "Recursos para desarrolladores",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9icyUyMGluJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Accede a recursos útiles como consejos para entrevistas, guías de carrera y más.",
  },
];

export function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/empleos?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <main className=" w-[100%] flex flex-col items-center justify-center">
      <section className="flex flex-col w-full h-[90vh] items-center justify-center gap-6">
        <h1 className="text-4xl text-center font-bold">Bienvenido a DevJobs</h1>
        <p className="text-lg mt-4 text-center">
          Tu portal de empleo para desarrolladores. <br /> Encuentra tu próximo
          trabajo en tecnología aquí.
        </p>
        <form onSubmit={handleSubmit} className="border p-2 flex items-center">
          <label className="w-full h-full flex items-center gap-2">
            <span>🔍︎</span>
            <input
              type="text"
              placeholder="Buscar empleos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <button type="sumbit" className="border cursor-pointer">
            Buscar
          </button>
        </form>
      </section>
      <section className="flex flex-col w-full h-[100vh] items-center justify-center gap-6">
        <h2 className="text-2xl font-semibold">¿Por qué DevJobs?</h2>
        <p className="text-center">
          DebJobs es la principal plataforma de empleo para desarrolladores en
          tecnología. <br />
          Con miles de ofertas de trabajo en todo el mundo, DevJobs conecta a
          los mejores talentos con las empresas más innovadoras. <br />
        </p>
        <div className="flex gap-6 flex-wrap justify-center">
          {cardsInfo.map(({ title, image, description }) => (
            <div
              key={title}
              className="border rounded-lg overflow-hidden w-[300px]"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-center font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-center">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
