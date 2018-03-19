import React from 'react';
import styles from '../SearchPanel/search-panel.scss';
import PropTypes from 'prop-types';

class Input extends React.Component {

    render() {
        const StyleBox = {
            position: 'relative',
        };
        const className = `${this.props.className}`;
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

            </div>
        )
    }
}

Input.propTypes = {
    className: PropTypes.string,
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