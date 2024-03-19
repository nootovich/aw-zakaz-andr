from django.shortcuts import render
from .models import Review, ReviewImage

def reviews(request):
    review_list = []
    queryset = Review.objects.all()
    for review in queryset:
        images = ReviewImage.objects.filter(review=review)
        review_list.append({
            "review" : review,
            "images" : images,
        })
    context = {
        "review_list" : review_list,
    }
    return render(request, 'reviews.html', context)
    
