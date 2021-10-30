import Head from "next/head";
import { Header } from "../components/Header";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Response from "../Response";
import { useRouter } from "next/router";
import { SearchResults } from "../components/SearchResults";
interface Rpros {
  results: any;
}

const Search = ({ results }: Rpros) => {
  const router = useRouter();
  return (
    <div className="dark:bg-[#202124]">
      <Head>
        <title> {router.query.term} - Google Search</title>
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? Response
    : await fetch(
        ` https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}$start=${startIndex}`
      ).then((response) => response.json());
  return { props: { results: data } };
};
