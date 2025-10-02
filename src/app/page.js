"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { TextAnimate } from "@/components/ui/text-animate";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Heart, Share2, ShoppingBag, Star, CheckCircle, Clock } from 'lucide-react';
import { getAllProducts } from "@/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { features, benefits, featuredIngredients, sustainabilityFeatures, skincareRituals, testimonials, skinConcerns } from "@/enums";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
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

  const stats = {
    rating: "4.9/5",
    customers: "50K+",
    recommendation: "97%"
  };

  // Transform products for hero carousel
  const heroProducts = products.slice(0, 3).map((product, index) => ({
    id: product._id,
    title: product.title || "Premium Skincare",
    subtitle: "Advanced Formula",
    slug: product.slug?.current || null,
    description: product.description || "Experience the transformative power of our carefully crafted skincare solution.",
    price: product.price ? `$${product.price}` : "$89.00",
    image: product.coverImageUrl || "/api/placeholder/800/1000",
    blurDataURL: product.coverImageMetadata?.lqip || '',
    badge: "New Arrival",
    cta: "Shop Now",
    features: product.benefits?.slice(0, 4) || [
      "Deep hydration",
      "Visible results",
      "Gentle formula",
      "24/7 protection"
    ]
  }));

  // Fallback hero data if no products
  const fallbackHeroProducts = [
    {
      id: 1,
      title: "Premium Skincare Collection",
      subtitle: "Transform Your Skin",
      description: "Discover our carefully crafted formulas designed to deliver visible results and radiant skin.",
      price: "$89.00",
      image: "/api/placeholder/800/1000",
      badge: "Featured",
      cta: "Explore Collection",
      features: ["Deep hydration", "Visible results", "Gentle formula", "24/7 protection"]
    }
  ];

  const displayHeroProducts = heroProducts.length > 0 ? heroProducts : fallbackHeroProducts;

  const renderHeroSkeleton = () => (
    <CarouselItem className="relative">
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl space-y-6">
            <div className="w-32 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse" />
            <div className="w-3/4 h-16 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="w-1/2 h-8 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="w-full h-20 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="flex gap-6">
              <div className="w-24 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse" />
              <div className="w-40 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );

  return (
    <main>
      <section className="relative bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)]" />
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="relative"
        >
          <CarouselContent className="h-screen max-h-[91.5vh]">
            {isLoading ? (
              renderHeroSkeleton()
            ) : (
              displayHeroProducts.map((product) => (
                <CarouselItem key={product.id} className="relative">
                  <div className="relative h-screen flex items-center">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={1000}
                        height={1000}
                        placeholder="blur"
                        blurDataURL={product.blurDataURL}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/20" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">
                      <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                          <TextAnimate animation="blurInUp" className="text-sm font-medium text-white">
                            {product.badge}
                          </TextAnimate>
                        </div>

                        {/* Title & Subtitle */}
                        <TextAnimate animation="blurIn" as="h1" className="text-5xl lg:text-7xl font-light text-white mb-4 leading-tight">
                          {product.title}
                        </TextAnimate>
                        <TextAnimate animation="blurIn" as="h2" className="text-xl lg:text-2xl text-zinc-200 mb-6 font-light">
                          {product.subtitle}
                        </TextAnimate>

                        {/* Description */}
                        <TextAnimate animation="blurIn" as="p" className="text-lg text-zinc-300 mb-8 max-w-xl leading-relaxed">
                          {product.description}
                        </TextAnimate>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <TextAnimate animation="blurIn" as="span" className="text-sm text-zinc-300">{`•  ${feature}`}</TextAnimate>
                            </div>
                          ))}
                        </div>

                        {/* Price & CTA */}
                        <div className="flex items-center gap-6 mb-8">
                          <TextAnimate animation="blurIn" className="text-3xl font-light text-white">
                            {product.price}
                          </TextAnimate>
                          <TextAnimate as="button" animation="blurIn" className="group cursor-pointer relative bg-white text-zinc-900 px-8 py-4 rounded-full font-medium hover:bg-zinc-100 transition-all duration-300 hover:scale-105" onClick={() => {
                            router.push(`/products/${product.slug || product.id}`);
                          }}>
                            {product.cta}
                          </TextAnimate>
                        </div>

                        {/* Additional Actions */}
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
                            <Heart size={20} />
                            <TextAnimate animation="blurInUp" className="text-sm">Add to Wishlist</TextAnimate>
                          </button>
                          <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
                            <Share2 size={20} />
                            <TextAnimate animation="blurInUp" className="text-sm">Share</TextAnimate>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product Preview */}
                    <div className="absolute right-8 bottom-28 z-10 hidden xl:block">
                      <div className="relative">
                        <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={1000}
                            height={1000}
                            placeholder="blur"
                             blurDataURL={product.blurDataURL}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-xl">
                          <div className="flex items-center gap-3">
                            <ShoppingBag size={24} className="text-zinc-700 dark:text-zinc-300" />
                            <div>
                              <div className="font-semibold text-zinc-900 dark:text-white">
                                In Stock
                              </div>
                              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                Free shipping worldwide
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))
            )}
          </CarouselContent>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-center gap-2">
              {(isLoading ? [1] : displayHeroProducts).map((_, index) => (
                <button
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </section>
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 dark:from-purple-900/30 dark:to-pink-900/30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30 dark:from-blue-900/30 dark:to-cyan-900/30" />

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Header Section */}
          <div className="grid grid-cols-1 gap-12 mb-20">
            <div className="relative w-full">
              <TextAnimate
                as="h2"
                animation="blurInUp"
                by="word"
                className="text-4xl lg:text-8xl text-zinc-900 dark:text-white"
              >
                Beyond Every Beauty, we care for you Skincare.
              </TextAnimate>
              <TextAnimate
                as="p"
                animation="slideUp"
                delay={0.3}
                className="text-lg mt-20 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md ml-auto"
              >
                We believe skincare should be a transformative experience—combining cutting-edge science with
                the healing power of nature to deliver visible, lasting results.
              </TextAnimate>
            </div>
          </div>

          {/* Main Features */}
          <div className="space-y-32 -mt-20">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${feature.position === 'right' ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image Side */}
                <div className={`relative ${feature.position === 'left' ? 'lg:order-1' : 'lg:order-2'} ${feature.offset}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-accent-foreground p-8">
                    <div className="w-full h-96 bg-zinc-200 dark:bg-zinc-700 rounded-2xl animate-pulse" />
                    
                    {/* Floating Badge */}
                    <div className={`absolute top-6 ${feature.position === 'left' ? 'right-6' : 'left-6'} flex items-center gap-2 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg`}>
                      <div className="w-2 h-2 rounded-full bg-accent-foreground" />
                      <TextAnimate
                        animation="blurIn"
                        delay={0.5}
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        {feature.stats}
                      </TextAnimate>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -z-10 w-32 h-32 bg-accent-foreground rounded-full blur-xl opacity-20 ${feature.position === 'left' ? '-bottom-8 -left-8' : '-top-8 -right-8'}`} />
                </div>

                {/* Content Side */}
                <div className={`flex flex-col justify-center ${feature.position === 'left' ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-accent-foreground shadow-lg">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <TextAnimate
                      animation="fadeIn"
                      delay={0.2}
                      className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
                    >
                      {`Feature ${index + 1}`}
                    </TextAnimate>
                  </div>

                  <TextAnimate
                    as="h3"
                    animation="slideUp"
                    by="word"
                    delay={0.3}
                    className="text-3xl lg:text-4xl font-semibold text-zinc-900 dark:text-white mb-6 leading-tight"
                  >
                    {feature.title}
                  </TextAnimate>

                  <TextAnimate
                    animation="slideUp"
                    delay={0.5}
                    className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed"
                  >
                    {feature.description}
                  </TextAnimate>

                  <button className="group inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium transition-colors">
                    <TextAnimate
                      animation="slideRight"
                      delay={0.7}
                    >
                      Learn more
                    </TextAnimate>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-32">
            {/* Benefits List */}
            <div className="lg:col-span-2">
              <TextAnimate
                as="h3"
                animation="blurInUp"
                by="word"
                className="text-2xl md:text-6xl font-semibold text-zinc-900 dark:text-white mb-8"
              >
                Our Commitment to Excellence.
              </TextAnimate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700">
                    <CheckCircle size={20} className="text-accent-foreground flex-shrink-0" />
                    <TextAnimate
                      animation="slideRight"
                      delay={0.1 * index}
                      className="text-zinc-700 dark:text-zinc-300"
                    >
                      {benefit}
                    </TextAnimate>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div className="sticky top-24 bg-gradient-to-br from-accent-foreground to-zinc-800 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <TextAnimate
                      animation="fadeIn"
                      delay={0.2}
                      className="text-sm font-medium"
                    >
                      Customer Loved
                    </TextAnimate>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <TextAnimate
                        animation="scaleUp"
                        delay={0.3}
                        className="text-4xl font-bold mb-2"
                      >
                        {stats.rating}
                      </TextAnimate>
                      <TextAnimate
                        animation="fadeIn"
                        delay={0.4}
                        className="text-zinc-300"
                      >
                        Average Rating
                      </TextAnimate>
                    </div>

                    <div className="h-px bg-white/20" />

                    <div>
                      <TextAnimate
                        animation="scaleUp"
                        delay={0.5}
                        className="text-4xl font-bold mb-2"
                      >
                        {stats.customers}
                      </TextAnimate>
                      <TextAnimate
                        animation="fadeIn"
                        delay={0.6}
                        className="text-zinc-300"
                      >
                        Happy Customers
                      </TextAnimate>
                    </div>

                    <div className="h-px bg-white/20" />

                    <div>
                      <TextAnimate
                        animation="scaleUp"
                        delay={0.7}
                        className="text-4xl font-bold mb-2"
                      >
                        {stats.recommendation}
                      </TextAnimate>
                      <TextAnimate
                        animation="fadeIn"
                        delay={0.8}
                        className="text-zinc-300"
                      >
                        Would Recommend
                      </TextAnimate>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="relative py-24 bg-white dark:bg-zinc-900 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <TextAnimate as="h2" animation="blurInUp" className="text-4xl lg:text-5xl font-light text-zinc-900 dark:text-white mb-6">
              Potent by Nature
            </TextAnimate>
            <TextAnimate as="p" animation="slideUp" delay={0.2} className="text-lg text-zinc-600 dark:text-zinc-400">
              We harness the power of botanicals and bio-active ingredients, meticulously selected for their proven efficacy and gentle compatibility with your skin.
            </TextAnimate>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredIngredients.map((ingredient, index) => (
              <div
                key={ingredient.name}
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br ${ingredient.color} dark:${ingredient.darkColor} border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ingredient.icon size={32} className="text-zinc-700 dark:text-zinc-300" />
                </div>
                {/* Name & Benefit */}
                <TextAnimate as="h3" animation="slideUp" className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {ingredient.name}
                </TextAnimate>
                <TextAnimate as="p" animation="slideUp" delay={0.1} className="text-sm font-medium text-accent-foreground mb-4">
                  {ingredient.benefit}
                </TextAnimate>
                {/* Description */}
                <TextAnimate as="p" animation="slideUp" delay={0.2} className="text-zinc-600 dark:text-zinc-400">
                  {ingredient.description}
                </TextAnimate>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: SKINCARE RITUALS SECTION --- */}
      <section className="relative py-24 bg-zinc-50 dark:bg-zinc-800/20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <TextAnimate as="h2" animation="blurInUp" className="text-4xl lg:text-5xl font-light text-zinc-900 dark:text-white mb-6">
              Your Ritual for Radiance
            </TextAnimate>
            <TextAnimate as="p" animation="slideUp" delay={0.2} className="text-lg text-zinc-600 dark:text-zinc-400">
              Transform your daily routine into a moment of self-care. Follow these simple steps to unlock your skin's natural glow.
            </TextAnimate>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-accent-foreground to-transparent hidden md:block"></div>

            <div className="space-y-12">
              {skincareRituals.map((ritual, index) => (
                <div key={ritual.step} className="flex flex-col md:flex-row items-center gap-8 group">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl bg-accent-foreground flex items-center justify-center text-white font-semibold text-lg relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {ritual.step}
                    </div>
                    <div className="absolute -inset-4 bg-accent-foreground/20 rounded-3xl blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="mt-4 text-2xl text-center md:hidden">{ritual.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left bg-white dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 group-hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <TextAnimate as="h3" animation="slideRight" className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                          {ritual.name}
                        </TextAnimate>
                        <TextAnimate as="p" animation="slideRight" delay={0.1} className="text-zinc-600 dark:text-zinc-400 mb-2">
                          {ritual.description}
                        </TextAnimate>
                      </div>
                      <div className="flex items-center gap-4 justify-center md:justify-start">
                        <TextAnimate as="span" animation="slideLeft" delay={0.2} className="text-sm font-medium text-accent-foreground flex items-center gap-1">
                          {ritual.time}
                        </TextAnimate>
                        <div className="text-2xl hidden md:block">{ritual.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: SUSTAINABILITY PROMISE SECTION --- */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10" />
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <TextAnimate as="h2" animation="blurInUp" className="text-4xl lg:text-5xl font-light text-zinc-900 dark:text-white mb-6">
              Our Promise to the Planet
            </TextAnimate>
            <TextAnimate as="p" animation="slideUp" delay={0.2} className="text-lg text-zinc-600 dark:text-zinc-400">
              True beauty doesn't cost the earth. We are committed to transparency, ethical sourcing, and sustainable practices at every step.
            </TextAnimate>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg inline-flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-accent-foreground" />
                </div>
                <TextAnimate as="p" animation="fadeIn" delay={0.1 * index} className="font-medium text-zinc-700 dark:text-zinc-300">
                  {feature.text}
                </TextAnimate>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: TESTIMONIALS & PRESS SECTION --- */}
      <section className="relative py-24 bg-zinc-900 dark:bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <TextAnimate as="h2" animation="blurInUp" className="text-4xl lg:text-5xl font-light text-white mb-6">
                  Glowing Reviews
                </TextAnimate>
                <TextAnimate as="p" animation="slideUp" delay={0.2} className="text-lg text-zinc-300">
                  Discover what our community has to say about their Bloomora journey.
                </TextAnimate>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="group bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-3xl p-8 hover:bg-zinc-800/70 transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    {/* Quote */}
                    <TextAnimate as="blockquote" animation="slideUp" className="text-zinc-200 italic text-lg mb-6">
                      {testimonial.quote}
                    </TextAnimate>
                    {/* Author */}
                    <div>
                      <TextAnimate as="p" animation="slideRight" delay={0.1} className="font-semibold text-white">
                        {testimonial.author}
                      </TextAnimate>
                      <TextAnimate as="p" animation="slideRight" delay={0.2} className="text-sm text-zinc-400">
                        {testimonial.role}
                      </TextAnimate>
                      <TextAnimate as="p" animation="slideRight" delay={0.3} className="text-xs text-accent-foreground mt-1">
                        {testimonial.skinType}
                      </TextAnimate>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    </main>
  );
}