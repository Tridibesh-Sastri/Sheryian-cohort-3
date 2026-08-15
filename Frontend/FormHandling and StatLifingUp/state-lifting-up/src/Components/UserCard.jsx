import React from 'react';

const UserCard = ({ user , onDelete }) => {
  return (
    <div className="h-full w-full flex flex-col  bg-slate-950 rounded-2xl shadow-lg shadow-blue-400 border border-slate-800 overflow-hidden p-3 justify-between hover:shadow-amber-500">
      {/* Circular/Square Responsive Avatar */}
      <div className="w-full flex-1 min-h-0 flex items-center justify-center">
        <div className="h-full aspect-square  rounded-full overflow-hidden border-2 border-amber-400 bg-slate-800">
          <img
            src={user.image}
            alt={user.fullname}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Compact User Details */}
      <div className="flex h-1/2 flex-col gap-0.5 mt-2 text-left bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 justify-between ">
        <h2 className="text-sm font-bold text-amber-400 truncate">
          {user.fullname}
        </h2>
        <p className="text-xs text-slate-300 truncate">
          <span className="text-slate-400 font-semibold">User:</span> {user.username}
        </p>
        <p className="text-xs text-slate-300 truncate">
          <span className="text-slate-400 font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-xs text-slate-300 truncate">
          <span className="text-slate-400 font-semibold">Pass:</span> {user.password}
        </p>
        <button
          onClick={() => onDelete(user.email)}
          className="bg-amber-500 hover:bg-amber-900 text-slate-900 font-bold py-1 px-4 rounded-full transition duration-300">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;