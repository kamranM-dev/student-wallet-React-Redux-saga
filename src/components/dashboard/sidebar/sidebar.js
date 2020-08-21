import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './sidebar.scss';

class Sidebar extends Component {
  _toggleSidebar = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const classList = classNames('dashboard__side-bar', { 'displayed': this.props.visible });
    return (
      <div className={ classList }>
        <div className="dashboard__sidebar-content">
          { this.props.children }
        </div>
        <div className="sidebar-toggle" onClick={ this._toggleSidebar }>
          <i className="fa fa-lg fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
Sidebar.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  visible: PropTypes.bool
};
export default Sidebar;
