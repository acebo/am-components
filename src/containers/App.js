import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'

import styles from './../../styles/global.scss';

export default class App extends Component {
  render() {
    const { children } = this.props

    return (
      <Grid fluid>
      	<div className={ styles['title-app'] }>AGM</div>
        { children }
      </Grid>
    )
  }
}
