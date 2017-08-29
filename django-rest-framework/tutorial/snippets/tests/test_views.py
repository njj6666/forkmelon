import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import Staff
from ..serializers import StaffSerializer
from ..views import StaffViewSet


# initialize the APIClient app
client = Client()
client.login(username='admin', password='password123')

class CreateStaffTests(TestCase):

	def setUp(self):
		self.payload = {
			"name":"Casper",
			"address":"China"
		}

	def test_create_staff(self):
		response = client.post('http://localhost:8000/staffs/',data=self.payload)
		self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class GetStaffsTests(TestCase):

	def setUp(self):
		Staff.objects.create(
			name='Casper', address='China')
		Staff.objects.create(
			name='Muffin', address='Malasia')

	def test_get_all_staffs(self):
		# get API response
		response = client.get('http://localhost:8000/staffs/')
		self.assertEqual(response.status_code, status.HTTP_200_OK)

	def test_get_staff(self):
		# get API response
		response = client.get('http://localhost:8000/staffs/1/')
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		response = client.get('http://localhost:8000/staffs/2/')
		self.assertEqual(response.status_code, status.HTTP_200_OK)