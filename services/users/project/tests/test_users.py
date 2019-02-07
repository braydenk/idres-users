import json
import unittest

from project.tests.base import BaseTestCase

"""
TODO: Add error and exception tests for routes.
"""


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


if __name__ == '__main__':
    unittest.main()
