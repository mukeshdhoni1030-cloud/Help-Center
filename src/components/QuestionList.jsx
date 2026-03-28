import { Link } from "react-router-dom";

export default function QuestionList({ title, items }) {
  return (
    <div>
      <div className="section-line text-[40px]">{title}</div>
      <div className="mt-6 space-y-2">
        {items.map((item) => (
          <Link key={item.title} to={item.to} className="flex items-center justify-between border-b border-white/10 py-5 text-[18px] text-white/88 transition hover:text-white">
            <span className="flex items-center gap-4">
              <span className="text-white/50">•</span>
              {item.title}
            </span>
            <span className="text-[36px] text-white/72">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
