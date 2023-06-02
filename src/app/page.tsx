import Image from 'next/image';
export default function Home() {
  return (
    <main id="content">
      <div id="banner">
        <div id="message">
          <h1>
            Keeping accountancy simple for sole traders and small companies.
          </h1>
        </div>
      </div>
      <div id="intro">
        <p>
          At MBL we provide a <span>professional</span> and{' '}
          <span>cost-effective</span> accounting solution. Our aim is to take
          care of your financial and accounting operations affording you the
          time and peace of mind to run your business.
        </p>
        <a href="services.html">
          Read more about the accountancy and business advice services we offer
        </a>
      </div>

      <div className="homepanel homepanel1">
        <h2>The services we provide</h2>
        <img
          src="images/services_panel.jpg"
          width="300"
          height="90"
          alt="Accountancy Services Pane"
        />
        <ul>
          <li>
            <a href="services.html">Accounts</a>
          </li>
          <li>
            <a href="services.html">Vat Returns / Bookkeeping</a>
          </li>
          <li>
            <a href="services.html">Taxation</a>
          </li>
          <li>
            <a href="services.html">Payroll</a>
          </li>
          <li className="last">
            <a href="services.html">Company Secretarial</a>
          </li>
        </ul>
      </div>
      <div className="homepanel homepanel2">
        <h2>Small business advice</h2>
        <img
          src="images/sm-biz-advice_panel.jpg"
          width="300"
          height="90"
          alt="Small Business Advice Godalming"
        />
        <p>
          We provide <strong>expert advice</strong> for small businesses and
          sole traders.
        </p>
        <p className="bottomten">
          Our <strong>fixed fee policy</strong> gives you the certainty of
          knowing what the fees are going to be, and when they are payable. (We
          do not send unexpected invoices).
        </p>
        <a href="small-business-advice.html">
          More about advice for small business
        </a>
      </div>
      <div className="homepanel homepanel3 last">
        <h2>Free initial consultation</h2>
        <img
          src="images/free-consultation_panel.jpg"
          width="300"
          height="90"
          alt="Free Accountancy Consultation Godalming"
        />
        <p className="bottomten">
          If you would like to discuss whether the services MBL Accountants
          provide could be of benefit to you or your company please contact us
          to arrange a free initial consultation
        </p>
        <a href="contact.html">Get in touch with us</a>
      </div>
    </main>
  );
}
