function gaInjectScript(src) {
    var is = document.createElement('script');
    is.async = true;
    is.src = src;

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(is, s);
};

// Global site tag(gtag.js) - Google Analytics
gaInjectScript('https://www.googletagmanager.com/gtag/js?id=UA-63365158-2');
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-63365158-2');

// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XFJ89R');
