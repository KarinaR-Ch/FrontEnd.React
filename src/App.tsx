import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses.tsx";
import { mockedCoursesList, mockedAuthorsList } from "./constasnts.ts";

function App() {
  return (
    <>
      <Header />
      <Courses courses={mockedCoursesList} authors={mockedAuthorsList} />
    </>
  );
}

export default App;