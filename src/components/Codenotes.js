/*
import React, { useEffect, useState } from "react";
const Codenotes = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (
          global.values &&
          global.values.code &&
          global.years &&
          global.selectedCodeDetails == null
        ) {
          const response = await fetch(
            `/codes/${global.values.code}/details/?version=${global.years}`
          );
          if (response.ok) {
            const data = await response.json();
            setResults(data);
          } else {
            console.error("Failed to fetch data");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values]);

  useEffect(() => {
    if (global.selectedCodeDetails) {
      setResults(global.selectedCodeDetails);
    } else {
      setResults(null);
    }
  }, [global.selectedCodeDetails]);

  console.log("our result is", results);

  return (
    <div
      style={{
        height: "10vh",
        width: "30vw",
        marginLeft: "-6%",
      }}
    >
      <div>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {results && results.code && (
              <tr key={results.code}>
                <td>{results.longDescription}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Codenotes;
*/
import React, { useEffect, useState } from "react";

const Codenotes = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (
          global.values &&
          global.values.code &&
          global.years &&
          global.selectedChapterDetails == null
        ) {
          const response = await fetch(
            `/codes/${global.values.code}/details/?version=${global.years}`
          );
          if (response.ok) {
            const data = await response.json();
            setResults(data);
          } else {
            console.error("Failed to fetch data");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (global.values && global.values.code) {
      fetchBooks();
    } else {
      setResults(null);
    }
  }, [global.values]);

  useEffect(() => {
    setResults(global.selectedChapterDetails);
  }, [global.selectedChapterDetails]);

  console.log("our result is", results);
  const shouldDisplayClassification = (classification, index) => {
    if (index === 0) {
      return true;
    }
    const previousClassifications = results.chapter.notes
      .slice(0, index)
      .map((note) => note.classification);
    return !previousClassifications.includes(classification);
  };
  return (
    <div
      style={{
        height: "60vh",
        width: "44vw",
        fontSize: "13px",
        fontFamily: "Verdana",
      }}
    >
      {results && results.chapter && results.chapter.description ? (
        <div key={results.code}>
          <div style={{ marginLeft: "17px" }}>
            {results.chapter.description}
          </div>
        </div>
      ) : (
        <div
          style={{
            marginLeft: "40px",
          }}
        >
          No Section notes
        </div>
      )}
    </div>
  );
};

export default Codenotes;
