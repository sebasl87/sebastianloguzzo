import TitleSection from "../../molecules/TitleSection";
import ContactSection from "@/components/molecules/ContactSection";
import styled from "styled-components";

const MailTo = styled.a`
  background: transparent;
  text-decoration: none;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const ContactMe = () => {
  return (
    <Layout>
      <TitleSection title="contacts" isComplete isMobile />
      <MailTo href="mailto:sebastian.loguzzo@gmail.com">
        <ContactSection
          title="sebastian.loguzzo@gmail.com"
          icon="/mailVector.svg"
          isMobile
        />
      </MailTo>
      <ContactSection
        title="+5491158959825"
        icon="/phoneVector.svg"
        handleClick={() => window.open("https://wa.me/541132138668", "_blank")}
        isMobile
      />
      <MailTo href="/ExequielIgnacioSosaResume2024.pdf" target="_blank">
        <ContactSection title="download my resume" icon="/resume.svg" />
      </MailTo>
    </Layout>
  );
};

export default ContactMe;
