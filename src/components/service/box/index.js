import React from "react";
import NavLink from "hoc/NavLink";

class ServiceBox extends React.Component {
  render() {
    const { p } = this.props;
    const url = "/" + p.id + "-" + p.title.split(" ").join("-");
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <NavLink href={url}>
          <div className="item-box m-b10">
            <div className="item-img">
              <img src={p.coverImage} alt={p.title} />
              <div className="item-info-in">
                <ul>
                  <li>{p.title}</li>
                </ul>
              </div>
            </div>
            <div className="item-info text-center text-black p-a10">
              <h6 className="item-title font-weight-500">{p.title}</h6>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default ServiceBox;
