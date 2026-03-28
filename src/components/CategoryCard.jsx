import { Link } from "react-router-dom";
import Icon from "./Icon";

const accentMap = {
  violet: "shadow-[0_0_24px_rgba(131,104,255,0.25)]",
  pink: "shadow-[0_0_24px_rgba(255,93,173,0.22)]",
  amber: "shadow-[0_0_24px_rgba(255,154,102,0.22)]",
  blue: "shadow-[0_0_24px_rgba(108,142,255,0.25)]"
};

export default function CategoryCard({ to, icon, title, description, accent = "violet", compact = false, wide = false }) {
  return (
    <Link
      to={to}
      className={`${compact ? "category-tile min-h-[132px]" : "category-tile min-h-[164px]"} ${accentMap[accent]} ${wide ? "md:col-span-2" : ""}`}
    >
      {icon ? (
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] border border-white/10 bg-white/5 text-[#ff9fc1]">
          <Icon name={icon} className="h-9 w-9" />
        </span>
      ) : null}
      <div className="flex-1">
        <h3 className="text-[23px] font-semibold leading-tight text-white">{title}</h3>
        <p className="mt-3 max-w-[24rem] text-[18px] leading-8 text-white/62">{description}</p>
      </div>
      <span className="text-[46px] leading-none text-white/72">›</span>
    </Link>
  );
}
