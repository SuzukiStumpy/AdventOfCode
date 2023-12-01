from typing import Any


class Node:
    """Defines a node within the filesystem"""
    def __init__(self, name:str, parent:"Node" = None, size:int = 0, type:str = 'd') -> None:
        self.name = name
        self.size = size
        self.type = type
        self.parent = parent
        if type == 'd':
            self.entries = {}

    def get_path(self) -> str:
        if self.parent is None:
            return ''
        else:
            return self.parent.get_path() + '/' + self.name

    def add_dir(self, name:str) -> None:
        if name not in self.entries:
            self.entries[name] = (Node(name, self))

    def add_file(self, name:str, size: int) -> None:
        if name not in self.entries:
            self.entries[name] = (Node(name, self, size, 'f'))
            self.increase_size(size)

    def increase_size(self, size: int) -> None:
        self.size += size
        if self.parent is not None:
            self.parent.increase_size(size)

    def get_dir(self, name:str) -> Any | None:
        if name in self.entries and self.entries[name].type == 'd':
            return self.entries[name]
        else:
            return None

    def dirs_less_than(self, size: int) -> ["Node"]:
        """Returns a list of directories having size less than that given"""
        output = []
        for entry in self.entries.values():
            if entry.type == 'd':
                if entry.size < size:
                    output.append(entry)
                output.extend(entry.dirs_less_than(size))
        return output

    def dirs_more_than(self, size: int) -> ["Node"]:
        """Returns a list of directories having size greater than that given"""
        output = []
        for entry in self.entries.values():
            if entry.type == 'd':
                if entry.size >= size:
                    output.append(entry)
                output.extend(entry.dirs_more_than(size))
        return output

    def __str__(self) -> str:
        level = "  " * self.get_path().count('/')

        output = level + '- ' + self.name
        if self.type == 'd':
            output += ' (dir, total size=' + str(self.size) +')\n'
            for sub in self.entries:
                output += str(self.entries[sub])
        else:
            output += ' (file, size=' + str(self.size) + ')\n'
        return output


# Build the file system
fs_root = Node('/')
current_dir = fs_root

data = [line.strip() for line in open("inputs/day7.txt", "r").readlines()]

for line in data:
    if line[0] == '$':
        # it's a command

        cmd = line.split(' ')
        # we can ignore the 'ls' command
        if cmd[1] == 'cd':
            if cmd[2] == '/':
                current_dir = fs_root
            elif cmd[2] == '..':
                current_dir = current_dir.parent
            else:
                current_dir = current_dir.get_dir(cmd[2])
    else:
        # it's a file or directory listing
        size, file = line.split(' ')

        if size == 'dir':
            current_dir.add_dir(file)
        else:
            current_dir.add_file(file, int(size))


# Now that we've got the filesystem built, we can answer the questions...
MAX_SIZE = 70_000_000
FS_REQUIRED = 30_000_000
FS_USED = fs_root.size
FS_UNUSED = MAX_SIZE - FS_USED
to_free = abs(FS_REQUIRED - FS_UNUSED)

print(f"Part 1: {sum([entry.size for entry in fs_root.dirs_less_than(100000)])}")
candidates_for_deletion = sorted(fs_root.dirs_more_than(to_free), key=lambda d: d.size)
print(f"Part 2: {candidates_for_deletion[0].size}")
