import React from "react";
import Link from "next/link";

class NavLink extends React.Component {
  render() {
    const { href, children, className, target } = this.props;
    // return <div></div>
    return (
      <Link
        href={
          href && typeof href === "string" && href !== undefined ? href : "/"
        }
      >
        <a className={className} target={target}>
          {children ? children : ""}
        </a>
      </Link>
    );
  }
}

export default NavLink;
