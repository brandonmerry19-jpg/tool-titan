export default function ComparePage() {
  return (
    <main className="container-tight py-16">
      <p className="font-bold text-yellow-700">COMPARE</p>
      <h1 className="mt-2 text-4xl font-black md:text-5xl">Compare tools side by side.</h1>
      <p className="mt-4 max-w-2xl text-zinc-600">Comparison pages will make the important differences easy to understand before you buy.</p>
      <div className="mt-10 overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-[680px] text-left">
          <thead className="bg-zinc-950 text-white">
            <tr><th className="p-4">Category</th><th className="p-4">Tool A</th><th className="p-4">Tool B</th></tr>
          </thead>
          <tbody>
            {["Performance", "Battery / Power", "Build quality", "Comfort", "Value"].map((x) => (
              <tr key={x} className="border-t"><td className="p-4 font-bold">{x}</td><td className="p-4">To be researched</td><td className="p-4">To be researched</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
