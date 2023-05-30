from typing import Union

from fastapi import FastAPI, Path

app = FastAPI()


inventory = {
    1: {
        "name" : "Car",
        "price" : "60M",
        "brand" : "Farari"
    }
}
@app.get("/get-item/{item_id}")
def get_item(item_id: int = Path(description = "The ID of Item")):
    return inventory[item_id]

@app.get("/name")
def get_item(name:str, item_id:int):
    for item_id in inventory:
        if inventory[item_id]["name"] == name:
            
            return inventory[item_id]
            # return {"ID": "ID didn't matched"}
        return {"Name": "Name didn't matched"}
    return {"Data": "Not Found"}

