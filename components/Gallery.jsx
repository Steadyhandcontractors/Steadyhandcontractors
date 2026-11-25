"use client";

import { useEffect, useRef, useState } from "react";
import { galleryImages } from "@/data/site";

  const categories = [
    { name: "Tile", files: ["IMG_4004.jpg", "IMG_4005.jpg", "IMG_4008.jpg", "IMG_4010.jpg", "IMG_4012.jpg", "IMG_4019.jpg", "project-2767.jpg", "project-2767-2.jpg", "project-2845.jpg", "project-2117.jpg", "project-1722.jpg", "project-2502.jpg", "project-2509.jpg", "patterned-tile-repair-before-after.jpg", "IMG_3300.jpg", "IMG_3302.jpg", "IMG_3303.jpg", "IMG_3345.jpg", "IMG_3346.jpg", "IMG_3466.jpg", "IMG_3470.jpg", "IMG_3471.jpg", "IMG_3476.jpg", "IMG_3477.jpg"] },
    { name: "Carpentry", files: ["IMG_3639.jpg", "IMG_3642.jpg", "IMG_3645.jpg", "IMG_3646.jpg", "IMG_3653.jpg", "IMG_3693.jpg", "IMG_3705.jpg", "IMG_3708.jpg", "project-2794.jpg", "project-2792.jpg", "IMG_3452.jpg", "IMG_3453.jpg", "IMG_3454.jpg", "IMG_3455.jpg", "IMG_3456.jpg", "IMG_3457.jpg", "IMG_3458.jpg"] },
    { name: "Drywall", files: ["IMG_3192-2.jpg", "IMG_3193-2.jpg"] },
    { name: "Handyman", files: ["project-2432.jpg", "project-2433.jpg", "mailbox-repair-before-after.jpg", "murphy-bed-installation.jpg", "landscape-mulch-installation-01.jpg", "landscape-mulch-installation-02.jpg", "landscape-mulch-installation-03.jpg", "landscape-mulch-installation-04.jpg"] },
  ];
export default function Gallery() {
  const [category, setCategory] = useState(null);
  const [index, setIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const dialog = useRef(null);
  const touchStart = useRef(null);
  const images = category
    ? [...galleryImages].reverse().filter((image) => category.files.includes(image.src.split("/").pop()))
    : [];

  useEffect(() => {
    if (index !== null && !dialog.current?.open) dialog.current?.showModal();
  }, [index]);

  function move(step) {
    setIndex((current) => (current + step + images.length) % images.length);
    setZoom(1);
  }

  function closeViewer() {
    dialog.current?.close();
    setIndex(null);
    setZoom(1);
  }

  return (
    <>
      {!category ? (
        <div className="gallery-categories">
          {categories.map((item) => {
            const covers = { Tile: "IMG_3345.jpg", Carpentry: "IMG_3453.jpg", Drywall: "IMG_3192-2.jpg", Handyman: "murphy-bed-installation.jpg" };
            const cover = galleryImages.find((image) => image.src.endsWith(covers[item.name]));
            return (
              <button className="gallery-category" key={item.name} onClick={() => setCategory(item)}>
                <img src={cover.src} alt="" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div>
          <button className="gallery-back" onClick={() => setCategory(null)}>← All categories</button>
          <h2 className="gallery-heading">{category.name}</h2>
          <div className="gallery-thumbnails">
            {images.map((image, i) => (
              <button key={image.src} onClick={() => setIndex(i)} aria-label={`Enlarge photo: ${image.alt}`}>
                <img src={image.src} alt={image.alt} />
              </button>
            ))}
          </div>
        </div>
      )}
      <dialog className="gallery-viewer" ref={dialog} aria-label="Photo viewer" onClose={() => { setIndex(null); setZoom(1); }} onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      }}>
        {index !== null && images[index] && (
          <div className="gallery-viewer-content">
            <div className="gallery-viewer-toolbar">
              <span>{index + 1} / {images.length}</span>
              <div>
                <button onClick={() => setZoom((value) => Math.max(1, value - 0.5))} disabled={zoom <= 1} aria-label="Zoom out">−</button>
                <span className="gallery-zoom">{Math.round(zoom * 100)}%</span>
                <button onClick={() => setZoom((value) => Math.min(3, value + 0.5))} disabled={zoom >= 3} aria-label="Zoom in">+</button>
                <button onClick={closeViewer} aria-label="Close photo viewer">×</button>
              </div>
            </div>
            <div className="gallery-viewer-main">
              <button className="gallery-nav" onClick={() => move(-1)} aria-label="Previous photo">‹</button>
              <div className="gallery-image-window" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => {
                if (zoom === 1 && touchStart.current !== null) {
                  const distance = event.changedTouches[0].clientX - touchStart.current;
                  if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
                }
                touchStart.current = null;
              }}>
                <img src={images[index].src} alt={images[index].alt} style={{ maxWidth: `${zoom * 100}%`, maxHeight: `${zoom * 100}%` }} />
              </div>
              <button className="gallery-nav" onClick={() => move(1)} aria-label="Next photo">›</button>
            </div>
            <p>{images[index].alt}</p>
          </div>
        )}
      </dialog>
    </>
  );
}
