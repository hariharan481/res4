import React, { useEffect, useState } from "react";

const Codenotesm = () => {
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
        width: "auto",
        marginLeft: "50px",
      }}
    >
      <div style={{ height: "60vh", width: "auto", marginTop: "20px" }}>
        {results && results.chapter && results.chapter.description ? (
          <div key={results.code}>
            <div style={{ marginLeft: "17px" }}>
              {results.chapter.description}
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "auto",
            }}
          >
            No Section notes
          </div>
        )}
      </div>
    </div>
  );
};

export default Codenotesm;
