import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function BottomSupportIcons({ items }) {
  return (
    <div className="mt-16">
      <div className="section-line justify-center text-center text-[38px]">We're here for you</div>
      <div className="mt-10 flex items-center justify-center gap-24">
        {items.map((item) => (
          <Link key={item.label} to={item.to} className="group flex flex-col items-center gap-4">
            <div className="bottom-help-icon group-hover:-translate-y-1 transition">
              <Icon name={item.icon} className="h-14 w-14 text-[#df9cff]" />
            </div>
            <span className="text-[18px] text-white/82">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
