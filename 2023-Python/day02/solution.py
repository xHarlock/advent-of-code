from utils import file_utils


def part_one(lines):
    max_cubes = {'red': 12, 'green': 13, 'blue': 14}
    possible_games = 0

    for game_id, game in enumerate(lines, start=1):
        game = game.split(': ')[1]
        for hand in game.split('; '):
            is_impossible = False
            for subset in hand.split(', '):
                n, color = subset.split()
                if int(n) > max_cubes[color]:
                    is_impossible = True
                    break
            if is_impossible:
                break
        else:
            possible_games += game_id

    return possible_games


def part_two(lines):
    power = 0
    for game in lines:
        game = game.split(': ')[1]
        max_number = {'red': 0, 'green': 0, 'blue': 0}
        for hand in game.split('; '):
            for subset in hand.split(', '):
                n, color = subset.split()
                max_number[color] = max(int(n), max_number[color])

        power += max_number['red'] * max_number['green'] * max_number['blue']

    return power


input = file_utils.read_lines('input.txt')

result = part_one(input)
print(f'Task 1: {result}')
result = part_two(input)
print(f'Task 2: {result}')
