import { useState } from "react";
import Hero from "./Components-Search/Hero/Hero.jsx";
import CardsSection from "./Components-Search/CardsSection/CardsSection.jsx";
import Pagination from "./Components-Search/Pagination.jsx";
import jobsData from "../../jobsData.json";

const resutltPerPage = 5;

export function EmpleosPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    tecnología: "",
    ubicación: "",
    "tipo-de-contrato": "",
    "nivel-de-experiencia": "",
  });

  const filteredJobs = jobsData.filter((job) => {
    const matchSearch = job.titulo
      ?.toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchTech = filters.tecnología
      ? job.Tecnología?.includes(filters.tecnología)
      : true;
    const matchLocation = filters.ubicación
      ? job.ubicación === filters.ubicación
      : true;
    const matchContract = filters["tipo-de-contrato"]
      ? job.tipoDeContrato === filters["tipo-de-contrato"]
      : true;
    const matchExperience = filters.experiencia
      ? job.Experiencia === filters.experiencia
      : true;
    return (
      matchSearch &&
      matchTech &&
      matchLocation &&
      matchContract &&
      matchExperience
    );
  });

  const ttlPages = Math.ceil(filteredJobs.length / resutltPerPage);
  const pageResults = filteredJobs.slice(
    (currentPage - 1) * resutltPerPage,
    currentPage * resutltPerPage,
  );

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  return (
    <main className="flex flex-col gap-6 px-[15%] py-8 items-center">
      <Hero onSearch={handleSearch} />
      <CardsSection jobsJSON={pageResults} />
      <Pagination
        currentPage={currentPage}
        totalPages={ttlPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
