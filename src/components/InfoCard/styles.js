import styled from "styled-components";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-break: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
  font-weight: 400;
  border: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  width: 25%;
  height: auto;
  margin: 8rem auto;

  @media (min-width: 500px) and (max-width: 1024px) {
    width: 55%;
    margin: 7rem auto;
  }

  @media (min-width: 200px) and (max-width: 499px) {
    width: 65%;
    margin: 5rem auto;
  }
`;

export const Image = styled.img`
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
`;

export const CardBody = styled.div`
  text-align: center !important;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const CardTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  box-sizing: border-box;
  text-align: center !important;
  font-size: 0.9rem;
  font-weight: 400;
  color: #747373;
`;

export const Social = styled.div``;

export const ClickToLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const Twitter = styled(FaTwitter)`
  cursor: pointer;
  margin: 0 0.2rem;
`;

export const Instagram = styled(FaInstagram)`
  cursor: pointer;
  margin: 0 0.2rem;
`;

export const LinkedIn = styled(FaLinkedin)`
  cursor: pointer;
  margin: 0 0.2rem;
`;
