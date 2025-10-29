import Button from "../../../../common/Button/Button";
import { BUTTON_TEXT } from "../../../../constants";
import getCourseDuration from "../../../../helpers/getCourseDuration";
import formatCreationDate from "../../../../helpers/formatCreationDate";

interface CourseCardProps {
  course: any;
  authors: any[];
}

const CourseCard = ({ course, authors }: CourseCardProps) => {
  const getAuthorsNames = (authorIds: string[]): string => {
    const authorNames = authorIds.map(id => {
      const author = authors.find(a => a.id === id);
      return author ? author.name : 'Unknown Author';
    });
    return authorNames.join(', ');
  };

  const handleShowCourse = () => {
    console.log('Show course clicked for:', course.title);
  };

  const authorsString = getAuthorsNames(course.authors);

  return (
    <div className="course-card">
      <div className="course-card-content">
        <div className="course-main-info">
          <h3 className="course-title">{course.title}</h3>
          <p className="course-description">{course.description}</p>
        </div>
        <div className="course-details">
          <div className="authors">
            <strong>Authors: </strong>
            <span className="authors-list" title={authorsString}>
              {authorsString}
            </span>
          </div>
          <div className="duration">
            <strong>Duration: </strong>
            {getCourseDuration(course.duration)}
          </div>
          <div className="creation-date">
            <strong>Created: </strong>
            {formatCreationDate(course.creationDate)}
          </div>
          <Button 
            buttonText={BUTTON_TEXT.SHOW_COURSE} 
            onClick={handleShowCourse}
            className="show-course-button"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;