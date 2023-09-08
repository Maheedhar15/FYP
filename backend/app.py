from flask import Flask,jsonify
import pickle
import numpy as np
import sklearn
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask import request

# Setup the Flask-JWT-Extended extension


test_data = np.array([[ 1.02446643,  0.06941869,  0.98895712,  0.43198381, -0.20370714,
       -0.08506963, -0.8038884 , -0.2002037 , -0.00346677, -1.71612817,
       -1.38886077, -0.78449469, -0.49678817,  0.11870612]])

filename = './best_model.sav'

loaded_best_model = pickle.load(open(filename, 'rb'))

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)

@app.route("/login", methods=["POST"])
def login():
    if request.method == 'POST':
        data = request.json
        username = data["username"]
        password = data["password"]
        if username != "test" or password != "test":
            return jsonify({"msg": "Bad username or password"}), 401

        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token)

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@app.route('/predict_framingham', methods=['POST'])
def home():
    if request.method == 'POST':
        result = loaded_best_model.predict(test_data)
        if(result[0] == 0):
            ans = 'The person is Healthy and is Less prone to Chronic Heart Disease'
        else:
            ans = 'The person is Unhealthy and is more prone to Chronic Heart Disease'
        return jsonify({'prediction': ans})


if  __name__ == "__main__":
    app.run(debug=True)