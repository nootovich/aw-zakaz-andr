from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def contacts(request):
    return render(request, 'contacts.html')

def delivery(request):
    return render(request, 'delivery.html')

def photos(request):
    return render(request, 'photos.html')

def wholesale(request):
    return render(request, 'wholesale.html')
