export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Digital TCM Entropy Reduction System
        </h1>
        <p className="text-slate-300 text-lg">
          Empowering global chronic disease rehabilitation through Three-Dimensional Framework (Material, Information-Energy, Consciousness).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-400">1. Material World</h3>
            <p className="text-slate-400 mt-2">Early intervention and wearable deep sleep telemetry.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <h3 className="text-xl font-semibold text-emerald-400">2. Information-Energy</h3>
            <p className="text-slate-400 mt-2">Meridian telemetry and AI visual reports.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <h3 className="text-xl font-semibold text-purple-400">3. Consciousness</h3>
            <p className="text-slate-400 mt-2">Entropy reduction and holistic harmony.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
