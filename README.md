# Firebase: Accessing Document Snapshot Property Before Data Loads

This repository demonstrates a common error when using Firebase: accessing properties of a document snapshot before the data has fully loaded.  This typically occurs when asynchronous operations attempt to access snapshot data prematurely.  The solution involves carefully handling asynchronous operations and ensuring data is available before accessing its properties.

## Bug Description:

The provided `bug.js` file showcases an incorrect approach, where the code tries to read data from a Firebase snapshot before Firebase has finished loading it.  This results in an error. 

## Solution:

The `bugSolution.js` file demonstrates the corrected implementation.  It uses `.then()` to ensure the promise resolves before accessing the data, preventing errors.

## How to reproduce:

1. Ensure you have Node.js and npm installed.
2. Clone this repository.
3. Install the required Firebase package: `npm install firebase`
4. Configure your Firebase project credentials (replace placeholders in the code). 
5. Run `bug.js` to see the error.
6. Run `bugSolution.js` to see the corrected implementation.