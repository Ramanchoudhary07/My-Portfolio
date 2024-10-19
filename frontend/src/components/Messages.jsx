import React, { useEffect } from "react";
import { useContactStore } from "../store/useContactStore";

const Messages = () => {
  const { loading, fetchContactData, contacts } = useContactStore();

  useEffect(() => {
    fetchContactData();
  }, [fetchContactData]);

  // console.log(contacts);

  return (
    <div className="w-screen py-10 px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contacts?.map((contact) => (
          <div
            key={contact.id}
            className="border border-white/40 bg-gray-800 text-white rounded-lg w-[350px] p-4"
          >
            <h1 className="text-2xl">{contact.name}</h1>
            <p className="text-white/70 mb-5">{contact.email}</p>
            <div
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#888 #f1f1f1",
              }}
              className="overflow-auto h-[200px] border border-gray-600 text-white/90 rounded-lg p-4"
            >
              <h2 className="text-center mb-2">Messages</h2>
              {contact.message.map((text, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <span>{i + 1}. </span> {text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
