"""Rebuild the three charts from the Daily Nexus story on UCSB degrees conferred.

    https://dailynexus.com/2024-05-16/ucsb-academic-departments-have-seen-growth-
    in-undergraduate-degrees-conferred-in-recent-years/

Source data: UCSB Office of Budget & Planning, 2013-14 through 2022-23.

Writes three standalone HTML files to ./out. Nothing is uploaded and no
credentials are required; the published versions were pushed to Plotly's
hosting service, but that step is unrelated to producing the figures.

    python3 -m pip install plotly
    python3 analysis/plot_degrees.py
"""

import csv
from pathlib import Path

import plotly.graph_objects as go

DATA = Path(__file__).parent / "ucsb_degrees.csv"
OUT = Path(__file__).parent / "out"

# Matches the palette used in the published figures.
DIVISION_COLORS = ["#7ca982", "#4e598c", "#8c4e4e"]

# The story reported these six. Economics & Accounting and Financial Math and
# Stats are present in the CSV but plotted separately or not at all.
FEATURED_MAJORS = [
    "Communication",
    "Psychological & Brain Sciences",
    "Economics",
    "Biological Sciences",
    "Statistics and Data Science",
    "Physics",
]

ECON_MAJORS = ["Economics & Accounting", "Economics"]


def load():
    """Return (years, {(grouping, name): [degrees or None per year]}).

    Blank cells become None rather than 0. Statistics and Data Science and
    Psychological & Brain Sciences did not exist in their current form for the
    full range, and plotting those years as zero would invent a decline that
    never happened.
    """
    years, series = [], {}

    with DATA.open(newline="") as f:
        for row in csv.DictReader(f):
            if row["year"] not in years:
                years.append(row["year"])
            value = row["degrees"].strip()
            key = (row["grouping"], row["name"])
            series.setdefault(key, {})[row["year"]] = int(value) if value else None

    return years, {k: [v[y] for y in years] for k, v in series.items()}


def styled_layout(title):
    """Transparent backgrounds so the figure inherits the article's page."""
    return go.Layout(
        title=title,
        title_x=0.45,
        xaxis=dict(title="School year conferred"),
        yaxis=dict(title="Number of degree recipients"),
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(0,0,0,0)",
        font=dict(color="black", size=12, family="arial"),
        hovermode="x unified",
    )


def divisions_figure(years, series):
    """Composition: which college the university's degrees come from."""
    names = ["Letters & Science", "Engineering", "Creative Studies"]

    fig = go.Figure(
        data=[
            go.Bar(
                x=years,
                y=series[("division", name)],
                name=name,
                marker=dict(color=color),
            )
            for name, color in zip(names, DIVISION_COLORS)
        ],
        layout=styled_layout("Degrees conferred by college division, 2013-14 to 2022-23"),
    )
    fig.update_layout(barmode="stack")
    return fig


def line_figure(years, series, names, title):
    """Trajectory: how individual majors move over the decade."""
    return go.Figure(
        data=[
            go.Scatter(x=years, y=series[("major", name)], mode="lines", name=name)
            for name in names
        ],
        layout=styled_layout(title),
    )


def main():
    years, series = load()
    OUT.mkdir(exist_ok=True)

    figures = {
        "college-divisions": divisions_figure(years, series),
        "fastest-growing-majors": line_figure(
            years,
            series,
            FEATURED_MAJORS,
            "Degrees conferred from 2013-14 to 2022-23",
        ),
        "economics-majors": line_figure(
            years,
            series,
            ECON_MAJORS,
            "Degrees conferred by the Department of Economics, 2013-14 to 2022-23",
        ),
    }

    for name, fig in figures.items():
        path = OUT / f"{name}.html"
        fig.write_html(path, include_plotlyjs="cdn")
        print(f"wrote {path}")


if __name__ == "__main__":
    main()
