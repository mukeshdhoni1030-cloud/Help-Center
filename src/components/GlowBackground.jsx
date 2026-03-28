export default function GlowBackground({ dust = false }) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 noise-layer" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[14%] h-48 w-48 rounded-full bg-miyraa-violet/14 blur-3xl" />
        <div className="absolute right-[10%] top-[10%] h-56 w-56 rounded-full bg-miyraa-coral/14 blur-3xl" />
        <div className="absolute bottom-[18%] left-[24%] h-56 w-56 rounded-full bg-miyraa-pink/10 blur-3xl" />
        {dust ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,210,180,0.08),transparent_55%)]" /> : null}
      </div>
    </>
  );
}
