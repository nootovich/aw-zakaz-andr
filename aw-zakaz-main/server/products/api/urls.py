from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet

products_router = DefaultRouter()
products_router.register(r'products', ProductViewSet)
