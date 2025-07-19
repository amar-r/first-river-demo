import { meetingMinutes } from '../../data/hoaData';

const MeetingMinutes = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neighborhood-blue mb-4">
            Board Meeting Minutes
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stay informed about board decisions, community updates, and upcoming projects.
          </p>
        </div>

        <div className="space-y-8">
          {meetingMinutes.map((meeting, index) => (
            <div 
              key={index}
              className="bg-neighborhood-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-2">
                    {meeting.title}
                  </h3>
                  <p className="text-neighborhood-gray font-medium">
                    {formatDate(meeting.date)}
                  </p>
                </div>
                {meeting.nextMeeting && (
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <p className="text-sm text-gray-600">Next Meeting:</p>
                    <p className="text-sm font-medium text-neighborhood-blue">
                      {formatDate(meeting.nextMeeting)}
                    </p>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-neighborhood-blue mb-2">Meeting Summary</h4>
                <p className="text-gray-700 leading-relaxed">
                  {meeting.summary}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neighborhood-blue mb-3">Attendees</h4>
                  <ul className="space-y-1">
                    {meeting.attendees.map((attendee, attendeeIndex) => (
                      <li key={attendeeIndex} className="text-gray-700 text-sm flex items-center">
                        <div className="w-2 h-2 bg-neighborhood-blue rounded-full mr-2"></div>
                        {attendee}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-neighborhood-blue mb-3">Key Decisions</h4>
                  <ul className="space-y-2">
                    {meeting.keyDecisions.map((decision, decisionIndex) => (
                      <li key={decisionIndex} className="text-gray-700 text-sm flex items-start">
                        <div className="w-2 h-2 bg-neighborhood-blue rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neighborhood-blue text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Want to Attend a Meeting?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            All residents are welcome to attend board meetings. Meetings are held on the fourth Monday of each month at 7:00 PM at the Mt. Vernon Police Station.
          </p>
          <div className="space-y-4">
            <p className="text-sm opacity-80">
              <strong>Location:</strong> Mt. Vernon Police Station, 2511 Parkers Lane, Alexandria, VA
            </p>
            <p className="text-sm opacity-80">
              <strong>Time:</strong> 7:00 PM (Fourth Monday of each month)
            </p>
            <p className="text-sm opacity-80">
              <strong>Contact:</strong> firstriverfarmshoa@gmail.com for agenda items
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingMinutes; 