import { NavLink } from "./NavLink";
import { Gamepad2 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-[hsl(var(--navbar-red))] border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-lg">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Play for <span className="text-white/90">Solidarity</span>
            </span>
          </NavLink>

          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              className="text-white/80 hover:text-white transition-colors"
              activeClassName="text-white font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/tournaments"
              className="text-white/80 hover:text-white transition-colors"
              activeClassName="text-white font-semibold"
            >
              Tournaments
            </NavLink>
            <NavLink
              to="/missions"
              className="text-white/80 hover:text-white transition-colors"
              activeClassName="text-white font-semibold"
            >
              Missions
            </NavLink>
            <NavLink
              to="/shop"
              className="text-white/80 hover:text-white transition-colors"
              activeClassName="text-white font-semibold"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="text-white/80 hover:text-white transition-colors"
              activeClassName="text-white font-semibold"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white/80 hover:text-white transition-colors"
              activeClassName="text-white font-semibold"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
