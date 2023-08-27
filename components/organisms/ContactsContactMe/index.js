import styled from "styled-components";
import { TitleSection, ContactSection } from "@/components/molecules";

const Column = styled.div`
  width: 24%;
  min-height: 700px;
  display: flex;
  background: #011627;
  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    width: 35%;
  }
  @media (min-width: 1440px) {
    width: 24%;
  }
`;

const LayoutMenu = styled.div`
  display: flex;
  width: 100%;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  min-height: 700px;
  background: transparent;
  flex-direction: column;
`;

const MailTo = styled.a`
  background: transparent;
  text-decoration: none;
`;

export const ContactsContactMe = () => {
  return (
    <Column>
      <LayoutMenu>
        <TitleSection title="contacts" isProject />
        <MailTo href="mailto:sebastian.loguzzo@gmail.com">
          <ContactSection
            title="sebastian.loguzzo@gmail.com"
            icon="/mailVector.svg"
          />
        </MailTo>
        <ContactSection
          title="+5491132138668"
          icon="/phoneVector.svg"
          handleClick={() =>
            window.open("https://wa.me/541132138668", "_blank")
          }
        />
        <TitleSection title="find-me-also-in" isProject isComplete />
        <ContactSection
          title="Github account"
          icon="/goTo.svg"
          handleClick={() =>
            window.open("https://github.com/sebasl87", "_blank")
          }
        />
        <ContactSection
          title="Linkedin profile"
          icon="/goTo.svg"
          handleClick={() =>
            window.open("https://www.linkedin.com/in/sebastian-loguzzo/", "_blank")
          }
        />
      </LayoutMenu>
    </Column>
  );
};

export default ContactsContactMe;
