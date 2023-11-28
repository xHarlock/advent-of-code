package days;

import utils.AdventDay;
import utils.Day;

import java.util.ArrayList;
import java.util.List;

@Day(day = 7)
public class Day07 extends AdventDay {

    @Override
    public String part1() {
        return null;
    }

    @Override
    public String part2() {
        return null;
    }

    class System {

    }

    class Element {
        String name;
        Folder parent;

        String getName() {
            return name;
        }
    }

    class Folder extends Element {
        List<File> subFiles;
        List<Element> children;
        int totalSize;

        Folder() {
            subFiles = null;
            children = null;
        }

        Folder(String name, Folder parent) {
            this.name = name;
            this.parent = parent;
            this.subFiles = new ArrayList<>();
            this.children = new ArrayList<>();
        }
    }

    class File extends Element {
        final long size;

        File(String name, long size) {
            this.name = name;
            this.size = size;
        }
    }
}