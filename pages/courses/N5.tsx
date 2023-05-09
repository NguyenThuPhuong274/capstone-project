import { Dropdown, DropdownButton } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import courses from "../../data/db.json";
import Question from "./questions";
import Navbar from "@/components/Navbar";
import { useCallback, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import LessonMenu from "@/components/LessonMenu";

function N5() {

  const [showLessonMenu, setShowLessonMenu] = useState(false);

  const toggleLessonMenu = useCallback(() => {
    setShowLessonMenu((current) => !current)
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div onClick={toggleLessonMenu} className="px-4 md:px-17 py-15 flex flex-row ml-auto gap-4 items-center">
        {courses.map((course, index) => (
          <>
            <div className="cursor-pointer transition">
            {course.category} 
            <BsChevronDown className={`text-black transition ${showLessonMenu ? 'rotate-180' : 'rotate-0'}`} />
            
            </div>
            <LessonMenu visible={showLessonMenu}/>

          </>
        ))}
      </div>
    </>
  );
}
export default N5;
