import React, { useState } from "react";
import { useAdminStore } from "../store/useAdminStore";

const ResumeLink = () => {
  const [resumeLinkState, setResumeLinkState] = useState("");
  const { addResumeLink, resumeLink } = useAdminStore();

  const handleResumeLink = (e) => {
    e.preventDefault();
    addResumeLink(resumeLinkState);
    setResumeLinkState("");
  };
  return (
    <div className="max-w-md w-full bg-gray-800 p-4 rounded-lg text-white/70">
      <form onSubmit={handleResumeLink}>
        <div>
          <label htmlFor="Resume" className="block text-sm font-medium mb-1">
            Resume link
          </label>
          <input
            id="Resume"
            type="text"
            required
            value={resumeLinkState}
            onChange={(e) => setResumeLinkState(e.target.value)}
            className="w-full block px-4 py-2 rounded-md
            bg-gray-700 text-white/70 text-sm"
            placeholder="Enter Resume link"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md text-md px-4 py-1 mt-2  bg-[#62e] font-medium text-center text-white/70"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResumeLink;
