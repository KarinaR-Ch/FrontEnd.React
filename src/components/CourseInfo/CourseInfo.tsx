import Button from "../../common/Button/Button";
import { BUTTON_TEXT } from "../../constasnts.ts";
import getCourseDuration from "../../helpers/getCourseDuration";
import formatCreationDate from "../../helpers/formatCreationDate";

interface CourseInfoProps {
  course: any;
  authors: any[];
}

const CourseInfo = ({ course, authors }: CourseInfoProps) => {
  const getAuthorsNames = (authorIds: string[]): string[] => {
    return authorIds.map(id => {
      const author = authors.find(a => a.id === id);
      return author ? author.name : 'Unknown Author';
    });
  };

  const handleBack = () => {
    console.log('Back to courses clicked');
  };

  const authorsList = getAuthorsNames(course.authors);

  return (
    <div className="course-info">
      <h1>{course.title}</h1>
      <div className="course-info-content">
        <div className="course-description-section">
          <h3>Description</h3>
          <p>{course.description}</p>
        </div>
        <div className="course-details-section">
          <div className="detail-item">
            <strong>ID:</strong> {course.id}
          </div>
          <div className="detail-item">
            <strong>Duration:</strong> {getCourseDuration(course.duration)}
          </div>
          <div className="detail-item">
            <strong>Created:</strong> {formatCreationDate(course.creationDate)}
          </div>
          <div className="detail-item">
            <strong>Authors:</strong>
            <ul className="authors-list">
              {authorsList.map((author, index) => (
                <li key={index}>{author}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button 
        buttonText={BUTTON_TEXT.BACK} 
        onClick={handleBack}
        className="back-button"
      />
    </div>
  );
};

export default CourseInfo;