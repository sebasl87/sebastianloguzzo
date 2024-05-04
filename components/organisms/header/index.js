import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const Layout = styled.div`
  width: 100%;
  border: 1px solid rgba(96, 123, 150, 0.4);
  background-color: #011627;
  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  padding: 12px 16px;
  width: 24%;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  color: rgba(96, 123, 150, 1);
  font-weight: 500px;
  font-size: 16px;
  background-color: transparent;
`;

const MenuCenter = styled.div`
  z-index: 6;
  padding: 12px 16px;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  color: ${(props) => (props.isSelected ? "#fff" : "rgba(96, 123, 150, 1)")};
  border-bottom: ${(props) =>
    props.isSelected && "3px solid rgba(254, 165, 95, 1)"};
  background-color: transparent;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const MenuEnd = styled.div`
  z-index: 6;
  display: flex;
  padding: 12px 16px;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  color: ${(props) => (props.isSelected ? "#fff" : "rgba(96, 123, 150, 1)")};
  border-bottom: ${(props) =>
    props.isSelected && "3px solid rgba(254, 165, 95, 1)"};
  background-color: transparent;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const AlignContent = styled.div`
  background-image: url("grid2.png");
  display: flex;
  width: 59%;
  background-color: transparent;
`;

const AlignContact = styled.div`
  display: flex;
  width: 18%;
  background-color: transparent;
  justify-content: flex-end;
`;

const MenuEndWp = styled.div`
  z-index: 6;
  display: flex;
  padding: 12px 16px;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  color: ${(props) => (props.isSelected ? "#fff" : "rgba(96, 123, 150, 1)")};
  border-bottom: ${(props) =>
    props.isSelected && "3px solid rgba(254, 165, 95, 1)"};
  background-color: transparent;
  &:hover {
    background: rgba(30, 45, 61, 0.6);
    cursor: pointer;
  }
`;

const MenuEndResume = styled.a`
  z-index: 6;
  display: flex;
  padding: 12px 16px;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  color: ${(props) => (props.isSelected ? "#fff" : "rgba(96, 123, 150, 1)")};
  border-bottom: ${(props) =>
    props.isSelected && "3px solid rgba(254, 165, 95, 1)"};
  background-color: transparent;
  &:hover {
    background: rgba(30, 45, 61, 0.6);
    cursor: pointer;
  }
`;

const ImageLogo = styled.img`
  width: 24px;
  background-color: transparent;
`;

const ImageLogoResume = styled.img`
  width: 20px;
  background-color: transparent;
`;


export const Header = () => {
  const router = useRouter();
  const route = router.asPath;
  const handleSubmit = () => {
    setTimeout(() => {
      if (isMobile) {
        const mensaje =
          "whatsapp://send?phone=541132138668" +
          "&text=Thank you for getting in touch with Sebastian Loguzzo - FrontEnd Developer";
        window.open(mensaje, "_blank");
      } else {
        const mensaje =
          "https://web.whatsapp.com/send?phone=541132138668" +
          "&text=Thank you for getting in touch with Sebastian Loguzzo - FrontEnd Developer";
        window.open(mensaje, "_blank");
      }
    }, 1500);
  };

  return (
    <Layout>
      <Name>sebastianloguzzo</Name>
      <AlignContent>
        <Link
          href="/"
          style={{ background: "transparent", textDecoration: "none" }}
        >
          <MenuCenter isSelected={route === "/"}>_hello</MenuCenter>
        </Link>
        <Link
          href="/about-me"
          style={{ background: "transparent", textDecoration: "none" }}
        >
          <MenuCenter isSelected={route === "/about-me"}>_about-me</MenuCenter>
        </Link>
        <Link
          href="/projects"
          style={{ background: "transparent", textDecoration: "none" }}
        >
          <MenuCenter isSelected={route === "/projects"}>_projects</MenuCenter>
        </Link>
      </AlignContent>
      <AlignContact>
        <MenuEndWp onClick={handleSubmit}>
          <ImageLogo src="wp.svg" alt="img" />
        </MenuEndWp>
        <MenuEndResume
          href="/SebastianLoguzzoResume.pdf"
          target="_blank"
        >
          <ImageLogoResume src="resume2.svg" alt="img" />
        </MenuEndResume>
        <Link
          href="/contact-me"
          style={{ background: "transparent", textDecoration: "none" }}
        >
          <MenuEnd isSelected={route === "/contact-me"}>_contact-me</MenuEnd>
        </Link>
      </AlignContact>
    </Layout>
  );
};

export default Header;
