import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      </head>
      <body>{children}</body>

      <Script id='netlify-identity' strategy='lazyOnload'>
        {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on('init', (user) => {
                if (!user) {
                  window.netlifyIdentity.on('login', () => {
                    document.location.href = '/admin/';
                  });
                }
              });
            }
          `}
      </Script>
    </html>
  );
}
