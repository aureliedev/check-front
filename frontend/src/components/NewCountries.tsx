import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useCountriesQuery } from "./generated/schema";
import CountryCard from "./CountriesCard";

export default function NewCountries() {
  const { data, loading, refetch } = useCountriesQuery();

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return "Loading...";

  const countries = data?.countries || [];

  return (
    <div>
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          country={country}
          link={`/country/${country.code}`}
        />
      ))}
    </div>
  );
}
