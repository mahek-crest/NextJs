import Card from "@/components/card";
import Link from "next/link";

const Notification = () => {
  return (
    <Card>
      <div>
        <h2>Notifications</h2>
      </div>
      <div className="m-3">
        <Link href={"/dashboard/archived  "}>Archived </Link>
      </div>
    </Card>
  );
};

export default Notification;
