export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white bg-black py-10 text-center dm-sans-font mt-32">
      <p className="text-xl font-bold text-[#CFFF04]">SkyMart</p>
      <p className="mt-2 text-sm text-white/40">
        © {year} SkyMart 
      </p>
    </footer>
  );
}