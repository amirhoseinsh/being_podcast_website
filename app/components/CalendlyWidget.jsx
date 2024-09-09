"use client"
import React, { useEffect } from 'react';
import Script from 'next/script';

const CalendlyWidget = ({ url }) => {
  useEffect(() => {
    // Initialize Calendly widget when the component mounts
    const initCalendly = () => {
      if (window.Calendly) {
        // window.Calendly.initBadgeWidget({
        //   url,
        //   text: '',
        //   color: '#f53900',
        //   textColor: '#ffffff',
        //   branding: true,
        // });
      }
    };

    // Load Calendly script asynchronously
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = initCalendly;
    document.body.appendChild(script);

    // Clean up when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div className="calendly-inline-widget" data-url={url} style={{ minWidth: 320, height: 700 }} />
  );
};

export default CalendlyWidget;