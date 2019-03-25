import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'
import { GA_TRACKING_ID } from '../lib/gtag'


export default ({ children }) => (
  <div>
    <Head>
        <title>Vivalinda</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="description" content="Vivalinda, Novidades Toda Quarta - Você Merece - #novidadestodaquarta"/>
        <link rel="shortcut icon" href="./static/favicon.ico" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1187938104674077');
              fbq('track', 'PageView');` }}
            />
            <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=1187938104674077&ev=PageView&noscript=1" />` }}
            />
        </Head>
    <NavBar />
    {children}
    <Footer />
    <style global jsx>{`
        body {
          background-color: #212121;
        }
      `}</style>
  </div>
)