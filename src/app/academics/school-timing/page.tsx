"use client";
import {
  Bell,
  BookOpen,
  Calendar,
  Clock,
  Coffee,
  Sun,
  Users,
} from "lucide-react";

const scheduleData = [
  {
    day: "Monday - Friday",
    icon: <Calendar className="w-6 h-6" />,
    sessions: [
      {
        time: "8:00 AM - 8:30 AM",
        activity: "Morning Assembly",
        icon: <Users className="w-5 h-5" />,
        type: "assembly",
      },
      {
        time: "8:30 AM - 12:00 PM",
        activity: "Morning Session",
        icon: <Sun className="w-5 h-5" />,
        type: "class",
      },
      {
        time: "12:00 PM - 1:00 PM",
        activity: "Lunch Break",
        icon: <Coffee className="w-5 h-5" />,
        type: "break",
      },
      {
        time: "1:00 PM - 4:30 PM",
        activity: "Afternoon Session",
        icon: <BookOpen className="w-5 h-5" />,
        type: "class",
      },
      {
        time: "4:30 PM - 5:00 PM",
        activity: "Extra Activities",
        icon: <Users className="w-5 h-5" />,
        type: "activity",
      },
    ],
  },
  {
    day: "Saturday",
    icon: <Calendar className="w-6 h-6" />,
    sessions: [
      {
        time: "9:00 AM - 12:00 PM",
        activity: "Special Classes",
        icon: <BookOpen className="w-5 h-5" />,
        type: "class",
      },
      {
        time: "12:00 PM - 1:00 PM",
        activity: "Sports & Recreation",
        icon: <Users className="w-5 h-5" />,
        type: "activity",
      },
    ],
  },
];

const timingHighlights = [
  {
    title: "Early Start",
    description:
      "Classes begin at 8:30 AM to make the most of productive morning hours",
    icon: <Sun className="w-8 h-8" />,
    color: "text-primary",
  },
  {
    title: "Balanced Schedule",
    description:
      "Well-structured timetable with adequate breaks and activity periods",
    icon: <Clock className="w-8 h-8" />,
    color: "text-secondary",
  },
  {
    title: "Extended Learning",
    description:
      "Extra-curricular activities after regular classes for holistic development",
    icon: <BookOpen className="w-8 h-8" />,
    color: "text-accent",
  },
];

const importantNotes = [
  "Students must arrive 15 minutes before the first session",
  "Late arrivals after 8:45 AM require permission from the office",
  "Saturday classes are mandatory for all students",
  "Parent-teacher meetings are scheduled on the first Saturday of each month",
  "School gates close at 5:30 PM on weekdays",
];

const SchoolTimingPage = () => {
  const getSessionStyle = (type: string) => {
    switch (type) {
      case "assembly":
        return "bg-primary/10 border-primary/30 text-primary";
      case "class":
        return "bg-secondary/10 border-secondary/30 text-secondary";
      case "break":
        return "bg-accent/10 border-accent/30 text-accent";
      case "activity":
        return "bg-primary/10 border-primary/30 text-primary";
      default:
        return "bg-gray/10 border-gray/30 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        .text-primary {
          color: #186d46;
        }
        .text-secondary {
          color: #61ce70;
        }
        .text-accent {
          color: #2e6d72;
        }
        .bg-primary {
          background-color: #186d46;
        }
        .bg-secondary {
          background-color: #61ce70;
        }
        .bg-accent {
          background-color: #2e6d72;
        }
        .bg-primary\\/10 {
          background-color: rgba(24, 109, 70, 0.1);
        }
        .bg-secondary\\/10 {
          background-color: rgba(97, 206, 112, 0.1);
        }
        .bg-accent\\/10 {
          background-color: rgba(46, 109, 114, 0.1);
        }
        .border-primary\\/30 {
          border-color: rgba(24, 109, 70, 0.3);
        }
        .border-secondary\\/30 {
          border-color: rgba(97, 206, 112, 0.3);
        }
        .border-accent\\/30 {
          border-color: rgba(46, 109, 114, 0.3);
        }
        .from-primary {
          --tw-gradient-from: #186d46;
        }
        .to-secondary {
          --tw-gradient-to: #61ce70;
        }
        .hover\\:bg-primary:hover {
          background-color: #186d46;
        }
      `}</style>

      {/* Hero Section */}

      {/* Timing Highlights */}
      <div className="pt-20">
        <section className="bg-gradient-to-r pt-20 from-primary to-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-3 mb-8">
                <Clock className="w-6 h-6 mr-3" />
                <span className="font-semibold">School Schedule</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                School Timing
              </h1>

              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Our carefully planned schedule ensures optimal learning while
                maintaining a healthy balance between academics, activities, and
                rest periods.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {timingHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className={`${highlight.color} mb-4 flex justify-center`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Weekly Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured timetable designed to maximize learning potential
              while ensuring students have time for growth and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {scheduleData.map((schedule, dayIndex) => (
              <div
                key={dayIndex}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-primary text-white p-6">
                  <div className="flex items-center">
                    {schedule.icon}
                    <h3 className="text-2xl font-bold ml-3">{schedule.day}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {schedule.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className={`${getSessionStyle(
                        session.type
                      )} rounded-xl p-4 border-2 transition-all duration-300 hover:shadow-md`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {session.icon}
                          <div className="ml-3">
                            <h4 className="font-semibold text-lg">
                              {session.activity}
                            </h4>
                            <p className="text-sm opacity-80">{session.time}</p>
                          </div>
                        </div>
                        <Bell className="w-5 h-5 opacity-60" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Important Guidelines
              </h2>
              <p className="text-xl text-gray-600">
                Please take note of these essential timing policies for smooth
                school operations
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {importantNotes.map((note, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-secondary/20 rounded-full p-2 mr-4 mt-1">
                      <Bell className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <Clock className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Questions About Our Schedule?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Our administrative team is here to help clarify any timing-related
              queries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Contact Office
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                Download Schedule
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolTimingPage;
