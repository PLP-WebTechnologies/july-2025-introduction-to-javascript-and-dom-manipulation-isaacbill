def modify_content(content: str) -> str:
    """Simple example modification: uppercase all text."""
    return content.upper()

def file_read_write():
    filename = input("Enter the filename to read: ")

    try:
        # Try to open and read the file
        with open(filename, "r", encoding="utf-8") as f:
            data = f.read()

        # Modify the content
        modified_data = modify_content(data)

        # Create a new file name
        new_filename = f"modified_{filename}"

        # Write modified content to a new file
        with open(new_filename, "w", encoding="utf-8") as f:
            f.write(modified_data)

        print(f"✅ File processed successfully! Saved as {new_filename}")

    except FileNotFoundError:
        print("❌ Error: The file does not exist.")
    except PermissionError:
        print("❌ Error: You don't have permission to read this file.")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    file_read_write()
