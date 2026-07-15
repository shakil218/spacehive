"use client";

import Image from "next/image";
import { toast } from "sonner";

import {
  useUpdateUserRole,
  useUpdateUserStatus,
} from "@/hooks/useUsers";

import { User } from "@/types/user";

interface Props {
  users: User[];
}

export default function UserTable({ users }: Props) {
  const { mutate: updateRole } = useUpdateUserRole();

  const { mutate: updateStatus } = useUpdateUserStatus();

  return (
    <div className="overflow-x-auto rounded-3xl border border-base-300 bg-base-100 shadow-sm">
      <table className="table table-zebra min-w-190">
        <thead className="sticky top-0 bg-base-200">
          <tr className="text-xs uppercase tracking-wide text-base-content/70 md:text-sm">
            <th>User</th>

            <th>Role</th>

            <th>Status</th>

            <th className="text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="transition-colors hover:bg-base-200/60"
            >
              {/* User */}
              <td>
                <div className="flex items-center gap-3 md:gap-4">
                  <Image
                    src={user.image || "https://i.pravatar.cc/175"}
                    alt={user.name}
                    width={52}
                    height={52}
                    className="h-10 w-10 rounded-full border border-base-300 object-cover md:h-13 md:w-13"
                  />

                  <div>
                    <h2 className="text-sm font-semibold md:text-base">
                      {user.name}
                    </h2>

                    <p className="text-xs text-base-content/60 md:text-sm">
                      {user.email}
                    </p>
                  </div>
                </div>
              </td>

              {/* Role */}
              <td>
                <span
                  className={`badge badge-outline badge-sm font-semibold md:badge-lg ${
                    user.role === "admin"
                      ? "badge-secondary"
                      : "badge-info"
                  }`}
                >
                  {user.role === "admin"
                    ? "Admin"
                    : "User"}
                </span>
              </td>

              {/* Status */}
              <td>
                <div className="flex items-center gap-2 md:gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      user.status === "active"
                        ? "bg-success"
                        : "bg-error"
                    }`}
                  />

                  <span
                    className={`badge badge-outline badge-sm font-semibold md:badge-lg ${
                      user.status === "active"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {user.status === "active"
                      ? "Active"
                      : "Blocked"}
                  </span>
                </div>
              </td>

              {/* Actions */}
              <td>
                <div className="flex items-end gap-2 flex-row md:justify-end">
                  <button
                    className={`btn btn-outline btn-xs md:btn-sm ${
                      user.role === "admin"
                        ? "btn-info"
                        : "btn-accent"
                    }`}
                    onClick={() =>
                      updateRole(
                        {
                          id: user._id,
                          role:
                            user.role === "admin"
                              ? "user"
                              : "admin",
                        },
                        {
                          onSuccess: (res) =>
                            toast.success(res.message),

                          onError: () =>
                            toast.error(
                              "Failed to update role"
                            ),
                        }
                      )
                    }
                  >
                    {user.role === "admin"
                      ? "Make User"
                      : "Make Admin"}
                  </button>

                  <button
                    className={`btn btn-outline btn-xs md:btn-sm ${
                      user.status === "active"
                        ? "btn-error"
                        : "btn-success"
                    }`}
                    onClick={() =>
                      updateStatus(
                        {
                          id: user._id,
                          status:
                            user.status === "active"
                              ? "blocked"
                              : "active",
                        },
                        {
                          onSuccess: (res) =>
                            toast.success(res.message),

                          onError: () =>
                            toast.error(
                              "Failed to update status"
                            ),
                        }
                      )
                    }
                  >
                    {user.status === "active"
                      ? "Block"
                      : "Activate"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}