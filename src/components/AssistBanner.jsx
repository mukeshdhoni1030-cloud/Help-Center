import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function AssistBanner({ title, description, buttonLabel, to, icon, visual, compact = false, subText }) {
  return (
    <div className={`assist-banner px-10 py-8 ${compact ? "min-h-[132px]" : "min-h-[180px]"}`}>
      <div className="relative z-10 flex items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          {visual === "avatar" ? <div className="h-24 w-24 rounded-[26px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,113,173,0.45),rgba(83,55,148,0.9))] shadow-[0_0_28px_rgba(185,108,255,0.3)]" /> : null}
          {visual === "orb" ? <div className="h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(181,132,255,0.42),rgba(255,129,125,0.18),rgba(26,16,46,0.95))] shadow-[0_0_32px_rgba(181,132,255,0.28)]" /> : null}
          {visual === "supportAgent" ? <div className="h-24 w-24 rounded-full bg-[radial-gradient(circle_at_40%_30%,rgba(142,169,255,0.42),rgba(255,154,215,0.22),rgba(32,21,58,0.94))] shadow-[0_0_30px_rgba(150,121,255,0.25)]" /> : null}
          {icon ? (
            <div className="text-[#ffc47f]">
              <Icon name={icon} className="h-12 w-12" />
            </div>
          ) : null}
          <div>
            <h3 className="text-[22px] font-semibold text-white">{title}</h3>
            {subText ? <p className="mt-2 text-[20px] text-white/78">{subText}</p> : null}
            {description ? <p className="mt-3 max-w-[32rem] text-[18px] leading-8 text-white/62">{description}</p> : null}
          </div>
        </div>
        {buttonLabel ? (
          <Link to={to} className="glow-pill whitespace-nowrap">
            {buttonLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
