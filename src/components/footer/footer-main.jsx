import React from 'react'
import logo from '../../assets/images/logo.svg'

//Socials
import facebook from '../../assets/images/social-icons/facebook.svg'
import twitter from '../../assets/images/social-icons/twitter.svg'
import instagram from '../../assets/images/social-icons/instagram.svg'
import youtube from '../../assets/images/social-icons/youtube.svg'
import unkown from '../../assets/images/social-icons/unkown.svg'

const AppArea = () => {
    return (
    <div className="footer-main">
      <div className="row">
        <div className="col-md-5">
          <div className="footer-main__info">
            <img className="footer-main__logo" src={logo} alt=""/>
            <div className="footer-main__social">
              <div className="d-flex">
                <a href="">
                 <img src={facebook} alt=""/>
                </a>
                <a href="">
                 <img src={twitter} alt=""/>
                </a>
                <a href="">
                 <img src={instagram} alt=""/>
                </a>
                <a href="">
                 <img src={youtube} alt=""/>
                </a>
                <a href="">
                 <img src={unkown} alt=""/>
                </a>
              </div>
            </div>
            <p className="footer-main__kvkk">
                CicekSepeti.com olarak kişisel verilerinizin gizliliğini {<br />} önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine buradan ulaşabilirsiniz.
              </p>
          </div>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-link">
                <h4 className="footer-link__title">Faydalı Bilgiler</h4>
                <a href="#">Çiçek Bakımı</a>
                <a href="#">Çiçek Eşliğinde Notlar</a>
                <a href="#">Çiçek Anlamları</a>
                <a href="#">Özel Günler</a>
                <a href="#">Mevsimlere Göre Çiçekler</a>
                <a href="#">Site Haritası</a>
                
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-link">
                <h4 className="footer-link__title">Kurumsal</h4>
                <a href="#">Hakkımızda</a>
                <a href="#">Kariyer</a>
                <a href="#">ÇiçekSepeti’nde Satış Yap</a>
                <a href="#">Kurumsal Müşterilerimiz</a>
                <a href="#">Reklamlarımız</a>
                <a href="#">Basında Biz</a>
                <a href="#">Kampanyalar</a>
                <a href="#">Vizyonumuz</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-link">
                <h4 className="footer-link__title">İletişim</h4>
                <a href="#">Bize Ulaşın</a>
                <a href="#">Sıkça Sorulan Sorular</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-link">
                <h4 className="footer-link__title">Gizlilik Sözleşmesi</h4>
                <a href="#">Mesafeli Satış Sözleşmesi</a>
                <a href="#">Bilgi Toplumu Hizmetleri</a>
                <a href="#">Gizlilik Sözleşmesi</a>
                <a href="#">Ödeme Seçenekleri</a>
                <a href="#">Hesap Bilgileri</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

export default AppArea;
