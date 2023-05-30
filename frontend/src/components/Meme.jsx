import React from "react";

const Meme = () => {
  return (
    <main>
      <form>
        <div className="flex justify-center items-center space-x-16 my-6">
          <div className="flex flex-col">
            <label htmlFor="top" className="font-bold text-sm mb-2">
              Top
            </label>
            <input
              type="text"
              name="top"
              id="top"
              className="border-2 border-slate-300 w-56 h-8 hover:border-blue-200 focus:border-blue-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bottom" className="font-bold text-sm mb-2">
              Bottom
            </label>
            <input
              type="text"
              name="bottom"
              id="bottom"
              className="border-2 border-slate-300 w-56 h-8 hover:border-blue-200 focus:border-blue-200"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-2 px-4 rounded-md"
          >
            Get a new meme
          </button>
        </div>
      </form>
    </main>
  );
};

export default Meme;
