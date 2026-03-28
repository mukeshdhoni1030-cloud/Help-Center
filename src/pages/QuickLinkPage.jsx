import { Link } from "react-router-dom";
import PageFrame from "../components/PageFrame";

export default function QuickLinkPage({ page }) {
  return (
    <PageFrame backTo="/">
      <div className="mx-auto max-w-[980px] pt-24 text-center">
        <h1 className="gradient-title text-[74px] font-semibold tracking-[-0.04em]">{page.title}</h1>
        <p className="mx-auto mt-8 max-w-[760px] text-[24px] leading-10 text-white/66">{page.description}</p>
        <Link to={page.buttonTo} className="glow-pill mt-14 inline-block">
          {page.buttonLabel}
        </Link>
      </div>
    </PageFrame>
  );
}
