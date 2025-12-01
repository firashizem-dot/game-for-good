import { NavLink } from "./NavLink";
import { Gamepad2 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Gamepad2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              Play for <span className="text-primary">Solidarity</span>
            </span>
          </NavLink>

          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Home
            </NavLink>
            <NavLink
              to="/tournaments"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Tournaments
            </NavLink>
            <NavLink
              to="/missions"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Missions
            </NavLink>
            <NavLink
              to="/shop"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
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
