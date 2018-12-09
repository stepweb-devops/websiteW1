import React, { Component } from 'react';

import styles from './styles.module.scss';

class Checkbox extends Component { 
    state = {
        isChecked: this.props.isChecked
    }
    
    static defaultProps = {
        isChecked: false
    }
    
    handleInputChange = event => {
        this.setState({
            isChecked: event.target.checked
        });
    }  
     
    render() {
        const { label } = this.props;
        
        return (
            <label className={ styles.container }>
                <input checked={ this.state.isChecked }
                    className={ styles.checkbox }
                    onChange={this.handleInputChange}
                    type="checkbox"                
                />
                
                <span className={ styles.checkmark }></span>
           
                <span className={ styles.text }>
                    { label }
                </span>         
            </label>    
        );
    }    
}

export default Checkbox;
