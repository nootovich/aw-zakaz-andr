from django.shortcuts import render
from .models import Product

def catalogue(request):
    queryset = Product.objects.all()
    context = {
        "product_list" : queryset
    }
    return render(request, 'catalogue.html', context)
