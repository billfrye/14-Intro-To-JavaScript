
from flask import Flask, route;
from app import app;


@app.route("/index")
@app.route("/")
def index():
    return "hello world"

#    return index.html

if (__name__ == "__main__"):
    app.run(debug=True)