import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function HomeCategoryTile({ title, slug, icon, large = false }) {
  return (
    <Link to={`/${slug}`} className={`category-tile ${large ? "min-h-[118px]" : "min-h-[98px]"} ${large ? "px-8" : "px-7"}`}>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,rgba(168,104,255,0.18),rgba(255,120,114,0.12))] text-[#ff9ec5]">
        <Icon name={icon} className="h-8 w-8" />
      </span>
      <span className={`${large ? "text-[25px]" : "text-[21px]"} font-semibold text-white`}>{title}</span>
      <span className="ml-auto text-[42px] text-white/70">›</span>
    </Link>
  );
}
