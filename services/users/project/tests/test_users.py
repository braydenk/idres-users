import json
import unittest

from project import db
from project.api.models import User
from project.tests.base import BaseTestCase

"""
TODO: Add error and exception tests for routes.
"""


def add_user(username, email):
    user = User(username=username, email=email)
    db.session.add(user)
    db.session.commit()
    return user


class TestUserService(BaseTestCase):
    """Tests for the Users Service."""

    def test_add_user(self):
        """Ensure a new user can be added to the database."""
        with self.client:
            response = self.client.post(
                '/users',
                data=json.dumps({
                    'username': 'brayden',
                    'email': 'braydenmkilleen@gmail.com'
                }),
                content_type='application/json'
            )
            data = json.loads(response.data.decode())
            self.assertEqual(response.status_code, 201)
            self.assertIn('braydenmkilleen@gmail.com was added to db.', data['message'])
            self.assertIn('success', data['status'])

    def test_get_single_user(self):
        """Get a single user from the db."""
        user = add_user('brayden', 'braydenmkilleen@gmail.com')
        with self.client:
            response = self.client.get(f'/users/{user.id}')
            data = json.loads(response.data.decode())
            self.assertIn('brayden', data['data']['username'])
            self.assertIn('braydenmkilleen@gmail.com', data['data']['email'])
            self.assertIn('success', data['status'])

    def test_all_users(self):
        """Ensure get all users behaves correctly."""
        add_user('brayden', 'braydenmkilleen@gmail.com')
        add_user('test', 'test@test.com')
        with self.client:
            response = self.client.get('/users')
            data = json.loads(response.data.decode())
            self.assertEqual(response.status_code, 200)
            self.assertEqual(len(data['data']['users']), 2)
            self.assertIn('brayden', data['data']['users'][0]['username'])
            self.assertIn(
                'braydenmkilleen@gmail.com', data['data']['users'][0]['email'])
            self.assertIn('test', data['data']['users'][1]['username'])
            self.assertIn(
                'test@test.com', data['data']['users'][1]['email'])
            self.assertIn('success', data['status'])


if __name__ == '__main__':
    unittest.main()
