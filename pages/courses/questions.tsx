import React from 'react';
import DropDown from 'react-bootstrap/Dropdown';
import courses from '../../data/db.json'
interface LessonItemProps {
  lessonId:number
}

const NavbarItem: React.FC<LessonItemProps> = ({
  lessonId
}) => {
  return (
    <div className="text-white cursor-pointer hover:text-yellow-300 transition">
      
    </div>
  )
}

export default NavbarItem;