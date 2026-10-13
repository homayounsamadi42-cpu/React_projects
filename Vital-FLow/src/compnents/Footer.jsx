import React from "react";

export default function Footer() {
  return (
    <div className="bg-blue-600 flex gap-10 p-10 text-white justify-between">
      <div className="w-100">
        <li>
          <ul>Contact</ul>
        </li>
        <h1>Contact us for more information & get started</h1>
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <div className="flex gap-20">
            <div className="flex flex-col">
              <label for="FullName" className="text-lg font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="FullName"
                className="bg-transparent border-b border-white/90 focus:border-white focus:outline-none  text-lg w-full transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label for="email" className="text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-b border-white/70 focus:border-white focus:outline-none pb-2 text-lg w-full transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Another */}
        <div>
          <div className="flex gap-20">
            <div className="flex flex-col">
              <label for="phone" className="text-lg font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-transparent border-b border-white/90 focus:border-white focus:outline-none  text-lg w-full transition-colors"
              />
            </div>
            {/* Date */}
            <div className="flex flex-col">
              <label for="date" className="text-lg font-medium mb-2">
                &nbsp;
              </label>
              <input
                type="text"
                id="date"
                placeholder="mm/dd/yyyy"
                className="bg-transparent border-b border-white/70 focus:border-white focus:outline-none pb-2 text-lg w-full transition-colors placeholder-amber-300"
              />
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <label for="massage" className="text-lg font-medium mb-2">
              massage or adational details
            </label>
            <input
              type="text"
              id="massage"
              className="bg-transparent border-b border-white/70 focus:border-white focus:outline-none pb-2 text-lg w-full transition-colors placeholder-amber-300"
            />
          </div>
          <div className="mt-10">
            <button type="submit"
            className="bg-white text-blue-500 py-2 font-bold px-5 rounded-4xl">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
