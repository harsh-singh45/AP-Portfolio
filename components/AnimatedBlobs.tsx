export default function AnimatedBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-brand-blue/20 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-brand-cyan/15 blur-[120px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-indigo/15 blur-[120px] animate-blob [animation-delay:8s]" />
    </div>
  );
}
