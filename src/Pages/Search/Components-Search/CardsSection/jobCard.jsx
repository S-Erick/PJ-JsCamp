import { useState } from "react";

export default function JobCard({ job }) {
  const [isApplying, setIsApplying] = useState(false);

  const handleApply = () => {
    setIsApplying(!isApplying);
  };

  const applyStyle = isApplying
    ? "bg-[#048000] cursor-pointer"
    : "border cursor-pointer ";

  return (
    <div
      className="flex w-[100%] justify-between items-center p-6 gap-4 border border-indigo-500"
      key={job.id}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold ">{job.titulo}</h2>
        <p>
          • {job.compañia} <br />• {job.ubicación} <br />• {job.tipoDeContrato}
          <br />• {job.Experiencia} <br />• {job.Tecnología}
        </p>
        <p>{job.descripcion}</p>
      </div>
      <button className={applyStyle} onClick={() => handleApply()}>
        {isApplying ? "Aplicado" : "Aplicar"}
      </button>
    </div>
  );
}
