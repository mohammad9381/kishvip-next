import React from "react";

class ServiceDetailComments extends React.Component {
  render() {
    return (
      <div id="comments">
        <ol className="commentlist">
          <li className="comment">
            <div className="comment_container">
              <img
                className="avatar avatar-60 photo"
                src={"/images/testimonials/pic1.jpg"}
                alt=""
              />
              <div className="comment-text">
                <div className="star-rating">
                  <div data-rating="3">
                    <i
                      className="fa fa-star text-yellow"
                      data-alt="1"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star text-yellow"
                      data-alt="2"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star-o text-yellow"
                      data-alt="3"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star-o text-yellow"
                      data-alt="4"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star-o text-yellow"
                      data-alt="5"
                      title="regular"
                    ></i>
                  </div>
                </div>
                <p className="meta">
                  <strong className="author">Cobus Bester</strong>
                  <span>
                    <i className="fa fa-clock-o"></i> March 7, 2013
                  </span>
                </p>
                <div className="description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="comment">
            <div className="comment_container">
              <img
                className="avatar avatar-60 photo"
                src={"/images/testimonials/pic2.jpg"}
                alt=""
              />
              <div className="comment-text">
                <div className="star-rating">
                  <div data-rating="3">
                    <i
                      className="fa fa-star text-yellow"
                      data-alt="1"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star text-yellow"
                      data-alt="2"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star text-yellow"
                      data-alt="3"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star-o text-yellow"
                      data-alt="4"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star-o text-yellow"
                      data-alt="5"
                      title="regular"
                    ></i>
                  </div>
                </div>
                <p className="meta">
                  <strong className="author">Cobus Bester</strong>
                  <span>
                    <i className="fa fa-clock-o"></i> March 7, 2013
                  </span>
                </p>
                <div className="description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="comment">
            <div className="comment_container">
              <img
                className="avatar avatar-60 photo"
                src={"/images/testimonials/pic3.jpg"}
                alt=""
              />
              <div className="comment-text">
                <div className="star-rating">
                  <div data-rating="3">
                    <i
                      className="fa fa-star text-yellow"
                      data-alt="1"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star text-yellow"
                      data-alt="2"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star text-yellow"
                      data-alt="3"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star text-yellow"
                      data-alt="4"
                      title="regular"
                    ></i>
                    <i
                      className="fa fa-star-o text-yellow"
                      data-alt="5"
                      title="regular"
                    ></i>
                  </div>
                </div>
                <p className="meta">
                  <strong className="author">Cobus Bester</strong>
                  <span>
                    <i className="fa fa-clock-o"></i> March 7, 2013
                  </span>
                </p>
                <div className="description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

export default ServiceDetailComments;
