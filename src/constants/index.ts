import {
  IAdmissionStep,
  IBenefits,
  IEvents,
  IFAQData,
  IFeatures,
  IHistory,
  IMembers,
  IMission,
  INavigate,
  INavLinks,
  IRecognitions,
  ITestimonials,
} from "@/types";
import { icons } from "./icons";
import { images } from "./images";

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

export const Mission: IMission[] = [
  {
    id: 1,
    title: "Mission",
    description:
      "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
    image: icons.missionImage1,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
    image: icons.missionImage2,
  },
];

export const Recognitions: IRecognitions[] = [
  {
    id: 1,
    title: "Outstanding Early Childhood Education Awar",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    image: icons.RecognitionsImage1,
  },
  {
    id: 2,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    image: icons.RecognitionsImage2,
  },
  {
    id: 3,
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    image: icons.RecognitionsImage3,
  },
];

export const History: IHistory[] = [
  {
    id: 1,
    title: "Resilience and Future Horizons",
    year: 2023,
    description:
      "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    id: 2,
    title: "Innovation and Technology",
    year: 2017,
    description:
      "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    id: 3,
    title: "Expansion and Recognition",
    year: 2012,
    description:
      "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    id: 4,
    title: "Inception and Growth",
    year: 2005,
    description:
      "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];

export const MembersData: IMembers[] = [
  {
    id: 1,
    userName: "Ms. Sarah Anderson",
    image: icons.MemberImg1,
    title: "Qualification: Bachelor's Degree in Early Childhood Education",
    description:
      "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    id: 2,
    userName: "Mr. David Roberts",
    image: icons.MemberImg2,
    title: "Qualification: Master's Degree in Elementary Education",
    description:
      "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    id: 3,
    userName: "Ms. Emily Hernandez",
    image: icons.MemberImg3,
    title: "Qualification: Diploma in Child Psychology",
    description:
      "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    id: 4,
    userName: "Mr. Michael Turner",
    image: icons.MemberImg4,
    title: "Qualification: Bachelor's Degree in Physical Education",
    description:
      "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    id: 5,
    userName: "Ms. Jessica Lee",
    image: icons.MemberImg5,
    title: "Qualification: Master's Degree in Special Education",
    description:
      "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    id: 6,
    userName: "Mr. William Parker",
    image: icons.MemberImg6,
    title: "Qualification: Bachelor's Degree in Fine Arts",
    description:
      "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];

export const ActivitiesData: IRecognitions[] = [
  {
    id: 1,
    image: icons.ActivityIcon1,
    title: "Sports and Athletics",
    description:
      "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
  },
  {
    id: 2,
    image: icons.ActivityIcon2,
    title: "Art and Creativity",
    description:
      "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
  },
  {
    id: 3,
    image: icons.ActivityIcon3,
    title: "Music and Performing Arts",
    description:
      "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
  },
  {
    id: 4,
    image: icons.ActivityIcon4,
    title: "Language Clubs",
    description:
      "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
  },
  {
    id: 5,
    image: icons.ActivityIcon5,
    title: "Science Club",
    description:
      "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
  },
  {
    id: 6,
    image: icons.ActivityIcon6,
    title: "Cooking and Culinary Arts",
    description:
      "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
  },
];

export const SupportServices: IRecognitions[] = [
  {
    id: 1,
    image: icons.SupportIcon1,
    title: "Counseling",
    description:
      "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
  },
  {
    id: 2,
    image: icons.SupportIcon2,
    title: "Learning Support",
    description:
      "Our educators provide additional assistance to students who may require extra support in their academic journey.",
  },
  {
    id: 3,
    image: icons.SupportIcon3,
    title: "Parent-Teacher Collaboration",
    description:
      "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
  },
];

export const EventsData: IEvents[] = [
  {
    id: 1,
    image: images.EventImg1,
    title: "Annual Sports Day",
    description:
      "A day filled with friendly competition, team spirit, and sportsmanship.",
  },
  {
    id: 2,
    image: images.EventImg2,
    title: "Cultural Festivals",
    description:
      "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
  },
  {
    id: 3,
    image: images.EventImg3,
    title: "Art Exhibitions",
    description:
      "Showcasing our students' artistic talents through exhibitions and displays.",
  },
  {
    id: 4,
    image: images.EventImg4,
    title: "Science Fair",
    description:
      "A platform for budding scientists to present their innovative projects and experiments.",
  },
  {
    id: 5,
    image: images.EventImg5,
    title: "International Day",
    description:
      "A vibrant celebration of our diverse community, embracing cultures from around the world.",
  },
  {
    id: 6,
    image: images.EventImg6,
    title: "Graduation Ceremony",
    description:
      "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
  },
];

export const AdmissionSteps: IAdmissionStep[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Inquiry",
    description:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
  },
  {
    id: 2,
    stepNumber: "02",
    title: "School Tour",
    description:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Application Form",
    description:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Parent Interview",
    description:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    id: 5,
    stepNumber: "05",
    title: "Student Assessment",
    description:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    id: 6,
    stepNumber: "06",
    title: "Acceptance",
    description:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
  },
];

export const SpecialFeatures: IFeatures[] = [
  {
    id: 1,
    image: icons.FeatureIcon1,
    title: "Thematic Learning",
    description:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    id: 2,
    image: icons.ActivityIcon2,
    title: "STEAM Education",
    description:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
  },
  {
    id: 3,
    image: icons.ActivityIcon4,
    title: "Language Immersion",
    description:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
  },
  {
    id: 4,
    image: icons.FeatureIcon2,
    title: "Art and Creativity",
    description:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
  },
  {
    id: 5,
    image: icons.FeatureIcon3,
    title: "Outdoor Education",
    description:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
  },
  {
    id: 6,
    image: icons.FeatureIcon4,
    title: "Play-Based Learning",
    description:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
  },
];

export const LearnData: IEvents[] = [
  {
    id: 1,
    image: images.LearnImg1,
    title: "Language Arts",
    description: "Reading, writing, storytelling, and communication skills.",
  },
  {
    id: 2,
    image: images.LearnImg2,
    title: "Mathematics",
    description: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    id: 3,
    image: images.LearnImg3,
    title: "Science",
    description:
      "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    id: 4,
    image: images.LearnImg4,
    title: "Social Studies",
    description:
      "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    id: 5,
    image: images.LearnImg5,
    title: "Arts and Crafts",
    description: "Encouraging creativity through various art forms and crafts.",
  },
  {
    id: 6,
    image: images.LearnImg6,
    title: "Physical Education",
    description: "Promoting physical fitness, coordination, and teamwork.",
  },
];
