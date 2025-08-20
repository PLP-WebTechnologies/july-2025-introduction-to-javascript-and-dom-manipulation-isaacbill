# File Read & Write Challenge 🖋️

This project demonstrates how to **read a file**, modify its contents,
and save the results into a new file --- while handling errors
gracefully in Python.

------------------------------------------------------------------------

## Steps to Run

### 1. Create a text file

You need a file to read before running the Python script.

-   Create a new file in your editor (VS Code, PyCharm, IDLE, etc.)

-   Save it as **`hello.txt`** in the same folder as your Python script.

-   Add some sample text, for example:

        Hello, world!
        This is my first file.

------------------------------------------------------------------------

### 2. Run the Python script

Open a terminal in the project folder and run:

``` bash
python filehandling.py
```

When prompted:

    Enter the filename to read: hello.txt

------------------------------------------------------------------------

### 3. Program behavior

-   The script reads the content of `hello.txt`.

-   It applies a simple modification (for example, converting text to
    UPPERCASE).

-   It writes the modified content into a new file called:

        modified_hello.txt

------------------------------------------------------------------------

### 4. Error Handling

If something goes wrong: - **File not found** → shows:
`❌ Error: The file does not exist.` - **Permission issues** → shows:
`❌ Error: You don't have permission to read this file.` - **Other
errors** → shows a message with details.

------------------------------------------------------------------------

## Example

**Input file (`hello.txt`):**

    Hello world
    This is Python

**Output file (`modified_hello.txt`):**

    HELLO WORLD
    THIS IS PYTHON

------------------------------------------------------------------------

✅ By following these steps, you'll successfully practice file reading,
writing, and exception handling in Python.
