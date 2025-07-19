export interface BoardMember {
  name: string;
  position: string;
  email?: string;
  phone?: string;
}

export interface MeetingMinutes {
  date: string;
  title: string;
  summary: string;
  attendees: string[];
  keyDecisions: string[];
  nextMeeting?: string;
}

export interface HoaDocument {
  title: string;
  description: string;
  category: 'bylaws' | 'rules' | 'financial' | 'meeting' | 'other';
  lastUpdated: string;
  fileUrl?: string;
}

export interface CommunityEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isRecurring?: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'community' | 'events' | 'landscape' | 'amenities';
}

// HOA Meeting Information
export const meetingInfo = {
  regularMeeting: {
    schedule: "Fourth Monday of each month",
    time: "7:00 PM",
    location: "Mt. Vernon Police Station",
    address: "2511 Parkers Lane",
    city: "Alexandria, VA"
  },
  annualMeeting: {
    schedule: "Second Tuesday of May",
    time: "7:00 PM",
    location: "Mt. Vernon Police Station",
    address: "2511 Parkers Lane",
    city: "Alexandria, VA"
  }
};

// Board of Directors
export const boardMembers: BoardMember[] = [
  {
    name: "John Smith",
    position: "President",
    email: "president@firstriverfarms.com"
  },
  {
    name: "Sarah Johnson",
    position: "Vice President",
    email: "vicepresident@firstriverfarms.com"
  },
  {
    name: "Michael Davis",
    position: "Secretary",
    email: "secretary@firstriverfarms.com"
  },
  {
    name: "Lisa Wilson",
    position: "Treasurer",
    email: "treasurer@firstriverfarms.com"
  },
  {
    name: "Robert Brown",
    position: "Board Member at Large",
    email: "board@firstriverfarms.com"
  }
];

// HOA Documents
export const hoaDocuments: HoaDocument[] = [
  {
    title: "FRF HOA Rules and Regulations",
    description: "Comprehensive rules and regulations for First River Farms community",
    category: "rules",
    lastUpdated: "2024-01-15",
    fileUrl: "/documents/frf-hoa-rules-and-regulations.pdf"
  },
  {
    title: "HOA Bylaws",
    description: "Official bylaws of the First River Farms Homeowners Association",
    category: "bylaws",
    lastUpdated: "2023-06-20",
    fileUrl: "/documents/hoa-bylaws.pdf"
  },
  {
    title: "Resale Instructions",
    description: "Instructions for property resale within the community",
    category: "other",
    lastUpdated: "2024-02-10",
    fileUrl: "/documents/resale-instructions.pdf"
  },
  {
    title: "Architectural Guidelines",
    description: "Guidelines for exterior modifications and improvements",
    category: "rules",
    lastUpdated: "2023-11-05",
    fileUrl: "/documents/architectural-guidelines.pdf"
  },
  {
    title: "Annual Budget 2024",
    description: "HOA annual budget and financial overview",
    category: "financial",
    lastUpdated: "2024-01-01",
    fileUrl: "/documents/annual-budget-2024.pdf"
  }
];

// Recent Meeting Minutes
export const meetingMinutes: MeetingMinutes[] = [
  {
    date: "2024-03-25",
    title: "March 2024 Board Meeting",
    summary: "Regular monthly board meeting covering community updates, maintenance projects, and resident concerns.",
    attendees: ["John Smith", "Sarah Johnson", "Michael Davis", "Lisa Wilson", "Robert Brown"],
    keyDecisions: [
      "Approved new landscaping contract for common areas",
      "Discussed upcoming pool maintenance schedule",
      "Reviewed resident feedback on parking regulations"
    ],
    nextMeeting: "2024-04-22"
  },
  {
    date: "2024-02-26",
    title: "February 2024 Board Meeting",
    summary: "Monthly board meeting with focus on winter maintenance and upcoming spring projects.",
    attendees: ["John Smith", "Sarah Johnson", "Michael Davis", "Lisa Wilson"],
    keyDecisions: [
      "Approved budget for spring landscaping",
      "Scheduled tennis court resurfacing for April",
      "Updated community newsletter distribution"
    ],
    nextMeeting: "2024-03-25"
  },
  {
    date: "2024-01-22",
    title: "January 2024 Board Meeting",
    summary: "First board meeting of the year with annual planning and budget review.",
    attendees: ["John Smith", "Sarah Johnson", "Michael Davis", "Lisa Wilson", "Robert Brown"],
    keyDecisions: [
      "Approved 2024 annual budget",
      "Set priorities for capital improvement projects",
      "Established new communication protocols"
    ],
    nextMeeting: "2024-02-26"
  }
];

