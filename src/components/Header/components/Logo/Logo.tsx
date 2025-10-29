import Button from "../../common/Button/Button";
import { BUTTON_TEXT } from "../../constasnts";

const EmptyCourseList = () => {
  const handleAddCourse = () => {
    console.log('Add new course clicked');
  };

  return (
    <div className="empty-course-list">
      <h2>Your List Is Empty</h2>
      <p>Please use "Add New Course" button to add your first course</p>
      <Button 
        buttonText={BUTTON_TEXT.ADD_NEW_COURSE} 
        onClick={handleAddCourse}
      />
    </div>
  );
};

export default EmptyCourseList;