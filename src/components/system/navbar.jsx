"use client"

import { useState, useEffect } from 'react';
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
import { getAllProductsNavigationInfo } from '@/actions';

const Navbar = () => {
    const [navIsOpened, setNavIsOpened] = useState(false);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const data = await getAllProductsNavigationInfo();
                setProducts(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const closeNavbar = () => setNavIsOpened(false);

    // Group products by first letter for the menu (you might want to group by category instead)
    const productGroups = products.reduce((groups, product) => {
        if (!product?.title) return groups;

        const firstLetter = product.title.charAt(0).toUpperCase();
        if (!groups[firstLetter]) {
            groups[firstLetter] = [];
        }
        groups[firstLetter].push(product);
        return groups;
    }, {});

    const renderProductSkeleton = (count = 6) => {
        return Array.from({ length: count }).map((_, index) => (
            <div key={index} className="group flex gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 animate-pulse">
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg bg-zinc-300 dark:bg-zinc-700" />
                </div>
                <div className="flex-1 space-y-2">
                    <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-3/4" />
                    <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded w-full" />
                    <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded w-5/6" />
                </div>
            </div>
        ));
    };

    const renderMobileProductSkeleton = (count = 4) => {
        return Array.from({ length: count }).map((_, index) => (
            <div key={index} className="flex gap-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 animate-pulse">
                <div className="w-12 h-12 rounded-lg bg-zinc-300 dark:bg-zinc-700" />
                <div className="flex-1 space-y-2">
                    <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-1/2" />
                    <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded w-3/4" />
                </div>
            </div>
        ));
    };

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
                                        Our Products
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[800px] p-4">
                                        {isLoading ? (
                                            <div className="grid grid-cols-2 gap-2">
                                                {renderProductSkeleton()}
                                            </div>
                                        ) : products.length > 0 ? (
                                            <div className="grid grid-cols-2 gap-2">
                                                {products.slice(0, 6).map((product) => (
                                                    <Link
                                                        key={product._id}
                                                        href={`/products/${product.slug?.current || '#'}`}
                                                        className="group flex gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                                                    >
                                                        <div className="flex-shrink-0">
                                                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                                                {product.coverImageUrl ? (
                                                                    <Image
                                                                        src={product.coverImageUrl}
                                                                        alt={product.title}
                                                                        width={500}
                                                                        placeholder='blur'
                                                                        blurDataURL={product.coverImageMetadata?.lqip || ''}
                                                                        height={500}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                    />
                                                                ) : (
                                                                    <div className="text-zinc-400 text-xs text-center p-2">
                                                                        No Image
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-zinc-900 dark:text-white group-hover:text-accent-foreground dark:group-hover:text-accent-foreground transition-colors mb-2">
                                                                {product.title || 'Untitled Product'}
                                                            </h4>
                                                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed line-clamp-2">
                                                                {product.description || 'Discover this premium skincare solution.'}
                                                            </p>
                                                            <div className="flex items-center">
                                                                <span className="text-xs text-accent-foreground font-medium bg-accent-foreground/10 px-2 py-1 rounded-md">
                                                                    Shop Now
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-8">
                                                <p className="text-zinc-500 dark:text-zinc-400">
                                                    No products available at the moment.
                                                </p>
                                            </div>
                                        )}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-4 py-2 data-[state=open]:text-zinc-900 data-[state=open]:dark:text-white transition-colors duration-200">
                                        Shop By Concern
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[800px] p-6">
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <Link
                                                    href="/concerns/anti-aging"
                                                    className="group block rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600"
                                                >
                                                    <div className="relative h-32 overflow-hidden bg-accent-foreground">
                                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <h4 className="font-semibold text-white text-lg group-hover:scale-105 transition-transform">
                                                                Anti-Aging
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="p-4">
                                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                                                            Target fine lines and wrinkles with our advanced formulations
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/concerns/hydration"
                                                    className="group block rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600"
                                                >
                                                    <div className="relative h-32 overflow-hidden bg-accent">
                                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <h4 className="font-semibold text-white text-lg group-hover:scale-105 transition-transform">
                                                                Deep Hydration
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="p-4">
                                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                                                            Replenish moisture for supple, radiant skin
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                {['Brightening', 'Acne Care', 'Sensitive Skin'].map((concern) => (
                                                    <Link
                                                        key={concern}
                                                        href={`/concerns/${concern.toLowerCase().replace(' ', '-')}`}
                                                        className="group text-center p-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                                                    >
                                                        <h4 className="font-medium text-zinc-900 dark:text-white group-hover:text-accent-foreground transition-colors">
                                                            {concern}
                                                        </h4>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-4 py-2 data-[state=open]:text-zinc-900 data-[state=open]:dark:text-white transition-colors duration-200">
                                        Ingredients
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[800px] p-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                {
                                                    name: 'Vitamin C',
                                                    description: 'Powerful antioxidant for brightening and protection',
                                                    color: 'from-orange-400 to-yellow-400'
                                                },
                                                {
                                                    name: 'Hyaluronic Acid',
                                                    description: 'Intense hydration and moisture retention',
                                                    color: 'from-blue-400 to-purple-400'
                                                },
                                                {
                                                    name: 'Natural Clays',
                                                    description: 'Detoxifying and purifying properties',
                                                    color: 'from-amber-400 to-brown-400'
                                                },
                                                {
                                                    name: 'Botanical Extracts',
                                                    description: 'Gentle, natural solutions for sensitive skin',
                                                    color: 'from-green-400 to-emerald-400'
                                                }
                                            ].map((ingredient) => (
                                                <Link
                                                    key={ingredient.name}
                                                    href={`/ingredients/${ingredient.name.toLowerCase().replace(' ', '-')}`}
                                                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${ingredient.color} group-hover:scale-110 transition-transform duration-300`} />
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

                                <Link
                                    href="/about"
                                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-4 py-2 transition-colors duration-200"
                                >
                                    Our Story
                                </Link>
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
                                                    Our Products
                                                </h3>
                                                <div className="space-y-4">
                                                    {isLoading ? (
                                                        renderMobileProductSkeleton()
                                                    ) : products.length > 0 ? (
                                                        products.slice(0, 4).map((product) => (
                                                            <Link
                                                                key={product._id}
                                                                href={`/products/${product.slug?.current || '#'}`}
                                                                className="flex gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                                                                onClick={closeNavbar}
                                                            >
                                                                <div className="flex-shrink-0">
                                                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                                                        {product.coverImageUrl ? (
                                                                            <img
                                                                                src={product.coverImageUrl}
                                                                                alt={product.title}
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                        ) : (
                                                                            <div className="text-zinc-400 text-xs text-center">
                                                                                No Image
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-medium text-zinc-900 dark:text-white">
                                                                        {product.title || 'Untitled Product'}
                                                                    </div>
                                                                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                                                                        {product.description || 'Discover this premium skincare solution.'}
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        ))
                                                    ) : (
                                                        <p className="text-zinc-500 dark:text-zinc-400 text-center py-4">
                                                            No products available
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
                                                    Skin Concerns
                                                </h3>
                                                <div className="space-y-3">
                                                    {['Anti-Aging', 'Hydration', 'Brightening', 'Acne Care', 'Sensitive Skin'].map((concern) => (
                                                        <Link
                                                            key={concern}
                                                            href={`/concerns/${concern.toLowerCase().replace(' ', '-')}`}
                                                            className="block py-3 px-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-zinc-700 dark:text-zinc-300"
                                                            onClick={closeNavbar}
                                                        >
                                                            {concern}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
                                                    Discover
                                                </h3>
                                                <div className="space-y-3">
                                                    <Link
                                                        href="/ingredients"
                                                        className="block py-3 px-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-zinc-700 dark:text-zinc-300"
                                                        onClick={closeNavbar}
                                                    >
                                                        Our Ingredients
                                                    </Link>
                                                    <Link
                                                        href="/about"
                                                        className="block py-3 px-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-zinc-700 dark:text-zinc-300"
                                                        onClick={closeNavbar}
                                                    >
                                                        Our Story
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
                                        <div className="space-y-4">
                                            <Link
                                                href="/account"
                                                className="block w-full text-center py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                                                onClick={closeNavbar}
                                            >
                                                My Account
                                            </Link>
                                            <Link
                                                href="/products"
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