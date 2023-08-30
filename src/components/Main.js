import {
  Box,
  Container,
  Stack,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Codedet from "./Codedet";
import PropTypes from "prop-types";
import Codenotes from "./Codenotes";
import Sectionnotes from "./Sectionnotes";
import Chapternotes from "./Chapternotes";
import "../App.css";
import "../styles/Main.css";
import DrugTable from "./DrugTable";
import NeoplasmTable from "./NeoplasmTable";
import IndexTables1 from "./IndexTable1";
import IndexTables1m from "./mobilecomponents/IndexTablem";
import NeoplasmTablem from "./mobilecomponents/NeoplasamTablem";
import DrugTablem from "./mobilecomponents/DrugTablem";
import Codenotesm from "./mobilecomponents/Codenotesm";
import Sectionnotesm from "./mobilecomponents/Sectionotesm";
import Chapternotesm from "./mobilecomponents/Chapternotesm";
import Codedetm from "./mobilecomponents/Codedetm";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Main = () => {
  console.log("enter main");
  const [value, setValue] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [showIndx, setShowIndex] = useState(true);
  const [showDrug, setShowdrug] = useState(false);
  const [results1, setResults1] = useState([]);
  const [selectedCode, setSelectedCode] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showButton, setShowButton] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const [activeBtn, setActiveBtn] = useState("btn1");
  const handleNavBtnClick = (btnId) => {
    setActiveBtn(btnId);
    setShowIndex(!showIndx);
    setShowTable(false);
    setShowdrug(false);
    setTimeout(() => {
      window.scrollTo({ down: 0, behavior: "smooth" });
    }, 2000);
  };
  const handleNavBtnClick2 = (btnId) => {
    setActiveBtn(btnId);
    setShowTable(!showTable);
    setShowIndex(false);
    setShowdrug(false);
  };
  const handleNavBtnClick3 = (btnId) => {
    setActiveBtn(btnId);
    setShowdrug(!showDrug);
    setShowIndex(false);
    setShowTable(false);
  };
  const handleRefresh = () => {
    setValue(0);
    setResults1([]);
    setSelectedCode(null);
  };
  useEffect(() => {
    if (selectedCode !== null) {
      handleRefresh();
    }
  }, [selectedCode]);

  const matches = useMediaQuery("(max-width:768px)");

  return (
    <>
      {matches ? (
        //mobileScrenn//
        <Container>
          <Stack direction={"column"} gap={"30px"} ml={-1.4} mt={-3}>
            <div
              id="codeDetailsSection"
              style={{
                display: "flex",
                height: "88vh",
                width: "97vw",
                backgroundColor: " white",
                border: "0.5px solid grey",
              }}
            >
              <div>
                <div
                  style={{
                    height: "3vh",
                    width: "97vw",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontFamily={"sans-serif"}
                    color={" #4185D2"}
                  >
                    TabularSearch
                  </Typography>
                  <Typography
                    mt={3}
                    variant="subtitle1"
                    fontFamily={"sans-serif"}
                    color={" #4185D2"}
                    fontWeight={600}
                    sx={{
                      borderBottom: "0.3px solid grey",
                    }}
                  >
                    Code details
                  </Typography>

                  <Box>{<Codedetm />}</Box>
                  <div
                    style={{
                      height: "50vh",
                      width: "97vw",
                      marginTop: "20px",
                    }}
                  >
                    <Box sx={{ width: "100vw" }}>
                      <Box
                        sx={{
                          marginTop: "1%",
                          background:
                            "linear-gradient(to right, #E9F8FF,#90B2D8 , #C1E3FF)",
                          width: "97vw",
                          height: "3.5vh",
                          color: "black",
                          display: "flex",
                          ml: "0px",
                        }}
                      >
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                          variant="scrollable"
                          scrollButtons="auto"
                          className="tabs"
                          sx={{ marginLeft: "10px" }}
                          TabIndicatorProps={{
                            style: {
                              backgroundColor: "#4185D2",
                              width: "50px",
                              marginTop: "-10px",
                              marginBottom: "20px",
                              fontWeight: "800px",
                              marginLeft: "35px",
                            },
                          }}
                        >
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",

                              textTransform: "none",
                              width: "120px",
                              marginTop: "-10px",
                              color: "#4185D2",
                            }}
                            label="  Code notes"
                            {...a11yProps(0)}
                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",

                              textTransform: "none",
                              width: "140px",
                              marginTop: "-10px",
                              marginLeft: "-30px",
                              color: "#4185D2",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Section notes"
                            {...a11yProps(1)}
                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185D2",
                              textTransform: "none",
                              width: "140px",
                              marginTop: "-10px",
                              marginLeft: "-30px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Chapter notes"
                            {...a11yProps(2)}
                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185D2",
                              textTransform: "none",
                              width: "200px",
                              marginTop: "-10px",
                              marginLeft: "-30px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Chapter guidelines"
                            {...a11yProps(2)}
                          />
                        </Tabs>
                      </Box>

                      <div
                        style={{
                          display: "flex",
                          marginLeft: "-130px",
                          textAlign: "left",
                          overflowY: "auto",
                          paddingLeft: "110px",
                          marginTop: "5px",

                          width: "100vw",
                        }}
                      >
                        <CustomTabPanel value={value} index={0}>
                          <Sectionnotesm />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                          <Codenotesm />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                          <Chapternotesm />
                        </CustomTabPanel>
                        <CustomTabPanel
                          value={value}
                          index={3}
                        ></CustomTabPanel>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                height: "88vh",

                width: "97vw",

                border: "0.5px solid grey",
              }}
            >
              {" "}
              <button
                style={{
                  width: "100px",
                  height: "30px",
                }}
                className={`nav-btn ${activeBtn === "btn1" ? "active" : ""}`}
                onClick={() => handleNavBtnClick("btn1")}
              >
                Index
              </button>
              <div
                style={{
                  position: "absolute",
                  marginTop: "0px",
                }}
              >
                {showIndx && (
                  <IndexTables1m
                    setResults1={setResults1}
                    setSelectedCode={setSelectedCode}
                  />
                )}
              </div>
              <button
                style={{
                  marginLeft: "5px",
                  width: "100px",
                  height: "30px",
                }}
                className={`nav-btn ${activeBtn === "btn2" ? "active" : ""}`}
                onClick={() => handleNavBtnClick2("btn2")}
              >
                Neoplasm
              </button>
              <div
                style={{
                  position: "absolute",
                }}
              >
                {showTable && (
                  <NeoplasmTablem
                    setResults1={setResults1}
                    setSelectedCode={setSelectedCode}
                  />
                )}
              </div>
              <button
                style={{
                  marginLeft: "5px",
                  width: "100px",
                  height: "30px",
                }}
                className={`nav-btn ${activeBtn === "btn3" ? "active" : ""}`}
                onClick={() => handleNavBtnClick3("btn3")}
              >
                Drug
              </button>
              <div
                style={{
                  position: "absolute",
                  marginTop: "100px",
                }}
              >
                {showDrug && (
                  <DrugTablem
                    setResults1={setResults1}
                    setSelectedCode={setSelectedCode}
                  />
                )}
              </div>
            </div>
          </Stack>
        </Container>
      ) : (
        //normalScreen//
        <div>
          <Container maxWidth="0.5%">
            <Stack direction={"row"} gap={"0.5%"} mt={"0%"} ml={1}>
              <div
                style={{
                  height: "88vh",

                  width: "50vw",

                  border: "0.5px solid grey",
                }}
              >
                {" "}
                <button
                  style={{
                    width: "100px",
                    height: "30px",
                  }}
                  className={`nav-btn ${activeBtn === "btn1" ? "active" : ""}`}
                  onClick={() => handleNavBtnClick("btn1")}
                >
                  Index
                </button>
                <div
                  style={{
                    position: "absolute",
                    marginTop: "0px",
                  }}
                >
                  {showIndx && (
                    <IndexTables1
                      setResults1={setResults1}
                      setSelectedCode={setSelectedCode}
                    />
                  )}
                </div>
                <button
                  style={{
                    marginLeft: "5px",
                    width: "100px",
                    height: "30px",
                  }}
                  className={`nav-btn ${activeBtn === "btn2" ? "active" : ""}`}
                  onClick={() => handleNavBtnClick2("btn2")}
                >
                  Neoplasm
                </button>
                <div
                  style={{
                    position: "absolute",
                  }}
                >
                  {showTable && (
                    <NeoplasmTable
                      setResults1={setResults1}
                      setSelectedCode={setSelectedCode}
                    />
                  )}
                </div>
                <button
                  style={{
                    marginLeft: "5px",
                    width: "100px",
                    height: "30px",
                  }}
                  className={`nav-btn ${activeBtn === "btn3" ? "active" : ""}`}
                  onClick={() => handleNavBtnClick3("btn3")}
                >
                  Drug
                </button>
                <div
                  style={{
                    position: "absolute",
                    marginTop: "100px",
                  }}
                >
                  {showDrug && (
                    <DrugTable
                      setResults1={setResults1}
                      setSelectedCode={setSelectedCode}
                    />
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "88vh",
                  width: "44vw",
                  backgroundColor: " white",
                  border: "0.5px solid grey",
                }}
              >
                <div>
                  <div
                    style={{
                      height: "3vh",
                      width: "44vw",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontFamily={"sans-serif"}
                      color={" #4185D2"}
                    >
                      TabularSearch
                    </Typography>
                    <Typography
                      mt={3}
                      variant="subtitle1"
                      fontFamily={"sans-serif"}
                      color={" #4185D2"}
                      fontWeight={600}
                      sx={{
                        borderBottom: "0.3px solid grey",
                      }}
                    >
                      Code details
                    </Typography>

                    <Box>{<Codedet />}</Box>

                    <Box sx={{ width: "44vw" }}>
                      <Box
                        sx={{
                          marginTop: "10px",
                          background:
                            "linear-gradient(to right, #E9F8FF,#90B2D8 , #C1E3FF)",
                          width: "44vw",
                          height: "30px",
                          color: "black",
                          display: "flex",
                          ml: "0px",
                        }}
                      >
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                          className="tabs"
                          sx={{ marginLeft: "0px" }}
                          TabIndicatorProps={{
                            style: {
                              backgroundColor: "#4185D2",
                              width: "50px",
                              marginLeft: "38px",
                              marginBottom: "20px",
                              fontWeight: "800px",
                            },
                          }}
                        >
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",

                              textTransform: "none",
                              width: "150px",
                              marginTop: "-10px",
                              color: "#4185D2",
                            }}
                            label="  Code notes"
                            {...a11yProps(0)}
                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",

                              textTransform: "none",
                              width: "150px",
                              marginTop: "-10px",
                              color: "#4185D2",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Section notes"
                            {...a11yProps(1)}
                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185D2",
                              textTransform: "none",
                              width: "150px",
                              marginTop: "-10px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Chapter notes"
                            {...a11yProps(2)}
                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185D2",
                              textTransform: "none",
                              width: "150px",
                              marginTop: "-10px",
                              marginLeft: "-0px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Chapter guidlines"
                            {...a11yProps(3)}
                          />
                        </Tabs>
                      </Box>

                      <div
                        style={{
                          display: "flex",

                          textAlign: "left",

                          marginTop: "20px",
                          overflowX: "hidden",
                          width: "44vw",
                        }}
                      >
                        {" "}
                        <CustomTabPanel value={value} index={0}>
                          <Sectionnotes />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                          <Codenotes />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                          <Chapternotes />
                        </CustomTabPanel>
                        <CustomTabPanel
                          value={value}
                          index={3}
                        ></CustomTabPanel>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            </Stack>
          </Container>
        </div>
      )}
    </>
  );
};
