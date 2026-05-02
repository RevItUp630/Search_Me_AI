import React, { useState } from "react";

const API_URL = "https://your-railway-url.up.railway.app";

export default function App() {
  const [query, setQuery] = useState("");
  const [report, setReport] = useState(null);

  const runReport = async () => {
    const res = await fetch(`${API_URL}/api/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });

    const data = await res.json();
    setReport(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Risk Intelligence</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter company"
      />

      <button onClick={runReport}>Run Report</button>

      {report && <h2>Risk: {report.riskScore}</h2>}
    </div>
  );
}
