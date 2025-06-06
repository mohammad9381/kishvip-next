import React from "react";
import NavLink from "hoc/NavLink";
import {
  event_categories,
  getEvenetCategoruUrl,
} from "constants/event_categories.constant";

class SixBox extends React.Component {
  render() {
    return (
      <div className="section-full bg-primary content-inner">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper sr-iconbox1">
                <div className="icon-lg m-b20 icon-up">
                  <NavLink
                    href={getEvenetCategoruUrl(event_categories[0].id)}
                    className="icon-cell"
                  >
                    <img
                      src={event_categories[0].icon}
                      alt={event_categories[0].name}
                    />
                  </NavLink>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{event_categories[0].name}</h4>
                  <p>
                    خرید بلیط با تخفیف پارک های کیش از جمله سرزمین وحشت ، سرزمین
                    عجایب و ...{" "}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper sr-iconbox1">
                <div className="icon-lg m-b20 icon-up">
                  <NavLink
                    href={getEvenetCategoruUrl(event_categories[1].id)}
                    className="icon-cell"
                  >
                    <img
                      src={event_categories[1].icon}
                      alt={event_categories[1].title}
                    />
                  </NavLink>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{event_categories[1].title}</h4>
                  <p>
                    با رزرو تخفیف دار رستوران های دارای موزیک زنده در کیش شب به
                    یادماندنی داشته باشید
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInRight"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper sr-iconbox1">
                <div className="icon-lg m-b20 icon-up">
                  <NavLink
                    href={getEvenetCategoruUrl(event_categories[4].id)}
                    className="icon-cell"
                  >
                    <img
                      src={event_categories[4].icon}
                      alt={event_categories[4].title}
                    />
                  </NavLink>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{event_categories[4].title}</h4>
                  <p>
                    با استفاده از تور ها و گشت های تخفیف دار کیش کل جزیره در یک
                    روز ببینید.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper sr-iconbox1">
                <div className="icon-lg m-b20 icon-up">
                  <NavLink
                    href={getEvenetCategoruUrl(event_categories[5].id)}
                    className="icon-cell"
                  >
                    <img
                      src={event_categories[5].icon}
                      alt={event_categories[5].title}
                    />
                  </NavLink>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{event_categories[5].title}</h4>
                  <p>
                    با دیدن جنگ های خنده دار جزیره کیش یک شب شاد در کیش داشته
                    باشید.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInDown"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper sr-iconbox1">
                <div className="icon-lg m-b20 icon-up">
                  <NavLink
                    href={getEvenetCategoruUrl(event_categories[6].id)}
                    className="icon-cell"
                  >
                    <img
                      src={event_categories[6].icon}
                      alt={event_categories[6].title}
                    />
                  </NavLink>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{event_categories[6].title}</h4>
                  <p>
                    یکشب رویای بر روی کشتی تفریحی جزیره کیش با تخفیف ویژه
                    بگذرانید
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInRight"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="icon-bx-wraper sr-iconbox1">
                <div className="icon-lg m-b20 icon-up">
                  <NavLink
                    href={getEvenetCategoruUrl(event_categories[7].id)}
                    className="icon-cell"
                  >
                    <img
                      src={event_categories[7].icon}
                      alt={event_categories[7].title}
                    />
                  </NavLink>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{event_categories[7].title}</h4>
                  <p>
                    با دیدن جاذبه های تاریخی کیش می توانید از تخفیف های ویژه این
                    مکان ها استفاده کنید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SixBox;
