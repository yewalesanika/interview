// Sample Reviews Data
const reviewsData = [
    {
        id: 1,
        reviewer: {
            name: 'Jacob Jones',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        },
        rating: 5,
        content: 'Great quality and attention to detail. Their designs elevated my brand. I just wanted to say thank you for the excellent work!',
        date: '2025-01-20T17:42:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 2,
        reviewer: {
            name: 'Marvin McKinney',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
        },
        rating: 3,
        content: 'The team is talented, and their product was good, but communication could be better. I had to follow up multiple times to get updates. If they improve responsiveness, they\'d be perfect.',
        date: '2025-01-24T15:20:00Z',
        status: 'unread',
        priority: true,
        attachments: [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=150&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop',
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop',
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=150&h=150&fit=crop'
        ],
        response: {
            content: 'Really appreciate you taking the time to share this. I\'m so glad to hear you liked the product and our team\'s work — that truly means a lot. At the same time, I\'m genuinely sorry you had to follow up more than once to get updates. That\'s on us, and we\'re working on being more proactive with communication. Thanks again for the thoughtful feedback — it helps us get better, and we hope to make your next experience a smoother one.',
            author: {
                name: 'You',
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
            },
            date: '2025-01-24T15:30:00Z'
        }
    },
    {
        id: 3,
        reviewer: {
            name: 'Theresa Webb',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b639?w=150&h=150&fit=crop&crop=face'
        },
        rating: 4,
        content: 'The best service I\'ve received in a long time! The team was incredibly responsive and professional. Really happy with the results.',
        date: '2025-01-20T10:30:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 4,
        reviewer: {
            name: 'Jane Cooper',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
        },
        rating: 4,
        content: 'The team is talented, and their product was good, but communication could be better. Overall satisfied with the quality of work delivered.',
        date: '2025-01-20T14:15:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 5,
        reviewer: {
            name: 'Jenny Wilson',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
        },
        rating: 5,
        content: 'Very professional and skilled team. The only issue was that we had to request updates multiple times. Otherwise, excellent work!',
        date: '2025-01-20T09:45:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 6,
        reviewer: {
            name: 'Robert Fox',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
        },
        rating: 5,
        content: 'Their design work was stunning! We received many compliments from clients. Highly recommended for anyone looking for top-quality design services.',
        date: '2025-01-20T16:22:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 7,
        reviewer: {
            name: 'Annette Black',
            avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face'
        },
        rating: 4,
        content: 'Good experience overall. The team delivered on time and the quality was solid. There\'s room for improvement in communication, but I\'d work with them again.',
        date: '2025-01-20T11:30:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 8,
        reviewer: {
            name: 'Brooklyn Simmons',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
        },
        rating: 2,
        content: 'Disappointed with the service. Multiple issues with delivery and communication. The final product was okay, but the process was frustrating.',
        date: '2025-01-19T14:20:00Z',
        status: 'unread',
        priority: true,
        attachments: [],
        response: null
    },
    {
        id: 9,
        reviewer: {
            name: 'Esther Howard',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
        },
        rating: 5,
        content: 'Absolutely fantastic! The team exceeded our expectations in every way. Professional, creative, and delivered exactly what we needed on time.',
        date: '2025-01-19T13:45:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 10,
        reviewer: {
            name: 'Ralph Edwards',
            avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face'
        },
        rating: 4,
        content: 'Great work quality and professional team. The project was completed successfully, though there were some minor delays in the timeline.',
        date: '2025-01-19T10:15:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 11,
        reviewer: {
            name: 'Jerome Bell',
            avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=face'
        },
        rating: 3,
        content: 'The service was average. Good technical skills but could improve on customer service and communication throughout the project.',
        date: '2025-01-18T16:30:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 12,
        reviewer: {
            name: 'Kathryn Murphy',
            avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
        },
        rating: 5,
        content: 'Outstanding service from start to finish! The team was responsive, creative, and delivered exceptional results. Will definitely work with them again.',
        date: '2025-01-18T12:20:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 13,
        reviewer: {
            name: 'Courtney Henry',
            avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face'
        },
        rating: 1,
        content: 'Very poor experience. The project was delayed multiple times, communication was terrible, and the final deliverable didn\'t meet our requirements.',
        date: '2025-01-18T09:10:00Z',
        status: 'unread',
        priority: true,
        attachments: [],
        response: null
    },
    {
        id: 14,
        reviewer: {
            name: 'Arlene McCoy',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
        },
        rating: 4,
        content: 'Solid work and good attention to detail. The team was professional and delivered quality results. Minor issues with timeline but overall satisfied.',
        date: '2025-01-17T15:45:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 15,
        reviewer: {
            name: 'Darrell Steward',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
        },
        rating: 5,
        content: 'Excellent experience! The team was professional, communicative, and delivered exactly what we needed. Highly recommend their services.',
        date: '2025-01-17T14:22:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 16,
        reviewer: {
            name: 'Kristin Watson',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b639?w=150&h=150&fit=crop&crop=face'
        },
        rating: 3,
        content: 'Mixed experience. The quality of work was good, but there were several communication issues and delays that made the process frustrating.',
        date: '2025-01-17T11:30:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 17,
        reviewer: {
            name: 'Albert Flores',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        },
        rating: 4,
        content: 'Good service overall. The team was skilled and delivered quality work. There\'s room for improvement in project management and communication.',
        date: '2025-01-16T16:15:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 18,
        reviewer: {
            name: 'Cameron Williamson',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
        },
        rating: 5,
        content: 'Fantastic team and exceptional results! They understood our vision perfectly and delivered beyond our expectations. Highly professional throughout.',
        date: '2025-01-16T13:40:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    },
    {
        id: 19,
        reviewer: {
            name: 'Cody Fisher',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
        },
        rating: 2,
        content: 'Disappointed with the service. Poor communication, missed deadlines, and the final product required significant revisions. Would not recommend.',
        date: '2025-01-16T10:25:00Z',
        status: 'read',
        priority: true,
        attachments: [],
        response: null
    },
    {
        id: 20,
        reviewer: {
            name: 'Bessie Cooper',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
        },
        rating: 4,
        content: 'Good experience working with this team. They delivered quality work on time and were responsive to our feedback. Would consider working with them again.',
        date: '2025-01-15T14:50:00Z',
        status: 'read',
        priority: false,
        attachments: [],
        response: null
    }
];

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = reviewsData;
} 