"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGoogle } from "react-icons/fa";
import { googleBusiness, reviews } from "@/data/site";

export default function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? reviews.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % reviews.length);
  };

  return (
    <section className="section reviews-section">
      <div className="wrap">
        <div className="section-head reviews-head">
          <div>
            <p className="eyebrow">Google Business Reviews</p>
            <h2>5-Star Service</h2>
          </div>
          <a
            className="reviews-link"
            href={googleBusiness.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle aria-hidden="true" />
            View on Google
          </a>
        </div>

        <div className="review-carousel" aria-label="Google reviews carousel">
          <button
            className="carousel-btn"
            type="button"
            onClick={showPrevious}
            aria-label="Previous review"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <div className="review-track">
            {reviews.map((review, index) => (
              <article
                className={`review review-slide ${
                  index === activeIndex ? "active" : ""
                }`}
                key={review.text}
                aria-hidden={index === activeIndex ? "false" : "true"}
              >
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p>"{review.text}"</p>
                <strong>- {review.author}</strong>
              </article>
            ))}
          </div>

          <button
            className="carousel-btn"
            type="button"
            onClick={showNext}
            aria-label="Next review"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className="review-dots" aria-label="Review carousel position">
          {reviews.map((review, index) => (
            <button
              key={review.text}
              className={index === activeIndex ? "active" : ""}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show review ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
