import React from 'react';

export default function ProductCardSkeleton() {
  return (
    <div className="relative w-full max-w-[340px] rounded-3xl border border-slate-800/80 bg-slate-950 p-6 overflow-hidden shadow-2xl">
      {/* Shimmer Sweep Animation */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-amber-500/[0.04] to-transparent" />

      {/* Top Badge Skeleton */}
      <div className="absolute top-4 right-4 z-10 w-16 h-5 rounded-full bg-slate-800/70 animate-pulse" />

      {/* Product Image Area Skeleton */}
      <div className="relative w-full h-52 mb-5 rounded-2xl bg-slate-900/80 border border-slate-800/60 flex items-center justify-center overflow-hidden">
        {/* Subtle glowing center placeholder */}
        <div className="w-24 h-24 rounded-full bg-slate-800/50 animate-pulse" />
      </div>

      {/* Product Details Skeleton */}
      <div className="space-y-3">
        {/* Brand & Stock Pill */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 bg-amber-500/20 rounded-md animate-pulse" />
          <div className="h-4 w-14 bg-slate-800/80 rounded-md animate-pulse" />
        </div>

        {/* Title */}
        <div className="h-5 w-4/5 bg-slate-800 rounded-lg animate-pulse" />

        {/* Description Lines */}
        <div className="space-y-1.5 pt-1">
          <div className="h-2.5 w-full bg-slate-800/60 rounded animate-pulse" />
          <div className="h-2.5 w-2/3 bg-slate-800/60 rounded animate-pulse" />
        </div>

        {/* Rating & Quantity Metadata */}
        <div className="flex items-center space-x-2 pt-1">
          <div className="h-3.5 w-10 bg-amber-500/10 rounded animate-pulse" />
          <div className="h-1.5 w-1.5 rounded-full bg-slate-800" />
          <div className="h-3.5 w-20 bg-slate-800/60 rounded animate-pulse" />
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
          <div className="space-y-1">
            <div className="h-2 w-8 bg-slate-800/60 rounded animate-pulse" />
            <div className="h-6 w-16 bg-slate-800 rounded-md animate-pulse" />
          </div>

          <div className="h-9 w-28 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}