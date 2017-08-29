from django.test import TestCase
from ..models import Staff

class StaffTests(TestCase):
    def setUp(self):
        Staff.objects.create(
            name='Casper', address='China')
        Staff.objects.create(
            name='Muffin', address='Malasia')

    def test_address(self):
        casper = Staff.objects.get(name='Casper')
        muffin = Staff.objects.get(name='Muffin')
        self.assertEqual(
            casper.address, "China")
        self.assertEqual(
            muffin.address, "Malasia")



