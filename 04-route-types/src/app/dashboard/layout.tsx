export default function DashboardLayout({
  children,
  users,
  notification,
  revenue,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notification}</div>
        </div>
      </div>
    </>
  ) : (
    login
  );
}
