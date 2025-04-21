from flask import Flask, request, jsonify
import mysql.connector
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)

# MySQL Database Connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Heeseung@45",
    database="gatewise"
)
cursor = db.cursor()

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    try:
        cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", 
                       (username, email, password))
        db.commit()
        return jsonify({"message": "Signup successful!", "status": "success"})
    except mysql.connector.Error as err:
        return jsonify({"message": f"Error: {err}", "status": "error"}), 400

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    cursor.execute("SELECT password FROM users WHERE email=%s", (email,))
    user = cursor.fetchone()

    if (user[0]== password):
        return jsonify({"message": "Login successful!", "status": "success"})
    else:
        return jsonify({"message": "Invalid email or password", "status": "error"}), 401

if __name__ == '__main__':
    app.run(debug=True)