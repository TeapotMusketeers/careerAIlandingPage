'use client'; 

// Navbar Component
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn(className, "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Features">
          {/* Add content for Features if needed */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          {/* Add content for Pricing if needed */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          {/* Add content for Contact if needed */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Signup">
          {/* Add content for Signup if needed */}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
