// http://localhost:3000/dashboard
import Link from "next/link";
export default function Page() {
  return (
    <p>
      <Link href={"/invoices"}>Dashbord Page</Link>
    </p>
  );
}
