// house_list.js
import House1 from './src/assets/House-1.jpg';
import House2 from './src/assets/House-2.jpg';
import House3 from './src/assets/House-3.jpg';
import House4 from './src/assets/House-4.jpg';
import House5 from './src/assets/House-5.jpg';
import House6 from './src/assets/House-6.jpg';
import House7 from './src/assets/House-7.jpg';
import House8 from './src/assets/House-8.jpg';
import House9 from './src/assets/House-9.jpg';
import House10 from './src/assets/House-10.jpg';
import House11 from './src/assets/House-11.jpg';
import House12 from './src/assets/House-12.jpg';
import House13 from './src/assets/House-13.jpg';
import House14 from './src/assets/House-14.jpg';
// Lodges Images
import Lodge1 from './src/assets/Lodge-1.jpg'
import Lodge2 from './src/assets/Lodge-2.jpg'
import Lodge3 from './src/assets/Lodge-3.jpg'
import Lodge4 from './src/assets/Lodge-4.jpg'
import Lodge5 from './src/assets/Lodge-5.webp'
import Lodge6 from './src/assets/Lodge-6.jfif'
import Lodge7 from './src/assets/Lodge-7.jfif'
import Lodge8 from './src/assets/Lodge-8.jfif'
import Lodge9 from './src/assets/Lodge-9.jfif'
import Lodge10 from './src/assets/Lodge-10.jfif'
import Lodge11 from './src/assets/Lodge-11.jpg'
import Lodge12 from './src/assets/Lodge-12.jfif'
// SharedRooms  (Roomates)
import SharedRoom1 from './src/assets/sharedRoom1.avif'
import SharedRoom2 from './src/assets/sharedRoom2.avif'
import SharedRoom3 from './src/assets/sharedRoom3.jpg'
import SharedRoom4 from './src/assets/sharedRoom4.jpg'
import SharedRoom5 from './src/assets/sharedRoom5.jpg'
import SharedRoom6 from './src/assets/sharedRoom6.jpg'
import SharedRoom7 from './src/assets/sharedRoom7.webp'
import SharedRoom8 from './src/assets/sharedRoom8.jpg'

// Student Hostels (Hostelmates)
import Hostel1 from './src/assets/Hostel-1.jpg'
import Hostel2 from './src/assets/Hostel-2.jpg'
import Hostel3 from './src/assets/Hostel-3.jpg'
import Hostel4 from './src/assets/Hostel-4.jpg'
import Hostel5 from './src/assets/Hostel-5.jpg'
import Hostel6 from './src/assets/Hostel-6.jpg'
import Hostel7 from './src/assets/Hostel-7.jpg'
import Hostel8 from './src/assets/Hostel-8.jpg'

// Icons for Amenites
import { FaBed, FaBath, FaWifi, FaCar, FaCouch, FaWater, FaSwimmingPool, FaShieldAlt, FaBolt, FaUsers } from "react-icons/fa";
import { MdKitchen, MdMeetingRoom, MdSecurity, MdLocalLaundryService } from "react-icons/md";

