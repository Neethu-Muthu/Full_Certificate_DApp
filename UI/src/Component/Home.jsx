import React, { useState } from 'react';

const Home = () => {
  const [idno, setIdno] = useState('');

  const formSubmit = (event) => {
    event.preventDefault(); 

    const link = `/certificate/${idno}`;
    console.log(idno);
    window.location.href = link; 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Certificate Dapp</h1>
      <img 
        src="/src/assets/images/Dapp.png" 
        alt="Certificate Dapp" 
        className="w-48 h-48 mb-8 shadow-lg rounded-full" 
      />
      <form onSubmit={formSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="idno" className="block text-lg font-medium text-gray-700 mb-2">
            Enter Certificate ID:
          </label>
          <input
            type="text"
            name="idno"
            id="idno"
            placeholder="Enter your Certificate ID"
            className="w-full h-12 border-gray-300 border-2 rounded-lg px-4 text-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={idno}
            onChange={(e) => setIdno(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
