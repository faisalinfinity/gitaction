import "./App.css";
import { HStack, Button } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes/AllRoutes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <HStack display={"flex"} justifyContent={"center"} w="100%" h={"100px"}>
        <Button
          isActive={isActive}
          onClick={() => {
            navigate("/");
            setIsActive(!isActive);
          }}
          bg={isActive?"red":"grey.400"}
        >
          ALL
        </Button>
        <Button
          isActive
          onClick={(e) => {
            navigate("/html");
          }}
        >
          {" "}
          HTML
        </Button>
        <Button isActive onClick={() => navigate("/css")}>
          CSS
        </Button>
        <Button  isActive onClick={() => navigate("/javascript")}>
          JavaScript 
        </Button>
      </HStack>

      <AllRoutes />
    </>
  );
}

export default App;
