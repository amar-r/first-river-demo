import { meetingInfo } from '../../data/hoaData';

const NextMeeting = () => {
  const getNextMeetingDate = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    // Find the fourth Monday of the current month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const firstMonday = new Date(firstDay);
    
    // Adjust to first Monday
    while (firstMonday.getDay() !== 1) {
      firstMonday.setDate(firstMonday.getDate() + 1);
    }
    
    // Get fourth Monday
    const fourthMonday = new Date(firstMonday);
    fourthMonday.setDate(firstMonday.getDate() + 21);
    
    // If fourth Monday has passed, get fourth Monday of next month
    if (fourthMonday < now) {
      const nextMonth = new Date(currentYear, currentMonth + 1, 1);
      const nextFirstMonday = new Date(nextMonth);
      
      while (nextFirstMonday.getDay() !== 1) {
        nextFirstMonday.setDate(nextFirstMonday.getDate() + 1);
      }
      
      const nextFourthMonday = new Date(nextFirstMonday);
      nextFourthMonday.setDate(nextFirstMonday.getDate() + 21);
      
      return nextFourthMonday;
    }
    
    return fourthMonday;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const nextMeetingDate = getNextMeetingDate();

  return (
    <section className="bg-neighborhood-blue text-white py-12">
      <div className="container-max">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Next HOA Meeting
          </h2>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="text-2xl font-bold mb-4">
              {formatDate(nextMeetingDate)}
            </div>
            
            <div className="space-y-2 text-lg">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{meetingInfo.regularMeeting.time}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{meetingInfo.regularMeeting.location}</span>
              </div>
              
              <div className="text-center">
                <span>{meetingInfo.regularMeeting.address}</span>
                <br />
                <span>{meetingInfo.regularMeeting.city}</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white border-opacity-20">
              <p className="text-sm opacity-90">
                <strong>Annual Meeting:</strong> {meetingInfo.annualMeeting.schedule} at {meetingInfo.annualMeeting.time}
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-lg opacity-90">
              All residents are welcome to attend. Please contact the board if you have items for the agenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextMeeting; 