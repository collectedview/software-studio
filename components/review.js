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
                      height: "54px",
                    }}
                    width="250"
                    height="54"
                  />
                </a>
              </div>
              <div className="content-group-item">
                <script
                  type="text/javascript"
                  src="https://widget.clutch.co/static/js/widget.js"
                ></script>
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="2"
                  data-height="45"
                  data-clutchcompany-id="1264412"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
