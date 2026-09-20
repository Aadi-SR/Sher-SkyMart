import { ShoppingCart, LogOut, Zap } from "lucide-react";
import useAuth from "../hooks/AuthHooks";
import { NavLink } from "react-router";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/main" },
  { label: "Shop", href: "/main/shop" },
  { label: "About", href: "/main/about" },
];

const Navbar = () => {

  const {getLS, setLS, logout} = useAuth();

  const [activePath, setActivePath] = useState("");
  const [cartCount, setCartCount] = useState(0);
  


  const user = getLS("skymart-current-user") || null;
  // console.log("Current User:", user);
  const initial = user?.fullName?.trim()?.[0]?.toUpperCase() || "?";
  // console.log("User Initial:", initial);

  return (
    <header className="w-full px-32 border-b border-b-white mb-10 fixed bg-black/90 z-20">
      {/* Top accent line */}
      {/* <div className="h-0.75 w-full bg-[#CFFF04]" /> */}

      <nav className="flex items-center justify-between  border-white/10  py-3.5 ">
        {/* Logo */}
        <NavLink to="/main" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CFFF04]">
            <Zap className="h-5 w-5 fill-black text-black" strokeWidth={0} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white dm-sans-font">
            Sky<span className="text-[#CFFF04]">Mart</span>
          </span>
        </NavLink>

        {/* Nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activePath;
            return (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  onClick={() => setActivePath(link.href)}
                  className={`text-sm transition-colors dm-sans-font ${
                    isActive
                      ? "text-[#CFFF04] scale-105 font-bold"  
                      : "text-white/60 hover:text-white font-medium "
                  }`}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* User chip */}
          <div className="flex items-center gap-2 rounded-full bg-white/5 py-1.5 pl-1.5 pr-4">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CFFF04] text-sm font-bold text-black">
              {initial}
            </div>
            <span className="max-w-36 truncate text-sm font-medium text-white/80">
              {user?.fullName}
            </span>
          </div>

          {/* Cart */}
          <button
            type="button"
            aria-label="Cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ShoppingCart className="h-4.5 w-4.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#CFFF04] px-1 text-[11px] font-bold text-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* Logout */}
          <button
            type="button"
            aria-label="Log out"
            onClick={logout}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-4.5 w-4.5" />
          </button>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;