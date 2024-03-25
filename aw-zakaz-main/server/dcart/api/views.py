import json
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST
from django.shortcuts import redirect

@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data.get("username")
    password = data.get("password")

    if username is None or password is None:
        return JsonResponse({"detail":"Пожалуйста введите логин и пароль."})
    
    user = authenticate(username=username, password=password)
    if user is None:
        return JsonResponse({"detail":"Неверный логин или пароль."}, status=401)

    login(request, user=user)
    return JsonResponse({"detail":"Вход успешен."})

def logout_view(request):
    if request.user.is_authenticated:
        logout(request)
    return redirect("/")

@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"isauthenticated":False})
    return JsonResponse({"isauthenticated":True})

def whoami_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"isAuthenticated": False})
    return JsonResponse({"username":request.user.username})

