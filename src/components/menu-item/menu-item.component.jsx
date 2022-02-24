import React from 'react'
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <p>hello am  menu item</p>
)

export default withRouter(MenuItem)
