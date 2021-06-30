import React from "react";

import Head from "next/head";

function Header() {
  return (
    <div>
      <Head>
        <title>Software Studio</title>
        <meta name="title" content="Software Studio" />
        <meta
          name="description"
          content="The Solution to Launching Quickly — Software, Startup, Venture, Movement, and Beyond"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softwarestudio.app/" />
        <meta property="og:title" content="Software Studio" />
        <meta
          property="og:description"
          content="The Solution to Launching Quickly — Software, Startup, Venture, Movement, and Beyond"
        />
        <meta
          property="og:image"
          content="https://softwarestudio.app/preview-image.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://softwarestudio.app/" />
        <meta property="twitter:title" content="Software Studio" />
        <meta
          property="twitter:description"
          content="The Solution to Launching Quickly — Software, Startup, Venture, Movement, and Beyond"
        />
        <meta
          property="twitter:image"
          content="https://softwarestudio.app/preview-image.png"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"
          integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
          integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@900&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          src="https://kit.fontawesome.com/da12bdc16a.js"
          crossOrigin="anonymous"
        />
        <script
          defer
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KD566CCM3Q"
        />
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "G-KD566CCM3Q");
    `,
          }}
        ></script>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "5v7blzebx8");
`,
          }}
        ></script>
      </Head>
    </div>
  );
}

export default Header;
