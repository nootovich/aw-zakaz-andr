from rest_framework.routers import DefaultRouter
from posts.api.urls import post_router
from products.api.urls import products_router
from django.urls import path, include
from .views import login_view, logout_view, session_view, whoami_view

router = DefaultRouter()
router.registry.extend(post_router.registry)
router.registry.extend(products_router.registry)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', login_view),
    path('logout/', logout_view),
    path('session/', session_view),
    path('whoami/', whoami_view),
]
