from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home),
    path("sign_up", views.sign_up),
    path("sign_in", views.sign_in),
    path('curr_user', views.curr_user),
    path('sign_out', views.log_out),
    path('allcotegories', views.all_categories),
    path("new_cat", views.new_cat),
    path("update_category/<int:id>", views.update_category),
    path("new_post", views.new_post),
    path("all_posts/<int:id>", views.all_posts),
    path("update_post/<int:id>", views.update_post),
]