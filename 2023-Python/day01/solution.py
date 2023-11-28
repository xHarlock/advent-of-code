import re
from utils.file_utils import read_lines


def task_one(lines):
    total = 0

    for line in lines:
        if not line:
            return

        first_digit, last_digit = None, None

        for char in line:
            if char.isdigit():
                first_digit = char
                break
        for char in reversed(line):
            if char.isdigit():
                last_digit = char
                break

        if first_digit is not None and last_digit is not None:
            calibration_value = int(first_digit + last_digit)
            total += calibration_value

    return total


def task_two(lines):
    total = 0

    numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    for line in lines:
        for i, n in enumerate(numbers):
            line = line.replace(n, n[0] + str(i + 1) + n[-1])
        line = re.sub(r'\D', '', line)
        total += int(line[0] + line[-1]) if line else 0

    return total


input = read_lines('input.txt')

result = task_one(input)
print(f'Task 1: {result}')
result = task_two(input)
print(f'Task 2: {result}')
