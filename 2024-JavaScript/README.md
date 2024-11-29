# Advent of Code 2024

This repository contains my **JavaScript** solutions for the [Advent of Code 2024](https://adventofcode.com/2024) challenges. The solution for each day is organized into its own folder, making it easy to run and test individual parts.

## Setup

### Prerequisites

- Node.js installed
- A valid Advent of Code session cookie for fetching inputs. If you don't know how to get the cookie, follow these instructions.

### Installation

1. Install dependencies:
```
npm install
```
2. Create a `.env` file in the project root and add your Advent of Code session key:
```
SESSION_KEY=YOUR_SESSION_KEY
```

## Usage

### Creating Files

To create the JavaScript files for the code of a specific day, run:
```
npm run init <day>
```
This will create `part1.js` and `part2.js` for the specified day so that you can immediately start coding.

### Fetching Inputs

To fetch the input for a specific day:
```
npm run fetch <day>
```

### Running Solutions

To run a solution for a specific day and part:
```
node src/day<XX>/part<Y>.js
```
For example, for Day 1 Part 1:
```
node src/day01/part1.js
```