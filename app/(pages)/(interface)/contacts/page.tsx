'use client';

import React, { useState } from 'react';
import ContactHeader from '@/app/components/contacts/ContactHeader';
import ContactTable from '@/app/components/contacts/ContactTable';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Marvin McKinney', title: 'Junior Marketer', email: 'marvinmckinney@gmail.com', phone: '(217) 555-0113', added: 'Jan 12, 2024', status: 'Active' },
    { id: 2, name: 'Cody Fisher', title: 'Health officer', email: 'codyfisher@gmail.com', phone: '(684) 555-0102', added: 'Jan 31, 2024', status: 'Active' },
    { id: 3, name: 'Devon Lane', title: 'Customer Care', email: 'devonlane@gmail.com', phone: '(316) 555-0116', added: 'Jan 28, 2024', status: 'Deactivated' },
  ]);

  return (
    <div className="p-8 flex flex-col w-full h-fit min-h-screen">
         <h1 className="text-2xl font-semibold text-gray-800 my-5">Contacts</h1>
      <ContactHeader contacts={contacts} setContacts={setContacts} />
      <ContactTable contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
