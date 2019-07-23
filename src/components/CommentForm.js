import React, { Component } from 'react';

class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
            phone: '',
            titleIsValid:'',
            textIsValid:'',
            phoneIsValid: ''
        }
    }

    handlTitleChange = event => {
        this.setState({ title : event.target.value});
    }

    handleTitleValidate = event => {
        this.setState({
            titleIsValid : this.state.title.length >= 5 && this.state.title.length <= 80
        })
    }

    handlTextChange = event => {
        this.setState({ text : event.target.value});
    }

    handleTextValidate = event => {
        console.log(this.state.text);
        this.setState({
            textIsValid : this.state.text.length > 0 && this.state.text.length <= 128
        })
    }

    handlPhoneChange = event => {
        this.setState({ phone : event.target.value.replace(/\D/,'')});
    }

    handlePhoneValidate= event => {
        console.log(
            this.state.phone[0]
        )
        this.setState({
            phoneIsValid : this.state.phone.length === 11 && this.state.phone[0] == 7
        })
    }

    handleSubmit = () => {
        alert('Comment was sent!');
    }

    render() {
        const { titleIsValid, textIsValid, phoneIsValid } = this.state;
        const isEnabled = titleIsValid && textIsValid && phoneIsValid
        return <form>
            <input type='text' 
                required
                placeholder='Title' 
                value={this.state.title} 
                onChange={this.handlTitleChange}
                onBlur={this.handleTitleValidate}/>
            { titleIsValid === false && 
                <span className='error'>error... your title has to be more than 5 and less then 80</span>
            }

            <textarea required 
                placeholder='Text'
                value={this.state.text}
                onChange={this.handlTextChange}
                onBlur={this.handleTextValidate}/>
            { textIsValid === false &&
                <span className='error'>error... your text has to be less then 128</span> 
            }

            <input type='text' required
                placeholder='Phone in format 7xxxxxxxxxx'
                value={this.state.phone}
                onChange={this.handlPhoneChange}
                onBlur={this.handlePhoneValidate}/>
            { phoneIsValid === false &&
                <span>error... phone has to have 11 number</span>
            }
            <button disabled={!isEnabled} onClick={this.handleSubmit}>Send</button>
        </form>
    }
}

export default CommentForm;