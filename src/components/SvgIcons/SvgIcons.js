import React from 'react'

const MenuButton = (props) => (
  <button style={{backgroundColor: 'transparent',border:'none',position:'absolute',top:'31px',right:'40px',zIndex:'20'}} {...props} className="menu-button">

    <svg  x="0px" y="0px"
          width="40px" height="40px" viewBox="0 0 124 124" style={{enableBackground:'new 0 0 124 124'}} >
      <g>
        <path style={{fill:'#5bb3e3'}} d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
        <path style={{fill:'#5bb3e3'}} d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
        <path style={{fill:'#5bb3e3'}} d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
      </g>
    </svg>
  </button>
);

const CloseButton = (props) => (
  <button style={{backgroundColor: 'transparent',border:'none',position:'absolute',top:'15px',right:'20px',zIndex:'20'}} {...props} className="menu-button">
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
      style={{enableBackground:"new 0 0 64 64"}} >
      <g>
        <g style={{fill:'#ffffff'}} >
          <path d="m46.355,17.979c-0.779-0.78-2.043-0.78-2.821,0l-11.594,11.591-11.591-11.591c-0.779-0.78-2.044-0.78-2.822,0-0.778,0.779-0.778,2.043 0,2.823l11.499,11.5-11.492,11.489c-0.778,0.779-0.778,2.043 0,2.822 0.392,0.391 0.903,0.586 1.414,0.586s1.02-0.195 1.411-0.586l11.581-11.579 11.583,11.579c0.39,0.391 0.899,0.586 1.41,0.586 0.512,0 1.024-0.195 1.412-0.586 0.779-0.779 0.779-2.043 0-2.822l-11.489-11.488 11.499-11.5c0.78-0.781 0.78-2.044-7.10543e-15-2.824z"/>
          <path d="M31.94,0C14.33,0,0,14.328,0,31.941c0,17.611,14.33,31.94,31.94,31.94    c17.611,0,31.941-14.329,31.941-31.94C63.882,14.328,49.552,0,31.94,0z M31.94,59.89c-15.411,0-27.948-12.538-27.948-27.948    c0-15.412,12.537-27.949,27.948-27.949c15.412,0,27.949,12.537,27.949,27.949C59.89,47.352,47.353,59.89,31.94,59.89z"/>
        </g>
      </g>
    </svg>
  </button>
);
export {MenuButton, CloseButton}