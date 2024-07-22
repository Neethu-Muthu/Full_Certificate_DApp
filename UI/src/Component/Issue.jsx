import React from 'react';

const Issue = () => {
  return (
    <>
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-4xl font-extrabold">Certificate Dapp</h1>
      </header>

      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">Issue New Certificate</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="course" className="block text-lg font-medium text-gray-700 mb-2">
                Select Course*
              </label>
              <select
                name="course"
                id="course"
                className="w-full h-12 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="cba">Certified Blockchain Associate</option>
                <option value="CED">Certified Ethereum Developer</option>
                <option value="CHF">Certified Hyperledger Fabric Developer</option>
              </select>
            </div>

            <div>
              <label htmlFor="cer_id" className="block text-lg font-medium text-gray-700 mb-2">
                Certificate Id: *
              </label>
              <input
                type="text"
                name="cer_id"
                id="cer_id"
                className="w-full h-12 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                Candidate Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full h-12 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="grade" className="block text-lg font-medium text-gray-700 mb-2">
                Select Grade*
              </label>
              <select
                name="grade"
                id="grade"
                className="w-full h-12 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="s">S</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>

            <div>
              <label htmlFor="issue_date" className="block text-lg font-medium text-gray-700 mb-2">
                Issue Date*
              </label>
              <input
                type="date"
                name="issue_date"
                id="issue_date"
                className="w-full h-12 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-right">
              <a href="/certificate">
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Issue Certificate
                </button>
              </a>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Issue;
