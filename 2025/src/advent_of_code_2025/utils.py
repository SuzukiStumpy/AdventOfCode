from pathlib import Path


def get_project_root() -> Path:
    """Get the root directory for the project so we can reliably read input files"""
    return next(p for p in Path(__file__).parents if (p / "pyproject.toml").exists())


def read_input(filename: Path) -> list[str]:
    """Read the text input file lines and strip line endings"""
    filepath = get_project_root() / Path("inputs") / filename

    with Path.open(filepath, "rt", encoding="utf-8") as f:
        data = f.read().splitlines()

    return data
