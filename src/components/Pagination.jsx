import React from "react";
import { Button } from "@chakra-ui/react";
const Pagination = ({current,handlenext,handleprev}) => {
  return (
    <>
      <Button disabled={current===1} onClick={handleprev}>Prev</Button>
      <Button>{current}</Button>
      <Button onClick={handlenext}>Next</Button>
    </>
  );
};

export default Pagination;
