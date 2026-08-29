import React from 'react';
import ProductCardSkeleton from '../components/ProductCardSkeliton';

export default function ProductsPageSkeleton({ count = 8 }) {
  return (
    <div className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="h-8 w-48 bg-slate-800 rounded-lg animate-pulse" />
            <div className="h-4 w-72 bg-slate-800/60 rounded-md animate-pulse" />
          </div>
          
          {/* Controls: Search & Filter Placeholders */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-44 bg-slate-900 border border-slate-800 rounded-xl animate-pulse" />
            <div className="h-10 w-28 bg-slate-900 border border-slate-800 rounded-xl animate-pulse" />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {Array.from({ length: count }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>

      </div>
    </div>
  );
}