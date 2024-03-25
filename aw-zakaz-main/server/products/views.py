from django.shortcuts import render, redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from .models import Product

def catalogue(request):
    queryset = Product.objects.all()
    context = {
        "product_list" : queryset
    }
    return render(request, 'catalogue.html', context)

@ensure_csrf_cookie
def create_product(request):
    return redirect('/adm-panel/post-edit/')
