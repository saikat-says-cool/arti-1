"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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
                    <nav className="flex items-center gap-4 text-sm">
                        {offers.map((offer) => (
                            <Link
                                key={offer.slug}
                                to={`/offer/${offer.slug}`}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {offer.title}
                            </Link>
                        ))}
                        <Link
                            to="/case-studies"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Case Studies
                        </Link>
                        <Link
                            to="/why-us"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Why Us
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <nav className="hidden md:flex items-center">
                        <Button asChild>
                            <Link to="/book">Book a Call</Link>
                        </Button>
                    </nav>
                </div>

                <Sheet>
                    <SheetTrigger asChild className="md:hidden ml-4">
                        <Button variant="outline" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                                <span className="sr-only">Artificialyze</span>
                            </Link>
                            {offers.map((offer) => (
                                <Link
                                    key={offer.slug}
                                    to={`/offer/${offer.slug}`}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {offer.title}
                                </Link>
                            ))}
                             <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                                Case Studies
                            </Link>
                            <Link to="/why-us" className="text-muted-foreground hover:text-foreground transition-colors">
                                Why Us
                            </Link>
                            <Link to="/book" className="text-muted-foreground hover:text-foreground transition-colors">
                                Book a Call
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>

            </div>
        </motion.header>
    )
}