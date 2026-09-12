import { Zap } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CFFF04]">
        <Zap className="h-6 w-6 fill-black text-black" strokeWidth={0} />
      </div>
      <span className="text-2xl font-extrabold tracking-tight text-white">
        Sky<span className="text-[#CFFF04]">Mart</span>
      </span>
    </div>
  );
}