// import logo from './logo.svg';
import '../css/Footer.css';

function Footer(){
  return(
<footer className="footer">
      <div className="footer-content">
        <a href="/terms-of-service" className="footer-link">Terms of Service</a>
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <a href="/content-policy" className="footer-link">Content Policy</a>
      </div>
    </footer>
  );
}
export default Footer;