import './globals.css';
import Script from 'next/script';
import HtmlBlock from '../components/HtmlBlock';
import RouteEffects from '../components/RouteEffects';
import { topBarHtml, headerHtml, navHtml, brandHtml, footerHtml } from '../components/chromeHtml';

export const metadata = {
  title: 'HotSpring Portable Spas',
  description: 'HotSpring Portable Spas storefront'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HtmlBlock html={topBarHtml} />
        <HtmlBlock html={headerHtml} />
        <HtmlBlock html={navHtml} />
        <main>{children}</main>
        <HtmlBlock html={brandHtml} />
        <HtmlBlock html={footerHtml} />
        <RouteEffects />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