export const house_List = [
  {
    id: 1,
    name: "4-Bedroom Duplex Apartment",
    image: House6,
    rating: 3.5,
    state: "Enugu State",
    location: "Abakpa Nike",
    rent: "₦2,000,000 per Year",
    description:
      "Spacious duplex with four bedrooms, parking space, and modern interior finishes.",
    amenities: [
      { label: "Bedrooms", value: 4, icon: FaBed  },
      { label: "Bathrooms", value: 3, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Parking", value: true, icon: FaCar},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "Water Supply", value: true, icon: FaWater},
    ],
  },
  {
    id: 2,
    name: "2 Bedrooms Flat",
    image: House5,
    rating: 4.7,
    state: "Rivers State",
    location: "Peter Odili RD, PH",
    rent: "₦650,000 per Year",
    description:
      "Affordable and cozy 2-bedroom flat in a peaceful neighborhood.",
    amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
    ],
  },
  {
    id: 3,
    name: "3 Bedrooms Bungalow",
    image: House2,
    rating: 4.9,
    state: "Abuja FCT",
    location: "Gwarimpa",
    rent: "₦1,200,000 per Year",
    description:
      "Beautifully finished bungalow with spacious rooms and a small compound.",
    amenities: [
      { label: "Bedrooms", value: 3, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Parking", value: true, icon: FaCar},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "Water Supply", value: true, icon: FaWater},
    ],
  },
  {
    id: 4,
    name: "Luxury 5-Bedroom Duplex",
    image: House3,
    rating: 4.5,
    state: "Lagos State",
    location: "Lekki Phase 1",
    rent: "₦4,500,000 per Year",
    description:
      "A luxury duplex with premium finishing, swimming pool, and 24/7 security.",
    amenities: [
      { label: "Bedrooms", value: 5, icon: FaBed},
      { label: "Bathrooms", value: 5, icon: FaBath},
      { label: "Swimming Pool", value: true, icon: FaSwimmingPool},
      { label: "Security", value: true, icon: FaShieldAlt},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Parking", value: true, icon: FaCar},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "Water Supply", value: true, icon: FaWater},
    ],
  },
  {
    id: 5,
    name: "1 Bedroom Self Contained",
    image: House4,
    rating: 4.0,
    state: "Anambra State",
    location: "Awka",
    rent: "₦250,000 per Year",
    description:
      "Compact one-bedroom self-contained apartment suitable for students or single tenants.",
    amenities: [
      { label: "Bedrooms", value: 1, icon: FaBed},
      { label: "Bathrooms", value: 1, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Water Supply", value: true, icon: FaWater},
    ],
  },
];


export const lodge_List = [
  {
    id: 1,
    name: "1-Bedroom Apartment",
    image: Lodge1,
    rating: 3.5,
    state: "Enugu State",
    location: "Agbani Akpugo (ESUT)",
    rent: "₦250,000 per Year",
    description: "Comfortable 1-bedroom apartment close to ESUT campus.",
     amenities: [
      { label: "Bedrooms", value: 1, icon: FaBed},
      { label: "Bathrooms", value: 1, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: false, icon: FaCouch},
      { label: "WiFi", value: false, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
    ],
  },
  {
    id: 2,
    name: "Self Contain",
    image: Lodge2,
    rating: 4,
    state: "Enugu State",
    location: "Achara Layout (UNEC Area)",
    rent: "₦350,000 per Year",
    description: "Secure and well-ventilated self contain, ideal for students.",
  amenities: [
      { label: "Bedrooms", value: 1, icon: FaBed},
      { label: "Bathrooms", value: 1, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: false, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
    ],
  },
  {
    id: 3,
    name: "Self Contain",
    image: Lodge3,
    rating: 3.7,
    state: "Enugu State",
    location: "Trans Ekulu",
    rent: "₦200,000 per Year",
    description: "Budget-friendly unit in a quiet, residential area.",
    amenities: [
      { label: "Bedrooms", value: 1, icon: FaBed},
      { label: "Bathrooms", value: 1, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: false, icon: FaCouch},
      { label: "WiFi", value: false, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: false, icon: MdSecurity},
    ],
  },
  {
    id: 4,
    name: "2 Bedroom Apartment",
    image: Lodge4,
    rating: 4.7,
    state: "Enugu State",
    location: "Gariki",
    rent: "₦450,000 per Year",
    description: "Two bedrooms, living room, kitchen and easy access to main road.",
   amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
      { label: "Parking", value: true, icon: FaCar},
    ],
  },
  {
    id: 5,
    name: "Self Contain Lodge",
    image: Lodge5,
    rating: 4.7,
    state: "Enugu State",
    location: "IMT Enugu",
    rent: "₦200,000 per Year",
    description: "Walking distance to IMT; includes kitchenette and bathroom.",
    amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
      { label: "Parking", value: true, icon: FaCar},
    ],
  },
  {
    id: 6,
    name: "1 Bedroom Apartment",
    image: Lodge6,
    rating: 4.7,
    state: "Enugu State",
    location: "New Layout",
    rent: "₦400,000 per Year",
    description: "Newly renovated with tiled floors and borehole water supply.",
    amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
      { label: "Parking", value: true, icon: FaCar},
    ],
  },
  {
    id: 7,
    name: "Shared 2 Bedroom Flat",
    image: Lodge7,
    rating: 3,
    state: "Anambra State",
    location: "Onitsha",
    rent: "₦250,000 per Year",
    description: "Shared flat with individual rooms and shared facilities.",
   amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
      { label: "Parking", value: true, icon: FaCar},
    ],
  },
  {
    id: 8,
    name: "1 Bedroom Flat",
    image: Lodge8,
    rating: 4,
    state: "Enugu State",
    location: "Abakpa Nike",
    rent: "₦350,000 per Year",
    description: "Fully fenced 1-bedroom apartment with constant power supply.",
    amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
      { label: "Parking", value: true, icon: FaCar},
    ],
  },
  {
    id: 9,
    name: "1 Bedroom Flat",
    image: Lodge9,
    rating: 4,
    state: "Enugu State",
    location: "Iva-Valley",
    rent: "₦350,000 per Year",
    description: "Standard apartment in a peaceful neighborhood with security.",
    amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
      { label: "Parking", value: true, icon: FaCar},
    ],
  },
  {
    id: 10,
    name: "Self Container",
    image: Lodge10,
    rating: 4,
    state: "Rivers State",
    location: "Trans Amadi",
    rent: "₦250,000 per Year",
    description: "Ideal for single tenants, comes with modern fittings.",
    amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
      { label: "Parking", value: true, icon: FaCar},
    ],
  },
  {
    id: 11,
    name: "1 Bedroom Flat",
    image: Lodge11,
    rating: 2,
    state: "Enugu State",
    location: "Thinkers Corner",
    rent: "₦200,000 per Year",
    description: "Basic but functional apartment close to bus routes.",
    amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
      { label: "Parking", value: true, icon: FaCar},
    ],
  },
  {
    id: 12,
    name: "1 Bedroom Flat",
    image: Lodge12,
    rating: 3.5,
    state: "Enugu State",
    location: "Emene",
    rent: "₦420,000 per Year",
    description: "Tiled, ventilated and affordable housing for singles or couples.",
    amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 2, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Furnished", value: true, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
      { label: "Parking", value: true, icon: FaCar},
    ],
  },
];


