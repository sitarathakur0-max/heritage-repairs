import React, { useState } from 'react';
import { Eye, Tag, Sparkles } from 'lucide-react';
import { galleryItems } from '../data/businessData';
import { GalleryItem } from '../types';
import { GalleryModal } from './GalleryModal';

interface GallerySectionProps {
  showTitle?: boolean;
  limit?: number;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  showTitle = true,
  limit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Inspiration' },
    { id: 'slate', label: 'Slate & Tiling' },
    { id: 'chimney', label: 'Chimneys & Flashing' },
    { id: 'flat', label: 'Flat Roofing' },
    { id: 'gutters', label: 'Gutters & Drainage' },
    { id: 'london', label: 'London Roofscapes' },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handlePrev = () => {
    if (!activeModalItem) return;
    const currentIndex = displayItems.findIndex((it) => it.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + displayItems.length) % displayItems.length;
    setActiveModalItem(displayItems[prevIndex]);
  };

  const handleNext = () => {
    if (!activeModalItem) return;
    const currentIndex = displayItems.findIndex((it) => it.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % displayItems.length;
    setActiveModalItem(displayItems[nextIndex]);
  };

  return (
    <div>
      {showTitle && (
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17202c] border border-[#263445] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
            Roofing Inspiration
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8]">
            Architectural reference examples illustrating slate alignment, leadwork, roof details,
            and exterior property maintenance standards across London residential environments.
          </p>
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={selectedCategory === cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            id={`gallery-filter-${cat.id}`}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
              selectedCategory === cat.id
                ? 'bg-[#c36b44] text-white shadow-sm'
                : 'bg-[#151c26] text-[#94a3b8] hover:text-white hover:bg-[#1f2836] border border-[#232e3d]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="group relative rounded-xl bg-[#141b24] border border-[#222d3b] hover:border-[#38485e] overflow-hidden cursor-pointer shadow-md transition-all duration-300"
          >
            {/* Image display */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-[#0d131a]">
              <img
                src={item.image}
                alt={`${item.title} - London roofing detail`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e141c] via-[#0e141c]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag Badge */}
              <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-[#0b1017]/85 text-[#e2e8f0] border border-[#2a3648] backdrop-blur-xs flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#c36b44]" />
                {item.labelBadge}
              </span>

              {/* Hover overlay action */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#c36b44] text-white text-xs font-semibold shadow-lg">
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </span>
              </div>
            </div>

            {/* Content text */}
            <div className="p-4 bg-[#141b24]">
              <div className="text-[11px] font-medium text-[#c36b44] mb-1">
                {item.categoryLabel}
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#d9774a] transition-colors font-display">
                {item.title}
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
