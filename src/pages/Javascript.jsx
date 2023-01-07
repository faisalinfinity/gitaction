import { Center, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Api from "../api/api";
import Cards from "../components/Card";
import Pagination from "../components/Pagination";

const Javascript = () => {
  const [current, setCurrent] = useState(1);
  const [data, setdata] = useState({});
  useEffect(() => {
    async function fetchData() {
      // You can await here
      let data = await Api("javascript", current);
      setdata(data);
    }
    fetchData();
  }, [current]);
  console.log(data);

  const handlenext = () => {
    setCurrent((p) => p + 1);
  };
  const handleprev = () => {
    setCurrent((p) => p - 1);
  };

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
      >
        {data &&
          data?.items &&
          data?.items.map((el) => {
            return <Cards key={el.id} {...el} />;
          })}
      </Grid>

      <Center>
    <Pagination
        current={current}
        handlenext={handlenext}
        handleprev={handleprev}
      />

    </Center>
    </>
  );
};

export default Javascript;
