import React from "react";

const ConsumerCard = ({ consumer }) => {
  const initials = `${consumer.name.firstname[0]}${consumer.name.lastname[0]}`;

  return (
    <div
      className="
        group relative w-full max-w-sm overflow-hidden
        rounded-2xl border border-slate-700/60
        bg-slate-900
        shadow-xl shadow-black/20
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:border-indigo-500/60
        hover:shadow-2xl hover:shadow-indigo-500/20
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute -right-16 -top-16
          h-40 w-40 rounded-full
          bg-indigo-600/20 blur-3xl
          transition-all duration-500
          group-hover:bg-purple-500/30
          group-hover:scale-125
        "
      />

      {/* Header */}
      <div
        className="
          relative overflow-hidden
          bg-gradient-to-br
          from-indigo-700 via-blue-700 to-purple-700
          p-6
        "
      >
        {/* Decorative Circle */}
        <div
          className="
            absolute -right-8 -top-8
            h-28 w-28 rounded-full
            border border-white/10
            bg-white/5
            transition-transform duration-700
            group-hover:rotate-45 group-hover:scale-110
          "
        />

        <div className="relative flex items-center gap-4">
          {/* Avatar */}
          <div
            className="
              flex h-16 w-16 shrink-0 items-center justify-center
              rounded-2xl
              border border-white/20
              bg-white/10
              text-xl font-bold text-white
              shadow-lg shadow-black/20
              backdrop-blur-md
              transition-all duration-500
              group-hover:scale-110
              group-hover:rotate-2
            "
          >
            {initials.toUpperCase()}
          </div>

          {/* Name */}
          <div className="min-w-0">
            <h2
              className="
                truncate text-xl font-bold capitalize
                text-white
              "
            >
              {consumer.name.firstname} {consumer.name.lastname}
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              @{consumer.username}
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="relative space-y-4 p-6">

        {/* Email */}
        <div
          className="
            rounded-xl border border-slate-800
            bg-slate-950/50 p-3
            transition-all duration-300
            group-hover:border-slate-700
          "
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">
            Email
          </p>

          <p className="break-all text-sm text-slate-200">
            {consumer.email}
          </p>
        </div>

        {/* Phone */}
        <div
          className="
            rounded-xl border border-slate-800
            bg-slate-950/50 p-3
            transition-all duration-300
            group-hover:border-slate-700
          "
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">
            Phone
          </p>

          <p className="text-sm text-slate-200">
            {consumer.phone}
          </p>
        </div>

        {/* Address */}
        <div
          className="
            rounded-xl border border-slate-800
            bg-slate-950/50 p-3
            transition-all duration-300
            group-hover:border-indigo-500/30
          "
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">
            Address
          </p>

          <p className="text-sm leading-6 text-slate-200">
            {consumer.address.number}, {consumer.address.street}
            <br />

            <span className="capitalize text-slate-300">
              {consumer.address.city}
            </span>

            <br />

            <span className="text-slate-400">
              {consumer.address.zipcode}
            </span>
          </p>
        </div>

        {/* Footer */}
        <div
          className="
            flex items-center justify-between
            border-t border-slate-800
            pt-4
          "
        >
          <span className="text-sm text-slate-500">
            Consumer ID
          </span>

          <span
            className="
              rounded-full
              border border-indigo-500/20
              bg-indigo-500/10
              px-3 py-1
              text-sm font-semibold
              text-indigo-300
              transition-all duration-300
              group-hover:border-indigo-400/40
              group-hover:bg-indigo-500/20
              group-hover:text-indigo-200
            "
          >
            #{consumer.id}
          </span>
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className="
          h-1 w-0
          bg-gradient-to-r
          from-blue-500 via-indigo-500 to-purple-500
          transition-all duration-500
          group-hover:w-full
        "
      />
    </div>
  );
};

export default ConsumerCard;