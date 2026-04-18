import Form from "./Form.jsx";

export default function Hero({ onSearch }) {
  return (
    <section className="border w-full flex flex-col items-center gap-4 p-2">
      <h2>Encuentra tu próximo trabajo</h2>
      <p>Explora miles de oportunidades en el sector tecnológico</p>
      <Form onSearch={onSearch} />
    </section>
  );
}
