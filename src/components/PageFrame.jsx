import { Link } from "react-router-dom";
import GlowBackground from "./GlowBackground";

export default function PageFrame({ children, backTo, backLabel = "Back to Help Center", dust = false, topBrand = false }) {
  return (
    <div className="page-shell relative overflow-hidden">
      <GlowBackground dust={dust} />
      <div className="relative mx-auto min-h-screen max-w-[1280px] px-8 py-10">
        <div className="flex items-center justify-between">
          <div>
            {backTo ? (
              <Link to={backTo} className="text-[18px] text-[#b591ff] transition hover:text-white">
                ← {backLabel}
              </Link>
            ) : topBrand ? (
              <Link to="/" className="flex items-center gap-3 text-[34px] font-semibold text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cf88ff] text-[#ff9ad6]">♥</span>
                Miyraa
              </Link>
            ) : (
              <div />
            )}
          </div>
          {topBrand ? <button className="text-4xl text-white/85">☰</button> : null}
        </div>
        {children}
      </div>
    </div>
  );
}
