import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template 


#################################################
# Database Setup
#################################################


engine = create_engine("sqlite:///us_shooting.db")
 

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Welcome to Group 4 US Gun Violence Visualization Project:<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/index<br/>"
        f"/api/v1.0/cases"
    )

@app.route("/index")
def index_page():
    return render_template("index.html")


@app.route("/api/v1.0/cases")
def get_cases():
    conn = engine.connect()

    df = pd.read_sql('SELECT * FROM GunViolence', conn)
    data=df.to_dict(orient="records")
    

    return jsonify(data)

@app.route("/map")
def map_page():
    return render_template("map.html")

@app.route("/api/v1.0/map")
def get_map():
    conn = engine.connect()

    df = pd.read_sql('SELECT * FROM GunViolence', conn)
    data=df.to_dict(orient="records")
    

    return jsonify(data)


if __name__ == '__main__':
    app.run(port=5000, debug=True)

# if __name__ == '__main__':
#     app.run(debug=True)