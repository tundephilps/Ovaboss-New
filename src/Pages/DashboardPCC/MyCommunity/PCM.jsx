import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import Table from "../../../components/DashboardPCC/MyCommunity/Table";
import Pagination from "../../../components/DashboardPCC/MyCommunity/Pagination";

const PCM = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2"> My Community</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">
            Dashboard › {"  "} My Community Members{" "}
          </span>{" "}
          <span className="text-yellow-500">
            {" "}
            › {"  "} Personal Community Members{" "}
          </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />

        <Table type='pcm'/>
      </div>
    </div>
  );
};

export default PCM;
