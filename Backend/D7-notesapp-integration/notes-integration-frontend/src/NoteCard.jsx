import React from "react";

const NoteCard = ({ note, id, setNotes,  editNote, deleteNote}) => {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-yellow-200/30 bg-[#f6f0df] p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Notebook lines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_31px,#b8c7d9_32px)]" />

      {/* Red notebook margin */}
      <div className="absolute left-4 top-0 h-full w-px bg-red-300/60" />

      {/* Content */}
      <div className="relative z-10 pl-3">
        {/* Title */}
        <h2 className="mb-3 line-clamp-1 font-serif text-xl font-bold text-gray-800">
          {note.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-4 font-['Caveat'] min-h-[96px] text-sm leading-6 text-gray-600">
          {note.description}
        </p>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 mt-6 flex items-center justify-between border-t border-gray-300/60 pt-4">
        <span className="text-xs text-gray-400">Note</span>

        <div className="flex gap-2">
          {/* Update Button */}
          <button 
          onClick={()=>editNote(note)}
          className="rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-700 hover:scale-105 active:scale-95">
            Update
          </button>

          {/* Delete Button */}
          <button 
            onClick={()=>deleteNote(id)}
            className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white active:scale-95">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
