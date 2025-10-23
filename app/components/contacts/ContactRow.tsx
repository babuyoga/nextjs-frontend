'use client';
import React from 'react';
import { EllipsisVertical } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface Props {
  contact: {
    id: number;
    name: string;
    title: string;
    email: string;
    phone: string;
    added: string;
    status: string;
  };
}

const ContactRow: React.FC<Props> = ({ contact }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-6 py-3"><input type="checkbox" /></td>
      <td className="px-6 py-3 font-medium text-gray-900">{contact.name}</td>
      <td className="px-6 py-3 text-gray-700">{contact.email}</td>
      <td className="px-6 py-3">{contact.phone}</td>
      <td className="px-6 py-3 flex items-center gap-2">
        <Badge status={contact.status} />
        <EllipsisVertical size={16} className="text-gray-400 ml-auto cursor-pointer" />
      </td>
    </tr>
  );
};

export default ContactRow;
