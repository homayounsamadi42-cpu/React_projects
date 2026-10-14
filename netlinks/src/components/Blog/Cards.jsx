import React from 'react';
import { cardsData } from '../../data/cards';

export default function CardsList() {
  return (
    <div className='bg-orange-50/50 py-12'>
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8 ">
        {cardsData.map((card) => {
          const hasImage = !!card.image;

          return (
            <div 
              key={card.id} 
              className="group bg-white rounded-[2.5rem] border border-gray-100/70 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_-5px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                
                {hasImage && (
                  <div className="w-full md:w-[38%] h-auto self-stretch flex-shrink-0 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                    />
                  </div>
                )}
                <div className="flex-1 w-full min-w-0 flex flex-col p-8 md:p-12 md:pl-16 justify-center">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-gray-400 tracking-wider uppercase mb-4">
                    <span>{card.date}</span>
                    <span className="text-gray-300">•</span>
                    <span>{card.readTime}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 font-semibold">{card.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-[32px] font-bold text-slate-900 leading-[1.25] tracking-tight mb-4 group-hover:text-slate-950 transition-colors">
                    {card.title}
                  </h2>
                  <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 group-hover:text-gray-800 transition-colors duration-200">
                      Read 
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
