"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { offers } from "../../data/offers";
import { motion } from "framer-motion";


export function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Link to="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">Artificialyze</span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors">What We Do</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {offers.map((offer) => (
                                    <DropdownMenuItem key={offer.slug} asChild>
                                        <Link to={`/offer/${offer.slug}`}>{offer.title}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link
                            to="/why-us"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Why Us
                        </Link>
                    </nav>
                </div>

                {/* Mobile menu */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* You can add a search bar here if you want */}
                    </div>
                    <nav className="hidden md:flex items-center">
                        <Button asChild>
                            <a href="mailto:saikat@artificialyze.com">Contact Us</a>
                        </Button>
                    </nav>
                </div>

                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="outline" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                                <span className="sr-only">Artificialyze</span>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors text-left">What We Do</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {offers.map((offer) => (
                                        <DropdownMenuItem key={offer.slug} asChild>
                                            <Link to={`/offer/${offer.slug}`}>{offer.title}</Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Link to="/why-us" className="text-muted-foreground hover:text-foreground transition-colors">
                                Why Us
                            </Link>
                            <a href="mailto:saikat@artificialyze.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                Contact
                            </a>
                        </nav>
                    </SheetContent>
                </Sheet>

            </div>
        </motion.header>
    )
}