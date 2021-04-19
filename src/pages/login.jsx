import React, { PureComponent } from "react";
import "../assets/scss/login.scss";
import logo from '../assets/images/logo.svg'

//Components
import SignIn from '../components/login/sign-in';
import SignUp from '../components/login/sign-up';

class login extends PureComponent {
  state = {
    isActiveSignUp:false,
    signInButtonText: "Ben üye değilim, Üye olmak istiyorum",
    signOutButtonText: "Zaten üyeyim, Giriş Yapmak istiyorum.",
    signInDesc: "Çiçek Sepetinin renkli dünyasına göz atmak için hemen Giriş Yapın.",
    signOutDesc: "Çiçek Sepetinin Renkli dünyasını keşfetmek için hemen Üye Olun."
  }

  signUpActice = () => {
    this.setState({
      isActiveSignUp: !this.state.isActiveSignUp
    })
  }

  render() {
    return (
      <div className={`login ${this.state.isActiveSignUp ? "sign-up-active" : ""}`}>
        <div className="flex-center h-100">
          <div className="login-form">
            <div className="row h-100">
              <div className="col-md-5">
                <div className="login-form__left flex-center flex-column h-100">
                  <h1 className="login-form__title mb-4 color-white text-center">Renkli Dünyaya Hoşgeldiniz.</h1>
                  <p className="login-form__desc">{!this.state.isActiveSignUp ? this.state.signInDesc : this.state.signOutDesc}</p>
                  <a href="#" className="button-ant transparent mt-4" onClick={this.signUpActice}>
                    {!this.state.isActiveSignUp ? this.state.signInButtonText : this.state.signOutButtonText}
                  </a>
                </div>
              </div>
              <div className="col-md-7">
                <div className="login-form__main h-100">
                  <img src={logo} className="mb-4"/>
                  <SignIn />
                  <SignUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
