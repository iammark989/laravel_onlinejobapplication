import React from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { usePage } from "@inertiajs/react";

import {
  Briefcase,
  CheckCircle,
  Users,
} from "lucide-react";

const DashboardPage: React.FC = () => {

  const {openJobs,closedJobs} = usePage().props as any;
  
  const stats = [
    {
      title: "Total Active Open Jobs",
      value: openJobs,
      icon: <Briefcase size={28} />,
    },
    {
      title: "Total Closed Jobs",
      value: closedJobs,
      icon: <CheckCircle size={28} />,
    },
    {
      title: "Total Hired Applicants",
      value: 42,
      icon: <Users size={28} />,
    },
  ];

  const hiredPerPosition = [
    {
      position: "Frontend Developer",
      hired: 12,
    },
    {
      position: "Backend Developer",
      hired: 8,
    },
    {
      position: "UI/UX Designer",
      hired: 5,
    },
    {
      position: "QA Tester",
      hired: 7,
    },
    {
      position: "Project Manager",
      hired: 3,
    },
    {
      position: "IT Support",
      hired: 7,
    },
  ];

  return (

    <AdminLayout>
        <section className="w-full">
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
 
        <p className="text-gray-500 mt-2">
          Welcome back, Admin
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              shadow-sm
              border
              border-gray-100
              p-5
              flex
              items-center
              justify-between
              transition
              hover:shadow-md
            "
          >
            <div className="min-w-0">
              <p className="text-sm text-gray-500 leading-5">
                {item.title}
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className="
                bg-blue-100
                text-blue-600
                p-3
                sm:p-4
                rounded-xl
                shrink-0
              "
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Hired Per Position */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Total Hired Per Position
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 text-gray-600 font-semibold">
                  Position
                </th>

                <th className="text-left py-3 text-gray-600 font-semibold">
                  Total Hired
                </th>
              </tr>
            </thead>

            <tbody>
              {hiredPerPosition.map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="py-4 text-gray-700">
                    {item.position}
                  </td>

                  <td className="py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {item.hired}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </section>
   </AdminLayout>
  );
  
};

export default DashboardPage;