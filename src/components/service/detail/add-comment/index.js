import React from "react";
import { TabPanel } from "react-tabs";

class ServiceDetailAddComment extends React.Component {
  render() {
    return (
      <div id="review_form_wrapper">
        <div id="review_form">
          <div id="respond" className="comment-respond">
            <h3 className="comment-reply-title" id="reply-title">
              Add a review
            </h3>
            <form className="comment-form" method="post">
              <div className="comment-form-author">
                <label>
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  aria-required="true"
                  size="30"
                  value=""
                  name="author"
                  id="author"
                />
              </div>
              <div className="comment-form-email">
                <label>
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  aria-required="true"
                  size="30"
                  value=""
                  name="email"
                  id="email"
                />
              </div>
              <div className="comment-form-rating">
                <label className="pull-left m-r20">Your Rating</label>
                <div className="rating-widget">
                  <div className="rating-stars">
                    <ul id="stars">
                      <li className="star" title="Poor" data-value="1">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                      <li className="star" title="Fair" data-value="2">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                      <li className="star" title="Good" data-value="3">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                      <li className="star" title="Excellent" data-value="4">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                      <li className="star" title="WOW!!!" data-value="5">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="comment-form-comment">
                <label>Your Review</label>
                <textarea
                  aria-required="true"
                  rows="8"
                  cols="45"
                  name="comment"
                  id="comment"
                ></textarea>
              </div>
              <div className="form-submit">
                <input
                  type="submit"
                  value="Submit"
                  className="site-button"
                  id="submit"
                  name="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceDetailAddComment;
