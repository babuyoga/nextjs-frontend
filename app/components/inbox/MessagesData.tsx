'use client';

export const mockUser = {
  id: 0,
  name: "Current User",
  avatarUrl: 'https://placehold.co/40x40/4F46E5/ffffff?text=ME',
};

export const mockConversations = [
  { id: 1, name: "Dimitry Chaykovsky", lastMessage: "Alii autem, quibus ego cum teneam sententiam, id est per se expetendum esse...", time: "09:45", unreadCount: 2, avatarUrl: 'https://placehold.co/40x40/FBBF24/333?text=DC', rating: 5, location: "Edinburgh", product: { title: "Epicurus in ea quid iudicat es", price: "$120.00", imageUrl: 'https://placehold.co/64x40/94A3B8/fff?text=Product' } },
  { id: 2, name: "Cvita Doleschall", lastMessage: "Certe numquam pertinax non numquam eius modi est...", time: "3h ago", unreadCount: 3, avatarUrl: 'https://placehold.co/40x40/EC4899/fff?text=CD' },
  { id: 3, name: "Karine Delgadillo", lastMessage: "Alii autem, quibus ego cum teneam sententiam...", time: "6h ago", unreadCount: 0, avatarUrl: 'https://placehold.co/40x40/10B981/fff?text=KD' },
  { id: 4, name: "Juan Esteban Sarmiento", lastMessage: "Certe numquam pertinax non numquam eius modi...", time: "Yesterday", unreadCount: 0, avatarUrl: 'https://placehold.co/40x40/F59E0B/fff?text=JS' },
  { id: 5, name: "Rafeeda El Nouri", lastMessage: "Alii autem, quibus ego cum teneam sententiam...", time: "2 days ago", unreadCount: 1, avatarUrl: 'https://placehold.co/40x40/6366F1/fff?text=RE' },
  { id: 6, name: "Hugo Assuncao", lastMessage: "Certe numquam pertinax non numquam eius modi...", time: "1 week ago", unreadCount: 0, avatarUrl: 'https://placehold.co/40x40/06B6D4/fff?text=HA' },
  { id: 7, name: "Annah Briston", lastMessage: "Alii autem, quibus ego cum teneam sententiam...", time: "1 week ago", unreadCount: 0, avatarUrl: 'https://placehold.co/40x40/C026D3/fff?text=AB' },
];

export const mockMessages = [
  { id: 101, conversationId: 1, senderName: "Dimitry Chaykovsky", content: "Epicurus in ea quid iudicat es", time: "10:00", isOutgoing: false, avatarUrl: 'https://placehold.co/40x40/FBBF24/333?text=DC', isProduct: true, productText: "Epicurus in ea quid iudicat es", productPrice: "$120.00", productLocation: "Edinburgh", productRating: 5 },
  { id: 102, conversationId: 1, senderName: "Dimitry Chaykovsky", content: "Quae fuerit causa, mox videro, interea hoc tenebo, si potuero, nullum finem adhibet...", time: "10:00", isOutgoing: false, avatarUrl: 'https://placehold.co/40x40/FBBF24/333?text=DC' },
  { id: 103, conversationId: 1, senderName: mockUser.name, content: "Quae fuerit causa, mox videro, interea hoc tenebo, si potuero, nullum finem adhibet...", time: "10:03", isOutgoing: true, avatarUrl: mockUser.avatarUrl },
  { id: 104, conversationId: 1, senderName: "Dimitry Chaykovsky", content: "Si sine causa, nollem me tamen laudandis moribus meo rustici...", time: "10:10", isOutgoing: false, avatarUrl: 'https://placehold.co/40x40/FBBF24/333?text=DC' },
  { id: 105, conversationId: 1, senderName: mockUser.name, content: "Si sine metu degendae praesidia firmiissima filium morte multavit si sine causa...", time: "10:16", isOutgoing: true, avatarUrl: mockUser.avatarUrl },
  { id: 106, conversationId: 1, senderName: "Dimitry Chaykovsky", content: "Nihil sane. Sed haec quidem...", time: "10:21", isOutgoing: false, avatarUrl: 'https://placehold.co/40x40/FBBF24/333?text=DC' },
];
