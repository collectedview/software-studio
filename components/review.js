import React from "react";

function Review() {
  return (
    <>
      <section id="review">
        <div className="container-fluid">
          <div className="row">
            <div className="content-group">
              <div className="content-group-item">
                <a
                  href="https://www.producthunt.com/posts/react-ventures?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react-ventures"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=270237&theme=light"
                    alt="React Ventures - Ventures | Powered by Next | Product Hunt"
                    style={{
                      width: "250px",
                      height: "50px",
                    }}
                    width="250"
                    height="50"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
