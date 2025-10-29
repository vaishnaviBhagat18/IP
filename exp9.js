// Function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // change to false to test rejection
      if (success) {
        resolve("✅ Data fetched successfully!");
      } else {
        reject("❌ Failed to fetch data!");
      }
    }, 2000);
  });
}

// Async function using await
async function getData() {
  console.log("Fetching data... please wait...");

  try {
    const result = await fetchData(); // waits for Promise to resolve
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Run the async function
getData();
