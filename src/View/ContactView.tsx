import ContactInformation from "@/components/sections/contact/ContactInformation";
import Welcome from "@/components/ui/Welcome";

export default function ContactView() {
  return (
    <>
      <Welcome
        subtitle="Contact Us"
        title="Feel Free To Connect With Us"
        describtion="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        inContact
      />
      <ContactInformation />
    </>
  );
}
