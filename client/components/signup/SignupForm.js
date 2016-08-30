import React from 'react';

export default class SignupForm extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value 
		});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.userSignupRequest(this.state);
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join us!</h1>

				<div className="form-group">
					<label className="control-label">Username</label>
					<input
						value={this.state.username}
						onChange={this.onChange}
						type="text" 
						name="username"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Email</label>
					<input
						value={this.state.email}
						onChange={this.onChange}
						type="text" 
						name="email"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Password</label>
					<input
						value={this.state.password}
						onChange={this.onChange}
						type="password" 
						name="password"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Password confirmation</label>
					<input
						value={this.state.passwordConfirmation}
						onChange={this.onChange}
						type="password" 
						name="passwordConfirmation"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Timezone</label>
					<input
						value={this.state.timezone}
						onChange={this.onChange}
						type="text" 
						name="timezone"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<button className="btn btn-primary btn-lg">
						Sign up
					</button>
				</div>
			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
};