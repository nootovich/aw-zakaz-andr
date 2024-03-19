from django.db import models

class Review(models.Model):
    username = models.CharField(max_length=50, default='')
    created = models.DateTimeField(auto_now=True)
    content = models.TextField(default='')
    user_avatar = models.ImageField(upload_to='images/')
    # images = models.

class ReviewImage(models.Model):
    review = models.ForeignKey(Review, default='', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/', default='')