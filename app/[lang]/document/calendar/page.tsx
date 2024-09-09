// pages/Episodes.js

import React from 'react';
import CalendlyWidget from '../../../components/CalendlyWidget';

const Calendar = () => {
  const calendlyUrl = 'https://calendly.com/d/cp99-rm3-5b9/being-podcast';

  return (
    <div>
      {/* Other content */}
      <CalendlyWidget url={calendlyUrl} />
    </div>
  );
};

export default Calendar;
