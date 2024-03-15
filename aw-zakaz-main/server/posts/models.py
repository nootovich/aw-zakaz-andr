from django.db import models
from dcart.settings import MEDIA_URL

class Post(models.Model):
    title   = models.CharField(max_length=200, default='')
    created = models.DateTimeField(auto_now=True)
    content = models.TextField(default='')
    image   = models.ImageField(upload_to=MEDIA_URL, default='')


