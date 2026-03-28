import { Link } from "react-router-dom";

export default function QuickLinks({ title, items }) {
  return (
    <div>
      <div className="section-line text-[40px]">{title}</div>
      <div className="mt-6 grid gap-4">
        {items.map((item) => (
          <Link key={item.title} to={item.to} className="soft-button text-center">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
