import CourseCard from "./components/CourseCard/CourseCard";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList";
import Button from "../../common/Button/Button";
import { BUTTON_TEXT } from "../../constants";

interface CoursesProps {
  courses: any[];
  authors: any[];
}

const Courses = ({ courses, authors }: CoursesProps) => {
  const handleAddCourse = () => {
    console.log('Add new course clicked');
  };

  if (courses.length === 0) {
    return <EmptyCourseList />;
  }

  return (
    <div className="courses">
      <div className="courses-header">
        <Button 
          buttonText={BUTTON_TEXT.ADD_NEW_COURSE} 
          onClick={handleAddCourse}
        />
      </div>
      <div className="courses-list">
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course} 
            authors={authors} 
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;