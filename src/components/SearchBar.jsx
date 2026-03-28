export default function SearchBar({ placeholder, buttonLabel, value, onChange, onSubmit }) {
  return (
    <div className="search-shell">
      <span className="mr-4 text-[34px] text-white/75">⌕</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") onSubmit();
        }}
        className="w-full bg-transparent text-[22px] font-medium text-white outline-none placeholder:text-white/50"
        placeholder={placeholder}
      />
      {buttonLabel ? (
        <button type="button" onClick={onSubmit} className="glow-pill ml-6 min-w-[166px] text-center">
          {buttonLabel}
        </button>
      ) : null}
    </div>
  );
}