// Community Events
export const communityEvents: CommunityEvent[] = [
  {
    title: "Annual Community Picnic",
    date: "2024-06-15",
    time: "12:00 PM - 4:00 PM",
    location: "Community Pool Area",
    description: "Annual summer picnic with food, games, and community fellowship."
  },
  {
    title: "Holiday Decorating Contest",
    date: "2024-12-01",
    time: "All Day",
    location: "Throughout Community",
    description: "Annual holiday decorating contest with prizes for best displays."
  },
  {
    title: "Spring Cleanup Day",
    date: "2024-04-20",
    time: "9:00 AM - 12:00 PM",
    location: "Common Areas",
    description: "Community-wide spring cleanup and beautification project."
  }
];

// Gallery Images
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Community Pool",
    description: "Beautiful community pool area with landscaping",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "amenities"
  },
  {
    id: "2",
    title: "Tennis Courts",
    description: "Well-maintained tennis courts for residents",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "amenities"
  },
  {
    id: "3",
    title: "River View",
    description: "Scenic views of the Potomac River",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "landscape"
  },
  {
    id: "4",
    title: "Community Entrance",
    description: "Welcoming entrance to First River Farms",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "community"
  },
  {
    id: "5",
    title: "Walking Trails",
    description: "Peaceful walking trails throughout the community",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "amenities"
  },
  {
    id: "6",
    title: "Community Event",
    description: "Residents enjoying a community gathering",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "events"
  }
];

// Contact Information
export const contactInfo = {
  hoaEmail: "firstriverfarmshoa@gmail.com",
  managementCompany: {
    name: "Community Management Services",
    phone: "(703) 555-0123",
    email: "cms@communitymgmt.com",
    website: "https://communitymgmt.com"
  },
  emergency: {
    police: "911",
    nonEmergency: "(703) 555-0111"
  }
};

// Neighborhood Watch Information
export const neighborhoodWatch = {
  coordinator: "Mary Johnson",
  coordinatorEmail: "watch@firstriverfarms.com",
  description: "The FRF Neighborhood Watch Program is dedicated to keeping our community safe through resident awareness and cooperation with local law enforcement.",
  guidelines: [
    "Report suspicious activity immediately",
    "Keep exterior lighting on at night",
    "Lock vehicles and remove valuables",
    "Know your neighbors and their vehicles",
    "Participate in community safety meetings"
  ],
  meetingSchedule: "First Wednesday of each month at 7:00 PM"
};

// Mock user data for authentication
export const mockUsers = [
  {
    id: 1,
    username: "resident",
    email: "resident@example.com",
    name: "John Resident",
    address: "123 First River Lane",
    isApproved: true,
    role: "resident"
  },
  {
    id: 2,
    username: "admin",
    email: "admin@firstriverfarms.com",
    name: "HOA Administrator",
    isApproved: true,
    role: "admin"
  }
];

export const pendingApplications = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@email.com",
    address: "456 River View Drive",
    phone: "(703) 555-0124",
    submittedDate: "2024-03-20",
    status: "pending"
  },
  {
    id: 2,
    name: "Bob Wilson",
    email: "bob.wilson@email.com",
    address: "789 Farm Lane",
    phone: "(703) 555-0125",
    submittedDate: "2024-03-18",
    status: "pending"
  }
]; 