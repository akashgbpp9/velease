import React from "react";
import { Link } from "react-router-dom";

interface BlogProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const Blog: React.FC<BlogProps> = ({ imageRefs }) => {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">latest insights</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                <span>Your guide to</span> smart workspace leasing
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Title Content Start */}
            <div className="section-title-content">
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Your journey to smart workspace leasing begins here. Our blog
                offers insights on office design trends, financial benefits of
                leasing, and tips for scaling your workspace efficiently.
              </p>
            </div>
            {/* Section Title Content End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <figure>
                  <Link
                    to="/blog-single"
                    className="image-anime"
                    data-cursor-text="View"
                    ref={(el) => {
                      if (el && !imageRefs.current.includes(el)) {
                        imageRefs.current.push(el);
                      }
                    }}
                  >
                    <img src="/images/post-1.jpg" alt="" />
                  </Link>
                </figure>
              </div>
              {/* Post Featured Image End */}

              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h3>
                    <Link to="/blog-single">
                      CapEx vs OpEx: The Financial Benefits of Workspace Leasing
                    </Link>
                  </h3>
                </div>
                {/* Post Item Content End */}

                {/* Blog Item Button Start */}
                <div className="post-item-btn">
                  <Link to="/blog-single" className="post-btn">
                    read more
                  </Link>
                </div>
                {/* Blog Item Button End */}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <figure>
                  <Link
                    to="/blog-single"
                    className="image-anime"
                    data-cursor-text="View"
                    ref={(el) => {
                      if (el && !imageRefs.current.includes(el)) {
                        imageRefs.current.push(el);
                      }
                    }}
                  >
                    <img src="/images/post-2.jpg" alt="" />
                  </Link>
                </figure>
              </div>
              {/* Post Featured Image End */}

              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h3>
                    <Link to="/blog-single">
                      Scaling Your Office: How Flexible Leasing Supports
                      Business Growth
                    </Link>
                  </h3>
                </div>
                {/* Post Item Content End */}

                {/* Blog Item Button Start */}
                <div className="post-item-btn">
                  <Link to="/blog-single" className="post-btn">
                    read more
                  </Link>
                </div>
                {/* Blog Item Button End */}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <figure>
                  <Link
                    to="/blog-single"
                    className="image-anime"
                    data-cursor-text="View"
                    ref={(el) => {
                      if (el && !imageRefs.current.includes(el)) {
                        imageRefs.current.push(el);
                      }
                    }}
                  >
                    <img src="/images/post-3.jpg" alt="" />
                  </Link>
                </figure>
              </div>
              {/* Post Featured Image End */}

              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h3>
                    <Link to="/blog-single">
                      From Bare Shell to Plug-and-Play: The veLease Process
                    </Link>
                  </h3>
                </div>
                {/* Post Item Content End */}

                {/* Blog Item Button Start */}
                <div className="post-item-btn">
                  <Link to="/blog-single" className="post-btn">
                    read more
                  </Link>
                </div>
                {/* Blog Item Button End */}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
          </div>

          <div className="col-lg-12">
            {/* Our Blog Footer Start */}
            <div className="our-blog-footer wow fadeInUp" data-wow-delay="0.6s">
              <Link to="/blog" className="btn-default">
                See All Insights
              </Link>
            </div>
            {/* Our Blog Footer End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
