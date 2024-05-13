import Layout from "@/components/Layout";
import NewCountries from "@/components/NewCountries";
import AddCountry from "@/components/AddCountry";

export default function Home() {
  return (
    <Layout title="Checkpoint - Frontend">
      <AddCountry />
      <NewCountries />
    </Layout>
  );
}
