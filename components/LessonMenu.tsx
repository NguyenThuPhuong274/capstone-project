import lesson from "@/pages/courses/lesson";
import React from "react";

import courses from '../data/db.json';

interface LessonMenuProps {
  visible?: boolean;
}

const LessonMenu: React.FC<LessonMenuProps> = ({
  visible
}) => {
  if (!visible) {
    return null;
  }

  return (
    <>
    {courses.map((course, index) => (
       <div className="w-56 absolute top-14 py-5 flex-col boder-2 border-gray-800 flex">
       <div className="flex flex-col gap-3">
        {course.lesson.map((lesson_item, index) => (
          <div className="px-5 group/item flex flex-row gap-3 items-center w-full">
           {lesson_item.name}
          </div>
        ))}
       </div>
     </div>
    ))}
   
    </>
  )
}

export default LessonMenu;