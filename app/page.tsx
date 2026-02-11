import { Home } from "@/components/pages/home";
import { getProvinces } from "@/services/provinces/service";
export default async function HomePage() {
  const provinces = await getProvinces();

  return (
    <div className="p-12 flex items-center justify-center flex-col gap-4 mx-auto">
      <Home provinces={provinces?.data ?? []} />
    </div>
  );
}
