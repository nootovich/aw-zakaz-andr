from django.db import models
from dcart.settings import MEDIA_URL

class Review(models.Model):
    username = models.CharField(max_length=50, default='')
    created = models.DateTimeField(auto_now=True)
    content = models.TextField(default='')
    user_avatar = models.ImageField(upload_to=MEDIA_URL)
    # images = models.
