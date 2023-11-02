import React, { useState } from "react";
import { Container } from "../styled/Container.styled";
import { InputStyle } from "../styled/Input.style";
import { SelectStyle } from "../styled/Select.styled";
import { carDB } from "../../db/car_db.js";
import { Card } from "../styled/Card.styled";
import { GridStyle } from "../styled/Grid.styled";
import { Flex } from "../styled/Flex.styled";

const Home = () => {
  const [sortState, setSortState] = useState("DEFAULT");
  console.log(sortState);
  const sortFunctions = {
    DEFAULT: { method: (a, b) => null },
    L2H: { method: (a, b) => a.price - b.price },
    H2L: { method: (a, b) => b.price - a.price },
  };
  return (
    <>
      <Container>
        <Flex>
          <form>
            <InputStyle
              type="search"
              placeholder="Search by name or model"
            ></InputStyle>
          </form>
          <SelectStyle onChange={(e) => setSortState(e.target.value)}>
            <option value="DEFAULT">Sort By Price</option>
            <option value="H2L">High To Low</option>
            <option value="L2H">Low To High</option>
          </SelectStyle>
        </Flex>
        <div>
          <GridStyle>
            {carDB.sort(sortFunctions[sortState].method).map((item, i) => (
              <Card key={i}>
                <img src={item.thumbnail} alt="" />
                <div
                  style={{
                    backgroundColor: "#111113",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h1 style={{ fontSize: "16px", fontFamily: "Roboto" }}>
                      {item.carBrand}
                    </h1>
                    <span
                      style={{
                        fontSize: "12px",
                        fontFamily: "Roboto",
                      }}
                    >
                      Model: {item.model}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "12px",
                        fontFamily: "Roboto",
                      }}
                    >
                      Model: {item.mileage}
                    </p>
                    <span
                      style={{
                        fontSize: "12px",
                        fontFamily: "Roboto",
                        padding: "0px 0px 10px 0px",
                      }}
                    >
                      Price: ${item.price} USD
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </GridStyle>
        </div>
      </Container>
    </>
  );
};

export default Home;
