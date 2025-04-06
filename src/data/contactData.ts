import { CalendarDays, Clock, Linkedin, Mail, Phone } from "lucide-react";

export interface ContactMethod {
  icon: React.ElementType;
  title: string;
  value: string;
  actionText?: string;
  url: string;
}

export interface AvailabilityInfo {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const contactData = {
  phoneNumber: "6285813095235",
  email: "rizal.suse@gmail.com",
  linkedIn: "https://www.linkedin.com/in/rizal-suryawan/",
  linkedInName: "Rizal Suryawan",
};

export const availabilityData: AvailabilityInfo[] = [
  {
    icon: Clock,
    title: "Response Time",
    description: "Typically replies within 24 hours",
  },
  {
    icon: CalendarDays,
    title: "Working Hours",
    description: "Monday-Friday: 9AM-5PM\nWeekend: Occasionally available",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: `+${contactData.phoneNumber}`,
    actionText: "Start chat now",
    url: `https://wa.me/${contactData.phoneNumber}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: contactData.email,
    actionText: "Send email",
    url: `mailto:${contactData.email}`,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: contactData.linkedInName,
    actionText: "Let's connect",
    url: contactData.linkedIn,
  },
];
