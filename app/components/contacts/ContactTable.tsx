'use client';
import React from 'react';
import ContactRow from './ContactRow';

interface Props {
  contacts: {
    id: number;
    name: string;
    title: string;
    email: string;
    phone: string;
    added: string;
    status: string;
  }[];
}

const ContactTable: React.FC<Props> = ({ contacts }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="bg-gray-50 text-gray-700 font-medium border-b">
          <tr>
            <th className="px-6 py-3"><input type="checkbox" /></th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone Number</th>
            <th className="px-6 py-3">Call</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
