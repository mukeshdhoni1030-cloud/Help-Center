import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AssistBanner from "../components/AssistBanner";
import BottomSupportIcons from "../components/BottomSupportIcons";
import CategoryCard from "../components/CategoryCard";
import PageFrame from "../components/PageFrame";
import SearchBar from "../components/SearchBar";

function matchesCard(card, query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;
  return (
    card.title.toLowerCase().includes(normalized) ||
    card.description.toLowerCase().includes(normalized)
  );
}

export default function CategoryPage({ page }) {
  const [query, setQuery] = useState("");

  // Each reference screen is rendered from the same shell so spacing,
  // glow treatment, and card behavior stay consistent across the site.
  const filteredCards = useMemo(
    () => page.cards.filter((card) => matchesCard(card, query)),
    [page.cards, query]
  );

  return (
    <PageFrame backTo={page.backTo || "/"} dust={page.themeVariant === "dust"} topBrand={page.topBrand}>
      <div className="mx-auto max-w-[1220px] pt-10">
        <div className={page.heroIcon ? "flex items-center gap-10" : "text-center"}>
          {page.heroIcon ? (
            <div className="glow-card flex h-44 w-40 items-center justify-center text-[#ff9dc7]">
              <span className="text-7xl">🛡</span>
            </div>
          ) : null}
          <div className={page.heroIcon ? "max-w-[760px]" : "mx-auto max-w-[980px]"}>
            <h1 className={`${page.headingClassName || "gradient-title"} text-[76px] font-semibold leading-[1.04] tracking-[-0.04em] ${page.topBrand ? "mt-10 text-center font-script" : ""}`}>
              {page.title}
            </h1>
            <p className={`mt-5 text-[22px] leading-10 text-white/62 ${page.heroIcon ? "" : "mx-auto max-w-[880px] text-center"}`}>
              {page.description}
            </p>
          </div>
        </div>

        <div className={`mx-auto mt-10 ${page.heroIcon ? "max-w-[820px]" : "max-w-[920px]"}`}>
          <SearchBar placeholder={page.searchPlaceholder} value={query} onChange={setQuery} onSubmit={() => {}} />
        </div>

        {page.sectionTitle ? <h2 className="mt-14 text-[42px] font-medium text-[#b98cff]">{page.sectionTitle}</h2> : null}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredCards.map((card) => (
            <CategoryCard key={card.title} to={card.to} title={card.title} description={card.description} accent={card.accent} compact={!page.sectionTitle} wide={card.wide} icon={card.icon} />
          ))}
        </div>

        {page.highlight ? (
          <div className="mt-14">
            <AssistBanner title={page.highlight.text} buttonLabel={page.highlight.buttonLabel} to={page.highlight.to} compact />
          </div>
        ) : null}

        {page.guideBanner ? (
          <div className="mt-10">
            <AssistBanner title={page.guideBanner.text} subText={page.guideBanner.subText} buttonLabel={page.guideBanner.buttonLabel} to={page.guideBanner.to} icon={page.guideBanner.icon} visual={page.guideBanner.visual} compact />
          </div>
        ) : null}

        {page.supportPanel ? (
          <div className="mt-16">
            <AssistBanner title={page.supportPanel.title} description={page.supportPanel.description} buttonLabel={page.supportPanel.buttonLabel} to={page.supportPanel.to} visual={page.supportPanel.visual} />
            {page.supportPanel.subText ? <p className="mt-5 text-[18px] text-white/56">{page.supportPanel.subText}</p> : null}
          </div>
        ) : null}

        {page.support ? (
          <div className="mt-16 border-t border-white/10 pt-14 text-center">
            <h2 className="gradient-title text-[48px] font-semibold">{page.support.title}</h2>
            <p className="mx-auto mt-6 max-w-[720px] text-[22px] leading-10 text-white/62">{page.support.description}</p>
            <Link to={page.support.to} className="soft-button mt-10 inline-block min-w-[340px] text-center">
              {page.support.buttonLabel}
            </Link>
          </div>
        ) : null}

        {page.footerHelp ? <div className="mt-14 border-t border-white/10 pt-12 text-center text-[22px] text-white/56">{page.footerHelp.text}</div> : null}
        {page.bottomSupportIcons ? <BottomSupportIcons items={page.bottomSupportIcons} /> : null}
      </div>
    </PageFrame>
  );
}
