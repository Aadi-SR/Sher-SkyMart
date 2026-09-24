export default function TeamMemberCard({ name, role, avatarColor = "bg-[#CFFF04] text-black" }) {
  const initial = name?.trim()?.[0]?.toUpperCase() || "?";

  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/15 px-4 py-6 text-center">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold ${avatarColor}`}
      >
        {initial}
      </div>
      <p className="mt-3 font-bold text-white">{name}</p>
      <p className="mt-0.5 text-sm text-white/40">{role}</p>
    </div>
  );
}