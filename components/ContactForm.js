var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    
    render: function() {
        return (
            <form className={'contact_form'}>
                <label className={'label'} htmlFor={'firstname'}>
                    First name:
                    <input type='text' id='firstname' placeholder='First name' value={this.props.contact.firstName}/>
                </label>
                <label className={'label'} htmlFor={'lastname'}>
                    Last name:
                    <input type='text' id='lastname' placeholder='Last name' value={this.props.contact.lastName}/>
                </label>
                <label className={'label'} htmlFor={'email'}>
                    Email:
                    <input type='email' id='email' placeholder='Email' value={this.props.contact.email}/>
                </label>
                <button type='submit'>
                    Add contact
                </button>
            </form>
        )
    }
});