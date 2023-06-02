import './styles/main.scss';
import './styles/responsive.scss';
import Image from 'next/image';
import { Roboto_Slab } from 'next/font/google';
import Link from 'next/link';
import { format } from 'date-fns';

import { Navigation } from './components/navigation';

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab'
});

export const metadata = {
  title: 'Accountants in Godalming, Guildford, Surrey | MBL Accountants',
  description:
    'MBL Accountants - Accountancy services in Godalming, Surrey. Services include Accountancy, VAT returns, Bookkeeping, Taxation, Payroll, Company Secretarial.'
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/small-business-advice', label: 'Small Business Advice' },
  { href: '/contact', label: 'Contact' }
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto_slab.variable} font-sans`}>
      <head>
        <meta
          name="keywords"
          content="accountants godalming, accountants guildford, accountants surrey, accountants in godalming, accountants in guildford,accountancy godalming, accountancy guildford, accountancy surrey, accountants small business godalming, accountants sole traders godalming,small business, sole traders, tax and accountancy, bookkeeping, VAT returns, tax returns"
        />
        <meta name="Revisit-After" content="1 days" />
        <meta name="ROBOTS" content="ALL" />
        <meta name="country" content="UK" />
        <meta name="classification" content="accountants" />
        <meta
          name="google-site-verification"
          content="kP9m71JPDwi_Y_Wj2W1st02Xngpp_WAnOQxfLLZEwdQ"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href=" http://www.mbl-accountants.co.uk " />
      </head>
      <body id="body_home">
        <div id="container_sleeve">
          <div id="container">
            <div id="header">
              <div id="logo">
                <Link href="/">
                  <Image
                    src="/images/mbl-logo.png"
                    width="160"
                    height="100"
                    alt="MBL Accountants Godalming Logo"
                  />
                </Link>
              </div>
              <div id="xero">
                <a href="https://www.xero.com/uk/">
                  <Image
                    src="/images/xero-certified-advisor-logo.png"
                    width="166"
                    height="81"
                    alt="Xero Certified Advisor Logo"
                  />
                </a>
                <a href="https://www.gov.uk/government/publications/making-tax-digital/overview-of-making-tax-digital">
                  <Image
                    src="/images/mtd-ad-logo.svg"
                    width="92"
                    height="92"
                    alt="Making Tax Digital"
                  />
                </a>
              </div>
              <div id="details">
                <p id="phone">07780 618551</p>
                <p>
                  Moushill Rough, Portsmouth Road,
                  <br />
                  Godalming, Surrey, GU8 5BL
                </p>
              </div>
              <div className="mobile-menu">
                <button aria-label="Menu" title="Menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                  </svg>
                </button>
              </div>
              <Navigation navLinks={navLinks} />
            </div>
            {children}
            <div className="clear" />
            <div id="footer">
              <div className="left">
                <p>
                  &copy; {format(new Date(), 'yyyy')} MBL Business Services Ltd.
                  <br />
                  Accountants in Godalming, Surrey specialising in accountancy,
                  VAT returns, bookkeeping and taxation for small companies and
                  sole traders. <br />
                  <a href="https://www.xero.com/uk/">Xero</a> certified
                  advisors.
                </p>
              </div>
              <div className="right">
                <a href="privacy-policy.html">Privacy policy</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
