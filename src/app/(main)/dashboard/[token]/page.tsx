import { Price } from "./_components/price";

interface DashboardPageProps {
  params: { token: string };
}

export default function DashboardPage({ params }: DashboardPageProps) {
  return <Price token={params.token} />;
}
