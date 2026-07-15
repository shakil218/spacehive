"use client";

import { useUsers } from "@/hooks/useUsers";

import UserTable from "@/components/dashboard/UserTable";
import UserTableSkeleton from "@/components/skeletons/UserTableSkeleton";

export default function ManageUsersPage() {
  const { data, isLoading } = useUsers();

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl py-16 space-y-8">
      <div>
        <div className="skeleton h-9 w-64" />
        <div className="mt-3 skeleton h-5 w-80" />
      </div>

      <UserTableSkeleton />
    </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16 space-y-8">
      <div>
        <h1 className="text-3xl font-bold bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
          Manage Users
        </h1>

        <p className="mt-2 text-base-content/60">
          Manage user roles and account status.
        </p>
      </div>

      <UserTable users={data?.users ?? []} />
    </section>
  );
}