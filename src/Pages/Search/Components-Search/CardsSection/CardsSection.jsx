import JobCard from "./jobCard.jsx";

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default function CardsSection({ jobsJSON, query }) {
  return (
    <section className="border">
      <h1>
        Resultados de Búsqueda para: <strong>{query}</strong>
      </h1>
      <JobList jobs={jobsJSON} />
    </section>
  );
}
