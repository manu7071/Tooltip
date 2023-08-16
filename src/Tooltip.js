import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; // You can define your tooltip styles in this CSS file
const Tooltip = ({ text, children, position }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getTooltipPosition = () => {
    switch (position) {
      case 'left':
        return { top: '50%', right: '100%', transform: 'translateY(-50%)' };
      case 'right':
        return { top: '50%', left: '100%', transform: 'translateY(-50%)' };
      case 'top':
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
      default:
        return { top: '100%', left: '50%', transform: 'translateX(-50%)' };
    }
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      {children}
      {showTooltip && (
        <div className={`tooltip ${position}`} style={getTooltipPosition()}>
          {text}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
};

Tooltip.defaultProps = {
  position: 'bottom', // Default position is bottom
};

export default Tooltip;
