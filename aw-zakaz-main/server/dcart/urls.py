"""
URL configuration for dcart project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from dcart.settings import MEDIA_URL, MEDIA_ROOT
from django.conf.urls.static import static
from pages.views import index, photos, delivery, wholesale, contacts
from products.views import catalogue, create_product
from posts.views import posts_list, post
from reviews.views import reviews
from .views import post_edit

urlpatterns = [
    path('', TemplateView.as_view(template_name="base.html")),
    path('admin/', admin.site.urls),
    path('api/', include('dcart.api.urls')),
    path('login/', TemplateView.as_view(template_name="base.html")),
    path('catalog/', TemplateView.as_view(template_name="base.html")),
    path('posts/', TemplateView.as_view(template_name="base.html")),
    path('review/', TemplateView.as_view(template_name="base.html")),
    path('contacts/', TemplateView.as_view(template_name="base.html")),
    path('adm-panel/', TemplateView.as_view(template_name="base.html")),
    path('adm-panel/post-edit/', post_edit),
    path('adm-panel/post-edit/create_product/', create_product)
] + static(MEDIA_URL, document_root=MEDIA_ROOT)
