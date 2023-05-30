import GradesTeacherTable from "../components/GradesTeacherTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useGradesPerCourseMutation } from "../slices/gradesApiSlice.js";
import { setGrades } from "../slices/gradesSlice";

const GradesTeacherScreen = () => {
  let { courseId } = useParams();
  const dispatch = useDispatch();
  const [grades, { isLoading }] = useGradesPerCourseMutation();

  const { allGrades } = useSelector((state) => state.grades);
  const { allCourses } = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchData = async () => {
      const res = await grades(courseId).unwrap();
      dispatch(setGrades(res));
    };
    fetchData().catch((err) =>
      toast.error(
        err?.data?.message || err.error || "Error status: " + err.status
      )
    );
  }, [courseId]);
  return (
    <div>
      <div className="text-primary text-2xl my-6">{allCourses[courseId]?.name}</div>
      <GradesTeacherTable gradesByCourse={allGrades} />
    </div>
  );
};

export default GradesTeacherScreen;
