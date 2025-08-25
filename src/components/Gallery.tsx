import React, { useState } from "react";

interface GalleryProps {
  imageRefs: React.RefObject<(HTMLElement | null)[]>;
}

const Gallery: React.FC<GalleryProps> = ({ imageRefs }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/images/gallery-1.jpg",
      alt: "Modern Office Space",
      category: "office",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Collaborative Workspace",
      category: "collaborative",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Executive Suite",
      category: "executive",
    },
    {
      src: "/images/project-1.jpg",
      alt: "Startup Office",
      category: "startup",
    },
    {
      src: "/images/project-2.jpg",
      alt: "Corporate Environment",
      category: "corporate",
    },
    {
      src: "/images/project-3.jpg",
      alt: "Creative Studio",
      category: "creative",
    },
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3>Workspace Gallery</h3>
              <h2>Inspiring Environments We've Created</h2>
              <p>
                Explore our portfolio of transformed workspaces that combine
                functionality, aesthetics, and innovation to drive productivity
                and employee satisfaction.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title-content">
              <p>
                From modern startups to established corporations, we've designed
                and furnished workspaces that reflect each company's unique
                culture and business needs.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <div className="gallery-image">
                  <img
                    src={image.src}
                    alt={image.alt}
                    onClick={() => openModal(image.src)}
                    style={{ cursor: "pointer" }}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-icon">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={closeModal}>
            <div className="modal-content">
              <img src={selectedImage} alt="Gallery Image" />
              <button className="close-modal" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
