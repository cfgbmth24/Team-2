import React from 'react';

function TicketCard({ title, date, location, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mr-6">
      <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-t-lg p-2 mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-gray-600 mb-2">Date: {date}</p>
      <p className="text-gray-600 mb-2">Location: {location}</p>
      <p className="text-gray-600 mb-2">Price: ${price}</p>
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">Buy Ticket</button>
    </div>
  );
}

function TicketsPage() {
  const tickets = [
    { id: 1, title: 'Music Festival', date: 'April 20, 2024', location: 'Central Park', price: 50 },
    { id: 2, title: 'Art Exhibition', date: 'May 15, 2024', location: 'Downtown Gallery', price: 30 },
    { id: 3, title: 'Charity Gala', date: 'June 10, 2024', location: 'Grand Ballroom, Hilton Hotel', price: 20 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Tickets</h1>
      <div className="flex">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} title={ticket.title} date={ticket.date} location={ticket.location} price={ticket.price} />
        ))}
      </div>
    </div>
  );
}

export default TicketsPage;