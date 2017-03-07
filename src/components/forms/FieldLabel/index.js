import React, { PropTypes } from 'react'
import classnames from 'classnames'

import styles from './styles.scss'

export default function FieldLabel(props) {
  const { children } = props
  const labelStyle = classnames(
    styles.label
  )

  return (
    <label className={labelStyle}>
      {children}
    </label>
  )
}

FieldLabel.propTypes = {
  children: PropTypes.any
}
