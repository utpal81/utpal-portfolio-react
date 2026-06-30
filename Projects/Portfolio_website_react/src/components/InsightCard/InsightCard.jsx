import "./InsightCard.css";
import { Link } from "react-router-dom";

function InsightCard({ article }) {
  return (
    <article className="insight-card">
      <span className="category">{article.category}</span>

      <h3>{article.title}</h3>

      <p>{article.readTime}</p>

      <Link to={`/insights/${article.slug}`}>Read Article →</Link>
    </article>
  );
}

export default InsightCard;
