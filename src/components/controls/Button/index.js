import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Icon from 'components/Icon'

import styles from './styles.scss'

export default function Button(props){
  const {
    icon, children, theme, className, block, size, ...otherProps
  } = props;
  const buttonStyle = classnames(
    styles.button,
    styles[theme],
    styles[size],
    {
      [styles.block]: block
    },
    className
  )

  return (
    <button className={buttonStyle} {...otherProps}>
      {icon &&
        <Icon name={icon} />
      }
      <span className={styles.text}>{children}</span>
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.string,
  block: PropTypes.bool,
  size: PropTypes.string
}
