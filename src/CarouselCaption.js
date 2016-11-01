import classNames from 'classnames';
import React from 'react';
import elementType from 'react-prop-types/lib/elementType';

import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';

const propTypes = {
  componentClass: elementType,
};

const defaultProps = {
  componentClass: 'div',
};

class CarouselCaption extends React.Component {
  render() {
    const { componentClass: Component, className, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = getClassSet(bsProps);

    return (
      <Component
        {...elementProps}
        className={classNames(classes, className)}
      />
    );
  }
}

CarouselCaption.propTypes = propTypes;
CarouselCaption.defaultProps = defaultProps;

export default bsClass('carousel-caption', CarouselCaption);
