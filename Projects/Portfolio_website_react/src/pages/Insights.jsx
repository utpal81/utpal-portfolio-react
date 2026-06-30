import { Link } from "react-router-dom";
import "./Insights.css";
import insights from "../data/insights";
import InsightCard from "../components/InsightCard/InsightCard";

function Insights() {
  return (
    <main className="insights-page">
      <h1>Latest Insights</h1>

      <p className="insights-intro">
        Sharing my knowledge on AI, React, FastAPI and Cloud.
      </p>

      {/* 👇 Put it here */}
      <div className="insights-grid">
        {insights.map((article) => (
          <InsightCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}

export default Insights;
