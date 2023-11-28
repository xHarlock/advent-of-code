def read_lines(file_path):
    """Read each line from the file located at file_path and returns them as an array of strings.

    Args:
    file_path (str): The path to the file to be read.

    Returns:
    list[str]: A list where each element is a line from the file.
    """
    with open(file_path) as file:
        lines = file.readlines()
    return [line.strip() for line in lines]
