import React from 'react';

const Attendance = () => {
  const workshops = [
    {
      workshopName: 'React Workshop',
      attendees: [
        { studentName: 'John Doe', status: 'Present' },
        { studentName: 'Jane Smith', status: 'Absent' },
        { studentName: 'Michael Johnson', status: 'Present' },
      ],
    },
    {
      workshopName: 'JavaScript Basics',
      attendees: [
        { studentName: 'Alice Brown', status: 'Present' },
        { studentName: 'Chris Lee', status: 'Absent' },
      ],
    },
  ];

  return (
    <div className="iattendance-container">
      <h1>Workshop Attendance</h1>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Workshop Name</th>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {workshops.map((workshop, workshopIndex) =>
            workshop.attendees.map((attendee, attendeeIndex) => (
              <tr key={`${workshopIndex}-${attendeeIndex}`}>
                <td>{workshopIndex === 0 ? workshop.workshopName : ''}</td> {/* Show workshop name once per group */}
                <td>{attendee.studentName}</td>
                <td>{attendee.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
