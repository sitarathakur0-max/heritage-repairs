import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onPrev, onNext]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#1b2430]/90 text-white hover:bg-[#c36b44] border border-[#2b3748] transition-colors"
        aria-label="Close lightbox"
        id="lightbox-close-btn"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Previous button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-6 z-20 p-3 rounded-full bg-[#1b2430]/90 text-white hover:bg-[#c36b44] border border-[#2b3748] transition-colors"
        aria-label="Previous image"
        id="lightbox-prev-btn"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-6 z-20 p-3 rounded-full bg-[#1b2430]/90 text-white hover:bg-[#c36b44] border border-[#2b3748] transition-colors"
        aria-label="Next image"
        id="lightbox-next-btn"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Container */}
      <div className="relative z-10 max-w-4xl w-full bg-[#111720] border border-[#232f3e] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Large Image container */}
        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 bg-[#141b24] border-t border-[#222d3b] flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1f2937] text-[#c36b44] border border-[#374151]">
                <Tag className="w-3 h-3" />
                {item.labelBadge}
              </span>
              <span className="text-xs text-[#94a3b8]">· {item.categoryLabel}</span>
            </div>
            <h3 id="gallery-modal-title" className="text-lg sm:text-xl font-bold text-white font-display">
              {item.title}
            </h3>
            <p className="text-sm text-[#94a3b8] mt-1">{item.description}</p>
          </div>

          <div className="text-xs text-[#64748b]">
            Use Left / Right arrow keys to navigate
          </div>
        </div>
      </div>
    </div>
  );
};
