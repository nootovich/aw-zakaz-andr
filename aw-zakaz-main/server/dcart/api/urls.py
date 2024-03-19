from rest_framework.routers import DefaultRouter
from posts.api.urls import post_router
from products.api.urls import products_router
from django.urls import path, include

router = DefaultRouter()
router.registry.extend(post_router.registry)
router.registry.extend(products_router.registry)

urlpatterns = [
    path('', include(router.urls))
]
