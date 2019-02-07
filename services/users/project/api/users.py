from flask import Blueprint, jsonify, request

from project.api.models import User
from project import db

"""
TODO: Add error and exception handling for routes.
"""


users_blueprint = Blueprint('users', __name__)


@users_blueprint.route('/users', methods=['POST'])
def add_user():
    post_data = request.get_json()
    username = post_data.get('username')
    email = post_data.get('email')
    db.session.add(User(username=username, email=email))
    db.session.commit()
    response_object = {
        'status': 'success',
        'message': f'{email} was added to db.'
    }
    return jsonify(response_object), 201
