import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Certificate = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3004/api/form/${id}`);
        const data = await res.json();
        setStudent(data);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };
    fetchStudentDetails();
  }, [id]);

  if (!student) {
    return <p className="text-center mt-20 text-lg">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-4">
        <div className="text-center mb-8">
          <img src="../src/assets/images/im2.png" alt="Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-3xl font-bold text-red-800">KERALA BLOCKCHAIN ACADEMY</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="../src/assets/images/image.jpg" alt="Certificate" className="w-32 h-32 mb-6" />
          <p className="text-lg mb-4 text-gray-700">This is to certify that</p>
          <p className="text-2xl font-semibold text-violet-700">{student.cname}</p>
          <p className="text-lg mt-2 mb-4 text-gray-700">has successfully completed the</p>
          <p className="text-2xl font-semibold text-violet-700">{student.course}</p>
          <p className="text-lg mt-2 mb-4 text-gray-700">course on</p>
          <p className="text-2xl font-semibold text-violet-700">{student.date}</p>
          <p className="text-lg mt-2 mb-4 text-gray-700">with grade</p>
          <p className="text-2xl font-semibold text-violet-700">{student.grade}</p>
          <p className="text-lg mt-4 text-gray-700">from <strong>KERALA BLOCKCHAIN ACADEMY</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
