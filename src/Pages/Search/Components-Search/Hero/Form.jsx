import { useId } from "react";

const filterOptions = [
  {
    label: "Tecnología",
    options: ["React", "Vue", "Angular", "Node.js", "Python", "Java"],
  },
  {
    label: "Ubicación",
    options: [
      "Remoto",
      "Bogotá",
      "Tokio",
      "New York",
      "Suiza",
      "Berlin",
      "oslo",
    ],
  },
  {
    label: "Tipo de contrato",
    options: ["Tiempo completo", "Medio tiempo", "Freelance", "Prácticas"],
  },
  {
    label: "experiencia",
    options: ["Junior", "Mid", "Senior", "Lead"],
  },
  {
    label: "Compañía",
    options: ["Google", "Microsoft", "Amazon", "Meta", "Netflix"],
  },
];

export default function Form({ onSearch }) {
  const selectId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget.form);
    const filters = Object.fromEntries(formData.entries());

    console.log("Filtros seleccionados:", filters);
    onSearch(filters);
  };

  return (
    <form className="w-full">
      <input
        name="search"
        type="text"
        className="border p-1"
        onChange={handleSubmit}
        placeholder="Buscar roles..."
      />
      <div className="flex gap-2 flex-wrap mt-4">
        {filterOptions.map(({ label, options }) => {
          const cleanName = label.toLowerCase().replace(/\s/g, "-");
          const uniqueId = `${selectId}-${cleanName}`;
          return (
            <select
              key={cleanName}
              id={uniqueId}
              name={cleanName}
              onChange={handleSubmit}
              defaultValue=""
              className="cursor-pointer bg-[#1b1b1b] text-center border"
            >
              <option value="" disabled>
                {label}
              </option>
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          );
        })}
      </div>
    </form>
  );
}
