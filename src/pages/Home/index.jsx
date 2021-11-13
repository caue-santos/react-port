import * as S from "./styles";
import InfoCard from "../../components/InfoCard";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Home = () => {
  const [responseData, setResponseData] = useState("");

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: "https://cauesantos.dev.br/json-me",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <S.Container>
      <InfoCard data={responseData} />
    </S.Container>
  );
};

export default Home;
