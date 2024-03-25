from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def post_edit(request):
    return render(request, 'index.html')