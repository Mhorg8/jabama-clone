import { getUsers } from "@/app/actions";
import DashboardItemAction from "@/app/components/dashboard/DashbaordItemActions";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import { User } from "@/app/types/types";
import Image from "next/image";
import React from "react";

const UsersPage = async () => {
  const users: User[] = await getUsers();

  return (
    <div>
      <DashboardHeader title="List of Users" />

      <div className="grid grid-cols-12 gap-4 p-4">
        {users.map((user) => (
          <div
            className="col-span-6 md:col-span-4 lg:col-span-2 bg-white p-2 rounded-lg h-[250px]"
            key={user.id}>
            {user.image ? (
              <div className="relative">
                <Image
                  src={user.image}
                  alt={user.username}
                  sizes="fill "
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-2/3 bg-neutral-200 rounded-md relative">
                <Image
                  src="/blank-profile-picture.webp"
                  alt="black-profile-image"
                  fill
                  className="object-contain"
                />
              </div>
            )}{" "}
            <div className="flex flex-col">
              <h2 className="text-lg font-bold tracking-wide capitalize">
                {user.username}
              </h2>
              <h3 className="text-base font-medium text-neutral-700">
                {user.email}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-sm mt-2 text-neutral-600">
                  {user.createdAt?.toLocaleDateString()}
                </p>
                <DashboardItemAction id={user.id} url="/api/register" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
