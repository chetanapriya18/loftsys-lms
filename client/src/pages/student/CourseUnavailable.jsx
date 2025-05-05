import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/student/Footer';

const CourseUnavailable = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center px-4">
        <div className="bg-white border border-blue-200 rounded-md shadow-lg p-8 max-w-lg text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-2">Course Unavailable</h2>
          <p className="text-gray-700 mb-6">
            This course has been deleted or is unavailable because the educator is no longer available.
          </p>
          <Link to="/" className="text-blue-600 underline hover:text-blue-800 transition">
            Go back to homepage
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CourseUnavailable;
