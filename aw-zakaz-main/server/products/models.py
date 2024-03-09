from django.db import models
from dcart.settings import MEDIA_URL

class Product(models.Model):
    name = models.CharField(max_length=200, default='')
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    link = models.CharField(max_length=200, default='')
    image = models.ImageField(upload_to=MEDIA_URL, default='')