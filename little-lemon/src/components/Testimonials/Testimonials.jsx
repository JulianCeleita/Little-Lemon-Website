import React from "react";
import "./testimonials.css";

export const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-subtitle">Testimonials</h2>
      <div className="testimonials-content">
        <div className="testimonial">
          <div className="testimonial-rating">4.7</div>
          <div className="testimonial-info">
            <img
              src="/louise.png"
              alt="Louise Luck"
              className="testimonial-image"
            />
            <h3 className="testimonial-name">Louise Luck</h3>
          </div>
          <p className="testimonial-review">
            Amazing food and great atmosphere. Loved the Greek Salad! The
            flavors were exquisite and the portion size was perfect. The mix of
            fresh vegetables and olives was a delightful combination. Will
            definitely be returning for more culinary delights.
          </p>
        </div>
        <div className="testimonial">
          <div className="testimonial-rating">5.0</div>
          <div className="testimonial-info">
            <img
              src="/anne.png"
              alt="Anne Liverman"
              className="testimonial-image"
            />
            <h3 className="testimonial-name">Anne Liverman</h3>
          </div>
          <p className="testimonial-review">
            Ratatouille is a must-try! The flavors are exceptional. The dish is
            a harmonious blend of various vegetables and herbs, creating a
            symphony of taste in every bite. It's a true masterpiece that
            showcases the culinary expertise of the restaurant.
          </p>
        </div>
        <div className="testimonial">
          <div className="testimonial-rating">4.8</div>
          <div className="testimonial-info">
            <img
              src="/luigi.jpg"
              alt="Luigi Brackman"
              className="testimonial-image"
            />
            <h3 className="testimonial-name">Luigi Brackman</h3>
          </div>
          <p className="testimonial-review">
            Stroganoff Panecook is a delightful twist on a classic dish. The
            combination of tender pan-fried pancakes and the rich, creamy
            mushroom and beef stroganoff sauce is a match made in heaven. It's
            comfort food elevated to new heights, and I can't get enough of it.
          </p>
        </div>
      </div>
    </div>
  );
};
