var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    
    render: function() {
        return (
            <div className={'contact_item row'}>
                <img className={'contact_image col-3'} src={'http://icons.veryicon.com/png/Application/iOS8%20Cirtangle%20Concept/Contacts.png'} alt=''/>
                <p className={'contact_name col-8'}>
                    First name: {this.props.item.firstName}
                </p>
                <p className={'contact_name col-8'}>
                    Last name: {this.props.item.lastName}
                </p>
                <a className={'contact_email col-8'} href={'Email:' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </div>
        )
    }
}); 
