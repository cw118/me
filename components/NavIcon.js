import { FaBriefcase, FaPaperPlane } from 'react-icons/fa';
import { BsHouseFill } from 'react-icons/bs';
import { RiFileInfoFill } from 'react-icons/ri';

export const NavIcon = ({ link }) => {
  if (link === 'Home') {
    return <BsHouseFill />;
  } else if (link === 'About') {
    return <RiFileInfoFill />;
  } else if (link === 'Projects') {
    return <FaBriefcase />;
  } else if (link === 'Contact') {
    return <FaPaperPlane />;
  }
}

export default NavIcon;