export const sharedRoom_List = [
  {
    id: 1,
    name: "Shared 2-Bedroom Apartment",
    image: SharedRoom1,
    rating: 4,
    state: "Enugu State",
    location: "Agbani (ESUT Area)",
    rent: "₦150,000 per Year (Per Person)",
    description: "Looking for a roommate to share a 2-bedroom apartment near ESUT campus. Shared kitchen and living room.",
     amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed},
      { label: "Bathrooms", value: 1, icon: FaBath},
      { label: "Kitchen", value: true, icon: MdKitchen},
      { label: "Living Room", value: true, icon: MdMeetingRoom},
      { label: "Furnished", value: false, icon: FaCouch},
      { label: "WiFi", value: true, icon: FaWifi},
      { label: "Water Supply", value: true, icon: FaWater},
      { label: "Security", value: true, icon: MdSecurity},
    ],
  },
  {
    id: 2,
    name: "Shared Self Contain",
    image: SharedRoom2,
    rating: 3.8,
    state: "Enugu State",
    location: "New Haven",
    rent: "₦120,000 per Year (Per Person)",
    description: "Affordable self contain split between two students. Shared bathroom and utilities.",
     amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed  },
      { label: "Bathrooms", value: 1, icon: FaBath  },
      { label: "Kitchen", value: true, icon: MdKitchen  },
      { label: "Living Room", value: true, icon: MdMeetingRoom  },
      { label: "Furnished", value: false, icon: FaCouch  },
      { label: "WiFi", value: true, icon: FaWifi  },
      { label: "Water Supply", value: true, icon: FaWater  },
      { label: "Security", value: true, icon: MdSecurity  },
    ],
  },
  {
    id: 3,
    name: "Shared Flat",
    image: SharedRoom3,
    rating: 4.5,
    state: "Anambra State",
    location: "Awka (UNIZIK Area)",
    rent: "₦180,000 per Year (Per Person)",
    description: "2-bedroom flat available for co-tenancy. Spacious rooms and close to UNIZIK.",
     amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed  },
      { label: "Bathrooms", value: 1, icon: FaBath  },
      { label: "Kitchen", value: true, icon: MdKitchen  },
      { label: "Living Room", value: true, icon: MdMeetingRoom  },
      { label: "Furnished", value: false, icon: FaCouch  },
      { label: "WiFi", value: true, icon: FaWifi  },
      { label: "Water Supply", value: true, icon: FaWater  },
      { label: "Security", value: true, icon: MdSecurity  },
    ],
  },
  {
    id: 4,
    name: "Shared 3-Bedroom Flat",
    image: SharedRoom4,
    rating: 3.9,
    state: "Enugu State",
    location: "Independence Layout",
    rent: "₦200,000 per Year (Per Person)",
    description: "Room available in a 3-bedroom shared apartment. Includes kitchen, living room, and 24/7 water supply.",
     amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed  },
      { label: "Bathrooms", value: 1, icon: FaBath  },
      { label: "Kitchen", value: true, icon: MdKitchen  },
      { label: "Living Room", value: true, icon: MdMeetingRoom  },
      { label: "Furnished", value: false, icon: FaCouch  },
      { label: "WiFi", value: true, icon: FaWifi  },
      { label: "Water Supply", value: true, icon: FaWater  },
      { label: "Security", value: true, icon: MdSecurity  },
    ],
  },
  {
    id: 5,
    name: "Shared 2-Bedroom Flat",
    image: SharedRoom5,
    rating: 4.2,
    state: "Rivers State",
    location: "Choba (UniPort Area)",
    rent: "₦160,000 per Year (Per Person)",
    description: "Looking for a flatmate to share a 2-bedroom near UniPort. Walking distance to campus.",
    amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed  },
      { label: "Bathrooms", value: 1, icon: FaBath  },
      { label: "Kitchen", value: true, icon: MdKitchen  },
      { label: "Living Room", value: true, icon: MdMeetingRoom  },
      { label: "Furnished", value: false, icon: FaCouch  },
      { label: "WiFi", value: true, icon: FaWifi  },
      { label: "Water Supply", value: true, icon: FaWater  },
      { label: "Security", value: true, icon: MdSecurity  },
    ],
  },
  {
    id: 6,
    name: "Shared Hostel Room",
    image: SharedRoom6,
    rating: 3.6,
    state: "Enugu State",
    location: "Gariki",
    rent: "₦100,000 per Year (Per Person)",
    description: "2 students per room. Affordable hostel-style accommodation with steady light and water.",
     amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed  },
      { label: "Bathrooms", value: 1, icon: FaBath  },
      { label: "Kitchen", value: true, icon: MdKitchen  },
      { label: "Living Room", value: true, icon: MdMeetingRoom  },
      { label: "Furnished", value: false, icon: FaCouch  },
      { label: "WiFi", value: true, icon: FaWifi  },
      { label: "Water Supply", value: true, icon: FaWater  },
      { label: "Security", value: true, icon: MdSecurity  },
    ],
  },
  {
    id: 7,
    name: "Shared Mini Flat",
    image: SharedRoom7,
    rating: 4.3,
    state: "Abia State",
    location: "Umuahia",
    rent: "₦140,000 per Year (Per Person)",
    description: "Mini flat with one vacant room. Shared kitchen and bathroom. Suitable for young professionals.",
     amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed  },
      { label: "Bathrooms", value: 1, icon: FaBath  },
      { label: "Kitchen", value: true, icon: MdKitchen  },
      { label: "Living Room", value: true, icon: MdMeetingRoom  },
      { label: "Furnished", value: false, icon: FaCouch  },
      { label: "WiFi", value: true, icon: FaWifi  },
      { label: "Water Supply", value: true, icon: FaWater  },
      { label: "Security", value: true, icon: MdSecurity  },
    ],
  },
  {
    id: 8,
    name: "Shared Apartment",
    image: SharedRoom8,
    rating: 4,
    state: "Enugu State",
    location: "Emene",
    rent: "₦130,000 per Year (Per Person)",
    description: "Shared 2-bedroom apartment with tiled floors, secure compound and borehole water.",
     amenities: [
      { label: "Bedrooms", value: 2, icon: FaBed  },
      { label: "Bathrooms", value: 1, icon: FaBath  },
      { label: "Kitchen", value: true, icon: MdKitchen  },
      { label: "Living Room", value: true, icon: MdMeetingRoom  },
      { label: "Furnished", value: false, icon: FaCouch  },
      { label: "WiFi", value: true, icon: FaWifi  },
      { label: "Water Supply", value: true, icon: FaWater  },
      { label: "Security", value: true, icon: MdSecurity  },
    ],
  },
];



