export default function WorkingPrinciples() {
  const items = [
    { title: 'Architect first', text: 'Start with clarity and constraints.' },
    { title: 'Small to big', text: 'Prove value fast, then scale by evidence.' },
    { title: 'Guardrails', text: 'Change‑control, freeze windows, and no chaos tax.' },
    { title: 'Measure', text: 'Define success before we start.' },
    { title: 'Protect deep work', text: 'Quality beats speed theater.' },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Working Principles</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.title} className="card p-5">
              <h4 className="font-semibold">{i.title}</h4>
              <p className="mt-2 text-sm text-muted">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}