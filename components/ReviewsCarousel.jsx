"use client";

import Script from "next/script";
import { googleBusiness } from "@/data/site";

export default function ReviewsCarousel() {
  return (
    <section className="section reviews-section">
      <div className="wrap">
        <div className="elfsight-review-widget">
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
          />
          <div
            className={googleBusiness.elfsightAppClass}
            data-elfsight-app-lazy=""
          />
        </div>
      </div>
    </section>
  );
}
