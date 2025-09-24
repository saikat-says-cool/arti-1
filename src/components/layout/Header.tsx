import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/utils/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services: { title: string; href: string; description: string }[] = [
  {
    title: "AI Appointment Engine",
    href: "/appointment-engine",
    description: "For local service businesses to capture, qualify, and book appointments automatically.",
  },
  {
    title: "AI Customer Support",
    href: "/customer-support",
    description: "For e-commerce brands to provide 24/7 support that converts visitors into customers.",
  },
  {
    title: "AI Lead Generation & Mass Personalized Outreach",
    href: "/lead-generation-outreach",
    description: "For agencies to fill their sales pipeline with automated scraping and outreach.",
  },
];

const navLinks = [
  { to: "/why-us", text: "Why Us" },
  { to: "/case-studies", text: "Case Studies" },
  { to: "/blog", text: "Blog" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">Artificialyze</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>What We Do</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  navigationMenuTriggerStyle(),
                  "transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/60"
                )
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild>
              <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 text-lg font-medium mt-8">
                <Link to="/" className="font-bold text-xl mb-4">Artificialyze</Link>
                <p className="font-bold text-muted-foreground">What We Do</p>
                {services.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `pl-4 transition-colors hover:text-foreground/80 ${
                        isActive ? "text-foreground" : "text-foreground/60"
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}
                <hr className="my-2" />
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `transition-colors hover:text-foreground/80 ${
                        isActive ? "text-foreground" : "text-foreground/60"
                      }`
                    }
                  >
                    {link.text}
                  </NavLink>
                ))}
                <div className="flex items-center gap-4 mt-4">
                  <Button asChild className="flex-1">
                    <a href="https://cal.com/saikat-artificialyze/15min" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
                  </Button>
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;