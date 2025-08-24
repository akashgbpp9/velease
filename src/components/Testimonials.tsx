import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TestimonialsProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  counterRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  imageRefs,
  counterRefs,
}) => {
  return (
    <div className="our-testimonials">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6">
            {/* Our Testimonial Image Start */}
            <div className="our-testimonials-image">
              <figure
                className="image-anime"
                ref={(el) => {
                  if (el && !imageRefs.current.includes(el)) {
                    imageRefs.current.push(el);
                  }
                }}
              >
                <img src="/images/testimonial-img.jpg" alt="" />
              </figure>
            </div>
            {/* Our Testimonial Image End */}
          </div>

          <div className="col-lg-6">
            {/* Our Testimonial Content Start */}
            <div className="our-testimonial-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">client testimonials</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Strategic business support for <span>growing companies.</span>
                </h2>
              </div>
              {/* Section Title End */}

              {/* Testimonial Slider Start */}
              <div className="testimonial-slider">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={false}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  className="testimonial-swiper"
                >
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="testimonial-body">
                        <div className="testimonial-content">
                          <p>
                            "veLease helped us move into a 12,000 sq.ft. space
                            without draining our capital. Instead of struggling
                            with upfront costs, we redirected that money into
                            hiring and expansion. It felt less like an interiors
                            contract and more like a growth partnership."
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-body">
                        <div className="author-image">
                          <figure
                            className="image-anime"
                            ref={(el) => {
                              if (el && !imageRefs.current.includes(el)) {
                                imageRefs.current.push(el);
                              }
                            }}
                          >
                            <img src="/images/author-1.jpg" alt="" />
                          </figure>
                        </div>
                        <div className="author-content">
                          <h3>Gitesh Chandani</h3>
                          <p>Acme Corp</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          "What stood out about veLease was the flexibility. As
                          our team grew, they helped us scale our workspace
                          seamlessly. The lease model gave us predictability
                          while ensuring the office kept evolving with our
                          business."
                        </p>
                      </div>
                      <div className="testimonial-body">
                        <div className="author-image">
                          <figure
                            className="image-anime"
                            ref={(el) => {
                              if (el && !imageRefs.current.includes(el)) {
                                imageRefs.current.push(el);
                              }
                            }}
                          >
                            <img src="/images/author-1.jpg" alt="" />
                          </figure>
                        </div>
                        <div className="author-content">
                          <h3>Atul Hanumant</h3>
                          <p>ABCD Farms</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* Custom Navigation and Pagination */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
              </div>
              {/* Testimonial Slider End */}

              {/* Testimonial Rating Counter Start */}
              <div className="testimonial-rating-counter">
                <div className="rating-counter">
                  <h2>
                    <span
                      className="counter"
                      ref={(el) => {
                        if (el && !counterRefs.current.includes(el)) {
                          counterRefs.current.push(el);
                        }
                      }}
                    >
                      4.9
                    </span>
                  </h2>
                </div>
                <div className="testimonial-rating-content">
                  <div className="testimonial-client-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>500+ reviews</p>
                </div>
              </div>
              {/* Testimonial Rating Counter End */}
            </div>
            {/* Our Testimonial Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
