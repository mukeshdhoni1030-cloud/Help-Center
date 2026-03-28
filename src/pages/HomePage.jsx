import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AssistBanner from "../components/AssistBanner";
import HomeCategoryTile from "../components/HomeCategoryTile";
import QuestionList from "../components/QuestionList";
import QuickLinks from "../components/QuickLinks";
import SearchBar from "../components/SearchBar";
import { categoryPages } from "../data/helpData";

function findSuggestions(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return categoryPages
    .map((page) => {
      const score =
        (page.title.toLowerCase().includes(normalized) ? 4 : 0) +
        (page.description.toLowerCase().includes(normalized) ? 2 : 0) +
        page.cards.reduce(
          (sum, card) =>
            sum +
            (card.title.toLowerCase().includes(normalized) ? 3 : 0) +
            (card.description.toLowerCase().includes(normalized) ? 1 : 0),
          0
        );
      return { page, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((item) => item.page);
}

export default function HomePage({ data }) {
  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => findSuggestions(query), [query]);

  return (
    <div className="page-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 noise-layer" />
      <div className="mx-auto min-h-screen w-full max-w-[1140px] px-10 py-20">
        <h1 className="gradient-title text-center text-[76px] font-semibold tracking-[-0.04em]">
          {data.title}
        </h1>

        <div className="mx-auto mt-12 max-w-[900px]">
          <SearchBar
            placeholder={data.searchPlaceholder}
            buttonLabel="Go"
            value={query}
            onChange={setQuery}
            onSubmit={() => {}}
          />
          {suggestions.length ? (
            <div className="mt-4 grid gap-3">
              {suggestions.map((page) => (
                <Link
                  key={page.slug}
                  to={`/${page.slug}`}
                  className="glow-card px-6 py-4 text-[18px] text-white/78 transition hover:-translate-y-0.5 hover:text-white"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-14 grid gap-5 border-t border-white/10 pt-10 md:grid-cols-2">
          {data.categories.slice(0, 4).map((category) => (
            <HomeCategoryTile key={category.slug} {...category} large />
          ))}
        </div>

        <div className="mt-5 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-3">
          {data.categories.slice(4).map((category) => (
            <HomeCategoryTile key={category.slug} {...category} />
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.45fr_0.75fr]">
          <QuestionList title="Popular Questions" items={data.popularQuestions} />
          <QuickLinks title="Quick Links" items={data.quickLinks} />
        </div>

        <div className="mt-14">
          <AssistBanner
            title={data.aiSuggest.title}
            description={data.aiSuggest.description}
            buttonLabel={data.aiSuggest.buttonLabel}
            to={data.aiSuggest.to}
          />
        </div>
      </div>
    </div>
  );
}
