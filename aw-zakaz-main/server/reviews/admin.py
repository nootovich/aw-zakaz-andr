from django.contrib import admin
from .models import Review, ReviewImage

class ReviewImageAdmin(admin.StackedInline):
    model = ReviewImage

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    inlines = [ReviewImageAdmin]

    class Meta:
       model = Review

@admin.register(ReviewImage)
class ReviewImageAdmin(admin.ModelAdmin):
    pass