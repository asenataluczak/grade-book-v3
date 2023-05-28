import React from "react";

function GradesTeacherTable({ course }) {
  const grades = [
    {
      value: 2,
    },
    {
      value: 6,
    },
    {
      value: 1,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
  ];
  return (
    <div>
      <div>{course}</div>
      <table className="table-auto bg-white rounded-md px-12 w-full">
        <thead>
          <tr>
            <th className="py-2 px-2 text-left">Nr</th>
            <th className="py-2 px-2 text-left">Student</th>
            <th className="py-2 px-2 text-left">Oceny</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 px-2 border-t border-slite-50">1.</td>
            <td className="py-4 px-2 border-t border-slite-50">
              Malcolm Lockyer
            </td>
            <td className="py-4 px-2 border-t border-slite-50">
              <div className="flex flex-wrap gap-2">
                {grades.map((grade, index) => (
                  <div
                    key={index}
                    className="bg-primary rounded px-4 py-2 text-lg inline-block text-white text-bold"
                  >
                    {grade.value}
                  </div>
                ))}
              </div>
            </td>
          </tr>
          <tr>
            <td className="py-4 px-2 border-t border-slite-50">1.</td>
            <td className="py-4 px-2 border-t border-slite-50">
              Malcolm Lockyer
            </td>
            <td className="py-4 px-2 border-t border-slite-50   ">1961</td>
          </tr>
          <tr>
            <td className="py-4 px-2 border-t border-slite-50">1.</td>
            <td className="py-4 px-2 border-t border-slite-50">
              Malcolm Lockyer
            </td>
            <td className="py-4 px-2 border-t border-slite-50   ">1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GradesTeacherTable;