export const hostel_List = [
  {
    id: 1,
    name: "ESUT Male Hostel (4 in a Room)",
    image: Hostel1,
    rating: 4.2,
    state: 'Enugu State',
    location: "Agbani (ESUT Campus)",
    rent: '₦85,000 per Year (Per Person)',
    description: "Affordable 4-man room inside Enugu State University (ESUT) hostel. Shared bathrooms, steady water and campus security.",
     amenities: [
      { label: "Shared Bathrooms", value: true, icon: FaBath  },
      { label: "Steady Water Supply", value: true, icon: FaWater  },
      { label: "Campus Security", value: true, icon: MdSecurity  },
      { label: "4-Man Room", value: true, icon: FaUsers  },
    ],
  },
  {
    id: 2,
    name: "UNN Nsukka Female Hostel",
    image: Hostel2,
    rating: 4.6,
    state: 'Enugu State',
    location: "Nsukka (UNN Campus)",
    rent: '₦110,000 per Year (Per Person)',
    description: "Female-only hostel within University of Nigeria Nsukka campus. Spacious rooms, library access nearby, and constant electricity.",
    amenities: [
      { label: "Spacious Rooms", value: true, icon: FaUsers  },
      { label: "Constant Electricity", value: true, icon: FaBolt  },
      { label: "Library Access Nearby", value: true, icon: MdMeetingRoom  },
      { label: "Female Only", value: true, icon: FaUsers  },
    ],
  },
  {
    id: 3,
    name: "UNIZIK Boys Hostel (6 in a Room)",
    image: Hostel3,
    rating: 3.9,
    state: 'Anambra State',
    location: "Awka (UNIZIK Campus)",
    rent: '₦75,000 per Year (Per Person)',
    description: "UNIZIK campus hostel for male students. 6-man room setup with common bathrooms and cafeteria access.",
    amenities: [
      { label: "Spacious Rooms", value: true, icon: FaUsers  },
      { label: "Constant Electricity", value: true, icon: FaBolt  },
      { label: "Library Access Nearby", value: true, icon: MdMeetingRoom  },
      { label: "Female Only", value: true, icon: FaUsers  },
    ],
  },
  {
    id: 4,
    name: "FUTO Executive Hostel (2-Man Room)",
    image: Hostel4,
    rating: 4.8,
    state: 'Imo State',
    location: "Owerri (FUTO Campus)",
    rent: '₦160,000 per Year (Per Person)',
    description: "Modern 2-man hostel room with tiled floors, wardrobes, and private bathrooms. Located inside FUTO campus.",
   amenities: [
      { label: "Spacious Rooms", value: true, icon: FaUsers  },
      { label: "Constant Electricity", value: true, icon: FaBolt  },
      { label: "Library Access Nearby", value: true, icon: MdMeetingRoom  },
      { label: "Female Only", value: true, icon: FaUsers  },
    ],
  },
  {
    id: 5,
    name: "AE-FUNAI Hostel (4 in a Room)",
    image: Hostel5,
    rating: 4.1,
    state: 'Ebonyi State',
    location: "Ikwo (FUNAI Campus)",
    rent: '₦90,000 per Year (Per Person)',
    description: "Federal University Ndufu-Alike hostel accommodation. 4 students per room with campus security and 24/7 water.",
    amenities: [
      { label: "Spacious Rooms", value: true, icon: FaUsers  },
      { label: "Constant Electricity", value: true, icon: FaBolt  },
      { label: "Library Access Nearby", value: true, icon: MdMeetingRoom  },
      { label: "Female Only", value: true, icon: FaUsers  },
    ],
  },
  {
    id: 6,
    name: "Abia State University Hostel",
    image: Hostel6,
    rating: 3.7,
    state: 'Abia State',
    location: "Uturu (ABSU Campus)",
    rent: '₦80,000 per Year (Per Person)',
    description: "Budget-friendly ABSU hostel with 8-man room setup. Shared bathrooms and campus shuttle service available.",
    amenities: [
      { label: "Spacious Rooms", value: true, icon: FaUsers  },
      { label: "Constant Electricity", value: true, icon: FaBolt  },
      { label: "Library Access Nearby", value: true, icon: MdMeetingRoom  },
      { label: "Female Only", value: true, icon: FaUsers  },
    ],
  },
  {
    id: 7,
    name: "Imo State University Female Hostel",
    image: Hostel7,
    rating: 4.4,
    state: 'Imo State',
    location: "Owerri (IMSU Campus)",
    rent: '₦100,000 per Year (Per Person)',
    description: "Female hostel close to IMSU main gate. 4 per room with lounge area, steady light, and security.",
    amenities: [
      { label: "Spacious Rooms", value: true, icon: FaUsers  },
      { label: "Constant Electricity", value: true, icon: FaBolt  },
      { label: "Library Access Nearby", value: true, icon: MdMeetingRoom  },
      { label: "Female Only", value: true, icon: FaUsers  },
    ],
  },
  {
    id: 8,
    name: "Private UNN Off-Campus Hostel",
    image: Hostel8,
    rating: 4.5,
    state: 'Enugu State',
    location: "Nsukka (University Market Road)",
    rent: '₦140,000 per Year (Per Person)',
    description: "Private off-campus hostel near UNN Nsukka. 2 or 3 per room, tiled floors, generator, borehole water, and secure compound.",
    amenities: [
      { label: "Spacious Rooms", value: true, icon: FaUsers  },
      { label: "Constant Electricity", value: true, icon: FaBolt  },
      { label: "Library Access Nearby", value: true, icon: MdMeetingRoom  },
      { label: "Female Only", value: true, icon: FaUsers  },
    ],
  }
];

