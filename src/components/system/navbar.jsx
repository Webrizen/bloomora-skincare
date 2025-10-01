"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/assets/logo.png";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Search, User, ShoppingBag } from 'lucide-react';
import { collections, ingredients, productTypes, skinConcerns } from '@/enums';

const Navbar = () => {
    const [navIsOpened, setNavIsOpened] = useState(false)

    const closeNavbar = () => setNavIsOpened(false);

    return (
        <>
            <div
                aria-hidden="true"
                onClick={closeNavbar}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${navIsOpened ? "opacity-100 lg:hidden" : "opacity-0 pointer-events-none lg:hidden"
                    }`}
            />

            <header className="sticky top-0 w-full flex items-center h-20 border-b border-zinc-200/80 dark:border-zinc-800/80 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl supports-backdrop-blur:bg-white/80">
                <nav className="relative mx-auto max-w-7xl w-full px-6 lg:px-8 flex justify-between items-center">

                    <div className="flex items-center min-w-max">
                        <Link href="/" className="relative flex items-center gap-3 group">
                            <div className="relative overflow-hidden rounded-lg">
                                <Image
                                    src={Logo}
                                    alt="Bloomora Skincare - Luxury Skincare Solutions"
                                    width={160}
                                    height={160}
                                    placeholder="blur"
                                    className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-light tracking-wide text-zinc-900 dark:text-white">
                                    Bloomora
                                </span>
                                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
                                    Skincare
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden xl:flex items-center justify-center flex-1 max-w-4xl mx-12">
                        <NavigationMenu>
                            <NavigationMenuList className="flex items-center gap-1">

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-4 py-2 data-[state=open]:text-zinc-900 data-[state=open]:dark:text-white transition-colors duration-200">
                                        Skincare Collections
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[800px] p-4">
                                        <div className="grid grid-cols-2 gap-2">
                                            {productTypes.map((category) => (
                                                <Link
                                                    key={category.name}
                                                    href="#"
                                                    className="group flex gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div className="w-20 h-20 rounded-lg overflow-hidden">
                                                            <img
                                                                src={category.image || 'https://placehold.co/600x400'}
                                                                alt={category.name}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-zinc-900 dark:text-white group-hover:text-accent-foreground dark:group-hover:text-accent-foreground transition-colors mb-2">
                                                            {category.name}
                                                        </h4>
                                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                                                            {category.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {category.items.slice(0, 2).map((item) => (
                                                                <span key={item} className="text-xs text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
                                                                    {item}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-4 py-2 data-[state=open]:text-zinc-900 data-[state=open]:dark:text-white transition-colors duration-200">
                                        Skin Solutions
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[800px] p-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            {skinConcerns.map((concern) => (
                                                <Link
                                                    key={concern.name}
                                                    href="#"
                                                    className="group block rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600"
                                                >
                                                    <div className="relative h-32 overflow-hidden">
                                                        <img
                                                            src={concern.image || 'https://placehold.co/600x400'}
                                                            alt={concern.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                                    </div>
                                                    <div className="p-4">
                                                        <h4 className="font-semibold text-zinc-900 dark:text-white group-hover:text-accent-foreground dark:group-hover:text-accent-foreground transition-colors mb-2">
                                                            {concern.name}
                                                        </h4>
                                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                                            {concern.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-4 py-2 data-[state=open]:text-zinc-900 data-[state=open]:dark:text-white transition-colors duration-200">
                                        Active Innovations
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[800px] p-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            {ingredients.map((ingredient) => (
                                                <Link
                                                    key={ingredient.name}
                                                    href="#"
                                                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 group-hover:border-accent-foreground dark:group-hover:border-accent-foreground transition-colors">
                                                            <img
                                                                src={ingredient.image || 'https://placehold.co/150x150'}
                                                                alt={ingredient.name}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-zinc-900 dark:text-white group-hover:text-accent-foreground dark:group-hover:text-accent-foreground transition-colors mb-1">
                                                            {ingredient.name}
                                                        </h4>
                                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                                            {ingredient.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-4 py-2 data-[state=open]:text-zinc-900 data-[state=open]:dark:text-white transition-colors duration-200">
                                        Our World
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[800px] p-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            {collections.map((collection) => (
                                                <Link
                                                    key={collection.name}
                                                    href="#"
                                                    className="group block rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600"
                                                >
                                                    <div className="relative h-24 overflow-hidden">
                                                        <img
                                                            src={collection.image || 'https://placehold.co/600x400'}
                                                            alt={collection.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <h4 className="font-semibold text-white text-lg group-hover:scale-105 transition-transform">
                                                                {collection.name}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="p-4">
                                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                                                            {collection.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center gap-1">
                        <button className="size-10 flex justify-center items-center hover:bg-accent-foreground/5 cursor-pointer rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
                            <Search size={20} />
                        </button>

                        <button className="size-10 flex justify-center items-center hover:bg-accent-foreground/5 cursor-pointer rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
                            <User size={20} />
                        </button>

                        <button className="relative size-10 flex justify-center items-center hover:bg-accent-foreground/5 cursor-pointer rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
                            <ShoppingBag size={20} />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-foreground text-xs font-medium text-white">
                                0
                            </span>
                        </button>

                        <Sheet open={navIsOpened} onOpenChange={setNavIsOpened}>
                            <SheetTrigger asChild>
                                <button className="xl:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[90vw] max-w-md border-l border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between p-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
                                        <Link href="/" className="flex items-center gap-3" onClick={closeNavbar}>
                                            <Image
                                                src={Logo}
                                                alt="Bloomora Skincare"
                                                width={80}
                                                height={80}
                                                className="h-8 w-8"
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-lg font-light text-zinc-900 dark:text-white">Bloomora</span>
                                                <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Skincare</span>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="flex-1 overflow-y-auto py-8">
                                        <div className="space-y-8 px-6">
                                            <div>
                                                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
                                                    Skincare Collections
                                                </h3>
                                                <div className="space-y-4">
                                                    {productTypes.map((category) => (
                                                        <Link
                                                            key={category.name}
                                                            href="#"
                                                            className="flex gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                                                            onClick={closeNavbar}
                                                        >
                                                            <div className="flex-shrink-0">
                                                                <div className="w-12 h-12 rounded-lg overflow-hidden">
                                                                    <img
                                                                        src={category.image}
                                                                        alt={category.name}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-zinc-900 dark:text-white">{category.name}</div>
                                                                <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                                                    {category.description}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
                                                    Skin Solutions
                                                </h3>
                                                <div className="space-y-4">
                                                    {skinConcerns.map((concern) => (
                                                        <Link
                                                            key={concern.name}
                                                            href="#"
                                                            className="block rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
                                                            onClick={closeNavbar}
                                                        >
                                                            <div className="h-20 relative">
                                                                <img
                                                                    src={concern.image}
                                                                    alt={concern.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-black/20" />
                                                                <div className="absolute inset-0 flex items-center p-4">
                                                                    <div className="font-medium text-white">{concern.name}</div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
                                        <div className="space-y-4">
                                            <Link
                                                href="#"
                                                className="block w-full text-center py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                                                onClick={closeNavbar}
                                            >
                                                Account
                                            </Link>
                                            <Link
                                                href="#"
                                                className="block w-full text-center py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors font-medium"
                                                onClick={closeNavbar}
                                            >
                                                Begin Your Ritual
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar