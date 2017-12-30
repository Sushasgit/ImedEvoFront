import React from 'react'
import styles from '../SearchPanel/search-panel.scss'
import PropTypes from 'prop-types'

const ClearButton = (props) => (
  <button style={{position:'absolute', top: '13px',right: '0px',backgroundColor:'transparent',border:'none'}}>
    <svg
      width='19px'
      height='24px'
      x="0px"
      y="0px"
      viewBox="0 0 47.971 47.971"
      style={{enableBackground:'new 0 0 47.971 47.971'}}>
      <g>
        <path style={{fill:'#90a4ae'}} d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
      c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
      C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
      s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
      </g>
    </svg>
  </button>
)

class Input extends React.Component {
  render() {
    const StyleBox = {
      position:'relative',
    }
    const className = `${this.props.className}`
    return (
      <div className={styles.container__search_box} style={StyleBox}>
        <input className={className}
               name={this.props.name}
               type={this.props.type}
               placeholder={this.props.placeholder}
               autoComplete={this.props.autoComplete || 'off'}
               value={this.props.value}
               required={this.props.required}
               disabled={this.props.disabled}
               onChange={this.props.onChange}
               onBlur={this.props.onBlur}
        />
        <ClearButton/>
      </div>
    )
  }
}

  Input.propTypes = {
  className:PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.bool,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  fullWidth: PropTypes.bool,
  roundedBorder: PropTypes.bool,
}

export default Input