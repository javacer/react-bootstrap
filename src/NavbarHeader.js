import classNames from 'classnames';
import React from 'react';

import { prefix } from './utils/bootstrapUtils';

const contextTypes = {
  $bs_navbar: React.PropTypes.shape({
    bsClass: React.PropTypes.string,
  }),
};

class NavbarHeader extends React.Component {
  render() {
    const { className, ...props } = this.props;
    const navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    const bsClassName = prefix(navbarProps, 'header');

    return (
      <div {...props} className={classNames(bsClassName, className)} />
    );
  }
}

NavbarHeader.contextTypes = contextTypes;

export default NavbarHeader;
