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

class Row extends React.Component {
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

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default bsClass('row', Row);
