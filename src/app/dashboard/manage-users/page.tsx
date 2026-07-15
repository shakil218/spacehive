"use client";

import { useUsers } from "@/hooks/useUsers";

import UserTable from "@/components/dashboard/UserTable";
import SpaceCardSkeleton from "@/components/cards/SpaceCardSkeleton";

export default function ManageUsersPage() {
  const { data, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <SpaceCardSkeleton />
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl py-16 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
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