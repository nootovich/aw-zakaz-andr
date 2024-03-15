from django.shortcuts import render
from .models import Post

def posts_list(request):
    queryset = Post.objects.all()
    context = {
        "posts_list" : queryset
    }
    return render(request, 'posts.html', context)

def post(request):
    context = {
        "post" : Post.objects.get(id=int(request.GET['post']))
    }
    return render(request, 'post.html', context)