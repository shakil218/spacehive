export default function UserTableSkeleton() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100">
      <table className="table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 6 }).map((_, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="skeleton h-12 w-12 rounded-full" />

                  <div className="space-y-2">
                    <div className="skeleton h-4 w-32" />
                    <div className="skeleton h-3 w-20" />
                  </div>
                </div>
              </td>

              <td>
                <div className="skeleton h-4 w-52" />
              </td>

              <td>
                <div className="skeleton h-7 w-20 rounded-full" />
              </td>

              <td>
                <div className="skeleton h-7 w-20 rounded-full" />
              </td>

              <td>
                <div className="flex gap-2">
                  <div className="skeleton h-8 w-24 rounded-lg" />
                  <div className="skeleton h-8 w-24 rounded-lg" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}