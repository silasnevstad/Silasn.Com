import requests
from bs4 import BeautifulSoup

def get_game_url():
    # Send a GET request to the chess.com website
    response = requests.get("https://www.chess.com/games/archive")

    # Parse the HTML content of the response
    soup = BeautifulSoup(response.text, "html.parser")

    # Find the table with the class "table-component table-hover archived-games-table"
    table = soup.find("table", {"class": "table-component table-hover archived-games-table"})

    # Find the first row in the table (which should be the most recent game)
    row = table.find("tr")

    # Find the first cell in the row (which should contain the URL of the game)
    cell = row.find("td")

    # Extract the URL from the cell
    url = cell.a["href"]

    return url