import days.Day01;
import days.Day02;
import days.Day03;
import days.Day04;
import days.Day05;
import days.Day06;
import days.Day07;
import utils.AdventDay;

import java.util.List;

@SuppressWarnings("unused")
public class Main {

    private static final List<AdventDay> days = List.of(
            new Day01(),
            new Day02(),
            new Day03(),
            new Day04(),
            new Day05(),
            new Day06(),
            new Day07()
    );

    public static void main(String[] args) {
        printAll();
    }

    private static void printAll() {
        for (AdventDay day : days) {
            System.out.println("Day " + day.getDay());

            long start = System.currentTimeMillis();
            day.initialize();
            System.out.println("Elapsed time initialization: " + (System.currentTimeMillis() - start) + "ms");

            start = System.currentTimeMillis();
            System.out.println("Solution part 1: " + day.part1());
            System.out.println("Elapsed time part 1: " + (System.currentTimeMillis() - start) + "ms");

            start = System.currentTimeMillis();
            System.out.println("Solution part 2: " + day.part2());
            System.out.println("Elapsed time part 2: " + (System.currentTimeMillis() - start) + "ms\n");
        }
    }

    private static void print(int dayNo) {
        AdventDay day = days.get(dayNo - 1);
        day.initialize();
        System.out.println("Day " + day.getDay());
        System.out.println("Solution Part 1: " + day.part1());
        System.out.println("Solution Part 2: " + day.part2());
    }
}