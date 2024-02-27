import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotification = () => {
  return (
    <Card>
      <div>
        <h2> Archived Notifications</h2>
      </div>

      <div className="m-3">
        <Link href={"/dashboard"}>Notification </Link>
      </div>
    </Card>
  );
};

export default ArchivedNotification;
