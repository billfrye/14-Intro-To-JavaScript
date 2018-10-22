
from flask import Flask, render_template;

// from data.js
var tableData = data;

// YOUR CODE HERE!

app = Flask(__name__)

@app.route("/index")
@app.route("/")
def index():
    return render_template("index.html",sightings = tableData)

if (__name__ == "__main__"):
    app.run(debug=True)