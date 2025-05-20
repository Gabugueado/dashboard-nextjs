import { Metadata } from 'next';
import { WidgetsGrid } from '../../../components/dashboard/WidgetsGrid';


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page",
};


export default function MainPage() {
  return (
    <div className="text-black" >
      <h1 className="mt-2 text-3xl" >Dashboard</h1>
      <span className="mt-2 text-xl" >General Information</span>

      <WidgetsGrid />
    </div>
  );
}

