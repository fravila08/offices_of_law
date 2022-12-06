from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home),
    path("sign_up", views.sign_up),
    path("sign_in", views.sign_in),
    path('curr_user', views.curr_user),
    path('sign_out', views.log_out),
]