from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
from .models import *
# Create your views here.
def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)


@api_view(["POST"])
def sign_up(request):
    success={
        "success":True
    }
    try:
        def capitalize(wrd):
            mine=list(wrd)
            mine[0]= mine[0].upper()
            mine= ''.join(mine)
            return mine
        first_name=capitalize(request.data["firstName"])
        last_name=capitalize(request.data['lastName'])
        mid_init=request.data["midInit"].upper()
        dob=request.data['dob'].split("-")
        dob=dob[::-1]
        dob="-".join(dob)
        AppUser.objects.create_user(username=request.data['email'], first_name=first_name , middle_init=mid_init , last_name=last_name , date_of_birth=dob , email=request.data['email'] , password=request.data['password'] )
        return JsonResponse(success)
    except Exception as e:
        print(e)
        success['success']=False
        return JsonResponse(success)
    

@api_view(["POST"])
def sign_in(request):
    success={
        "success":True
    }
    try: 
        user=authenticate(username=request.data["username"], password=request.data['password'])
        if user is not None and user.is_active:
            login(request._request, user)
        else:
            success['success']=False
    except Exception as e:
        print(e)
        success['success']=False
    return JsonResponse(success)

@api_view(['GET'])                
def curr_user(request):
    if request.user.is_authenticated:
        data= serializers.serialize("json", [request.user], fields=['first_name','last_name', 'middle_init', 'date_of_birth', 'email', 'password'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})
    
@api_view(['POST'])
def log_out(request):
    logout(request)
    return HttpResponse('Logged Out')


@api_view(["GET"])
def all_categories(request):
    my_categories= Categories.objects.all().values()
    return Response({"categories":my_categories})
        
        
@api_view(["POST"])
def new_cat(request):
    title=request.data['title']
    category=Categories.objects.create(title=title)
    category.save()
    return JsonResponse({"success":True})

@api_view(["PUT", "DELETE"])
def update_category(request, id):
    category=Categories.objects.get(id=id)
    if request.method == 'PUT':
        title=request.data["update_title"]
        category.title = title
        category.save()
        return Response({"success":True})
    if request.method== "DELETE":
        category.delete()
        return Response({"success":True})
    
    
@api_view(["POST"])
def new_post(request):
    category=Categories.objects.get(id=request.data["category"])
    title=request.data["title"]
    content=request.data["content"]
    post=Posts.objects.create(category=category, title=title, content=content)
    post.save()
    return Response({"success":True})

@api_view(["GET"])
def all_posts(request, id):
    category=Categories.objects.get(id=id)
    posts=Posts.objects.filter(category=category).values()
    return Response({"posts":posts})



@api_view(["PUT", "DELETE"])
def update_post(request, id):
    post=Posts.objects.get(id=id)
    if request.method == 'PUT':
        title=request.data["update_title"]
        post.title = title
        post.save()
        return Response({"success":True})
    if request.method== "DELETE":
        post.delete()
        return Response({"success":True})