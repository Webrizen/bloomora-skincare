import React from 'react';
import { getProductBySlug } from '@/actions';
import Image from 'next/image';
import { Star, Heart, Share2, Truck, Shield, RotateCcw, CheckCircle } from 'lucide-react';

export default async function page({ params }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Product Grid Layout */}
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Image Section - Left */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {/* Main Image */}
                            <div className="md:col-span-4">
                                <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-50 relative group">
                                    <Image
                                        src={product.mainImageUrl}
                                        alt={product.mainImage?.alt || product.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        priority
                                    />
                                    {/* Hover Actions */}
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform">
                                            <Heart size={20} className="text-zinc-700" />
                                        </button>
                                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform">
                                            <Share2 size={20} className="text-zinc-700" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Thumbnail Stack (Vertical) */}
                            <div className="md:col-span-1 flex md:flex-col gap-3 overflow-x-auto">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="flex-shrink-0 aspect-square rounded-2xl bg-zinc-100 overflow-hidden relative min-w-[80px]">
                                        <Image
                                            src={product.mainImageUrl}
                                            alt={`${product.title} view ${item}`}
                                            fill
                                            className="object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Info Section - Right */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-8 space-y-6">
                            
                            {/* Header */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                                        Bestseller
                                    </span>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                                        ))}
                                        <span className="text-sm text-zinc-500 ml-1">(128 reviews)</span>
                                    </div>
                                </div>
                                
                                <h1 className="text-3xl lg:text-4xl font-light text-zinc-900 leading-tight">
                                    {product.title}
                                </h1>
                                
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Price & Add to Cart */}
                            <div className="space-y-4">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl font-semibold text-zinc-900">
                                        ${product.price}
                                    </span>
                                    <span className="text-lg text-zinc-500 line-through">$269</span>
                                    <span className="px-2 py-1 bg-rose-50 text-rose-700 rounded text-sm font-medium">
                                        Save 13%
                                    </span>
                                </div>
                                
                                <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-4 px-6 rounded-2xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group">
                                    <span>Add to Cart</span>
                                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    </div>
                                </button>
                            </div>

                            {/* Key Benefits Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {product.benefits?.slice(0, 4).map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-2 p-3 rounded-xl bg-zinc-50">
                                        <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                                        <span className="text-sm text-zinc-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Trust Badges */}
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <div className="flex items-center gap-2">
                                    <Truck size={20} className="text-zinc-600" />
                                    <span className="text-sm font-medium text-zinc-700">Free Shipping</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield size={20} className="text-zinc-600" />
                                    <span className="text-sm font-medium text-zinc-700">2-Year Warranty</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RotateCcw size={20} className="text-zinc-600" />
                                    <span className="text-sm font-medium text-zinc-700">Easy Returns</span>
                                </div>
                            </div>

                            {/* Key Ingredients */}
                            <div className="space-y-3">
                                <h3 className="font-semibold text-zinc-900">Key Ingredients</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.keyIngredients?.map((ingredient, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-2 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-700 hover:border-zinc-300 transition-colors"
                                        >
                                            {ingredient}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Information Grid - Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 pt-8 border-t border-zinc-200">
                    
                    {/* Product Description */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="prose prose-zinc max-w-none">
                            <h3 className="text-2xl font-light text-zinc-900 mb-6">Product Details</h3>
                            {product.body?.map((block, index) => (
                                <div key={index} className="text-zinc-600 leading-relaxed space-y-4">
                                    {block.children?.map((child, childIndex) => (
                                        <span 
                                            key={childIndex}
                                            className={child.marks?.includes('strong') ? 'font-semibold text-zinc-900' : ''}
                                        >
                                            {child.text}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Benefits List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {product.benefits?.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                                    <span className="text-zinc-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specifications & Category */}
                    <div className="space-y-6">
                        <div className="bg-zinc-50 rounded-2xl p-6">
                            <h4 className="font-semibold text-zinc-900 mb-4">Product Specifications</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-zinc-200">
                                    <span className="text-zinc-600">Category</span>
                                    <span className="font-medium text-zinc-900">
                                        {product.categories?.[0]?.title}
                                    </span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-zinc-200">
                                    <span className="text-zinc-600">Skin Type</span>
                                    <span className="font-medium text-zinc-900">All Skin Types</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-zinc-200">
                                    <span className="text-zinc-600">Texture</span>
                                    <span className="font-medium text-zinc-900">Rich Cream</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-zinc-600">Vegan</span>
                                    <span className="font-medium text-emerald-600">Yes</span>
                                </div>
                            </div>
                        </div>

                        {/* Usage Tips */}
                        <div className="bg-accent-foreground/5 rounded-2xl p-6">
                            <h4 className="font-semibold text-accent-foreground mb-3">Recommended Use</h4>
                            <ul className="space-y-2 text-accent-foreground">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground" />
                                    Apply morning and evening
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground" />
                                    Use after cleansing and toning
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground" />
                                    Follow with SPF during daytime
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}