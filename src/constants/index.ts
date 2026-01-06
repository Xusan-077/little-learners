import {
  IBenefits,
  IFAQData,
  INavigate,
  INavLinks,
  ITestimonials,
} from "@/types";
import { icons } from "./icons";

export const NavLinks: INavLinks[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Academics",
    path: "/academics",
  },
  {
    label: "Admissions",
    path: "/admissions",
  },
  {
    label: "Student Life",
    path: "/student",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const Benefits: IBenefits[] = [
  {
    id: 1,
    title: "Holistic Learning Approach",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    image: icons.benefitsIcon1,
  },
  {
    id: 2,
    title: "Experienced Educators",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    image: icons.benefitsIcon2,
  },
  {
    id: 3,
    title: "Nurturing Environment",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
    image: icons.benefitsIcon3,
  },
  {
    id: 4,
    title: "Play-Based Learning",
    description:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    image: icons.benefitsIcon4,
  },
  {
    id: 5,
    title: "Individualized Attention",
    description:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    image: icons.benefitsIcon5,
  },
  {
    id: 6,
    title: "Parent Involvement",
    description:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    image: icons.benefitsIcon6,
  },
];

export const Testimonials: ITestimonials[] = [
  {
    image: icons.TestimonialsImg1,
    name: "Jennifer B",
    description:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },

  {
    image: icons.TestimonialsImg2,
    name: "David K",
    description:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },

  {
    image: icons.TestimonialsImg3,
    name: "Emily L",
    description:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    image: icons.TestimonialsImg3,
    name: "Michael R",
    description:
      "The curriculum is perfectly balanced between play and learning. My twins have developed so much curiosity and confidence since they started here.",
  },
  {
    image: icons.TestimonialsImg2,
    name: "Sarah W",
    description:
      "I love the daily updates and photos we receive. It gives me peace of mind knowing exactly what my son is learning and how much fun he's having.",
  },
  {
    image: icons.TestimonialsImg1,
    name: "James T",
    description:
      "The staff's commitment to safety and emotional well-being is outstanding. It truly feels like a community that cares for every single child.",
  },
  {
    image: icons.TestimonialsImg1,
    name: "Jessica M",
    description:
      "Seeing my daughter come home singing new songs and sharing science facts is amazing. This academy really sparks a love for education.",
  },
  {
    image: icons.TestimonialsImg2,
    name: "Robert H",
    description:
      "A fantastic environment for early childhood development. The facilities are clean, colorful, and filled with resources that keep the kids engaged.",
  },
  {
    image: icons.TestimonialsImg3,
    name: "Sophia G",
    description:
      "The teachers go above and beyond to understand each child's unique personality. We couldn't have asked for a better foundation for our son.",
  },
];

export const FAQData: IFAQData[] = [
  {
    id: 1,
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: 2,
    question: "Is there a uniform policy for students?",
    answer:
      "Yes, we have a simple and comfortable uniform policy to promote a sense of community and equality among our students.",
  },
  {
    id: 3,
    question: "What extracurricular activities are available for students?",
    answer:
      "We offer a variety of activities including music, art, basic coding, and outdoor sports to ensure a well-rounded development.",
  },
  {
    id: 4,
    question: "How do you handle food allergies and dietary restrictions?",
    answer:
      "Our kitchen is nut-free, and we work closely with parents to accommodate specific dietary requirements or medical food allergies.",
  },
  {
    id: 5,
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
    answer:
      "We maintain a low ratio (typically 1:8 or 1:10 depending on age group) to ensure every child receives personalized attention.",
  },
  {
    id: 6,
    question: "How do you handle discipline and behavior management?",
    answer:
      "We use positive reinforcement and gentle guidance to help children understand boundaries and develop social-emotional skills.",
  },
  {
    id: 7,
    question: "How do I apply for admission to Little Learners Academy?",
    answer:
      "You can apply through our online portal or visit our campus for a tour and collect the registration package from the front desk.",
  },
];

export const Navigate: INavigate[] = [
  {
    id: 1,
    title: "About Us",
    description:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    link: "/about",
  },
  {
    id: 2,
    title: "Academics",
    description:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    link: "/academics",
  },
  {
    id: 3,
    title: "Student Life",
    description:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    link: "/student",
  },
  {
    id: 4,
    title: "Admissions",
    description:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    link: "/admissions",
  },
];
