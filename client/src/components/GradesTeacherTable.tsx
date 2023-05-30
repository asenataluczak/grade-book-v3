import React from "react";

function GradesTeacherTable({ gradesByCourse }) {
  return (
    <table className="table-auto bg-white rounded-md px-12 w-full">
      <thead>
        <tr>
          <th className="py-2 px-2 text-left">Nr</th>
          <th className="py-2 px-2 text-left">Student</th>
          <th className="py-2 px-2 text-left">Oceny</th>
        </tr>
      </thead>
      <tbody>
        {gradesByCourse.map((student, index) => (
          <tr key={index}>
            <td className="py-4 px-2 border-t border-slite-50">{index + 1}.</td>
            <td className="py-4 px-2 border-t border-slite-50">
              {student.studentName}
            </td>
            <td className="px-2 border-t border-slite-50">
              <div className="flex flex-wrap gap-2">
                {student.grades.length > 0 ? (
                  student.grades.map((grade, index) => (
                    <div
                      key={index}
                      className="bg-primary rounded px-4 py-2 text-lg inline-block text-white text-bold"
                    >
                      {grade.value}
                    </div>
                  ))
                ) : (
                  <span className="italic">Brak ocen</span>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GradesTeacherTable;
