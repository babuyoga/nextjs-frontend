'use client';
import React from 'react';
import ContactSearch from './ContactSearch';
import ContactActions from './ContactActions';
import { Button } from '@/components/ui/Button';
import { Plus, ArrowUpDown } from 'lucide-react';

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
  setContacts: React.Dispatch<React.SetStateAction<any[]>>;
}

const ContactHeader: React.FC<Props> = () => {
  return (
    <div className="flex mb-6">
   
      <div className="flex gap-5 h-fit w-fit flex-col ">
      <ContactActions />
       <div className="flex flex-row gap-5">
        <ContactSearch/> 
        <Button variant="outline" icon={<ArrowUpDown size={16} />}> Sort by </Button>
        <Button variant="primary" icon={<Plus size={16} />}> Add Contact</Button>
      </div>
      
        
      </div>
    </div>
  );
};

export default ContactHeader;
