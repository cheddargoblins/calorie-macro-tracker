from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .models import *


# GET food by ID
@api_view(['GET'])
def get_food(request):
    food_id = request.data.get('food_id')
    food = get_object_or_404(Food, pk=food_id)
    data = {
        'food_name': food.food_name,
        'serving_size': food.serving_size,
        'serving_unit': food.serving_unit,
        'protein': food.protein,
        'carbs': food.carbs,
        'fat': food.fat,
        'calories': food.calories
    }
    return JsonResponse(data)


# ADD new food
@api_view(['POST'])
def add_food(request):
    if request.user.is_authenticated:
        food_name = request.POST.get('food_name')
        serving_size = request.POST.get('serving_size')
        serving_unit = request.POST.get('serving_unit')
        protein = request.POST.get('protein')
        carbs = request.POST.get('carbs')
        fat = request.POST.get('fat')
        calories = request.POST.get('calories')
        food = Food.objects.create(
            food_name=food_name,
            serving_size=serving_size,
            serving_unit=serving_unit,
            protein=protein,
            carbs=carbs,
            fat=fat,
            calories=calories
        )
        data = {
            'food_name': food.food_name,
            'serving_size': food.serving_size,
            'serving_unit': food.serving_unit,
            'protein': food.protein,
            'carbs': food.carbs,
            'fat': food.fat,
            'calories': food.calories
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'user': 'Not authenticated.'})


# UPDATE food by ID
@api_view(['POST'])
def update_food(request):
    if request.user.is_authenticated:
        food_id = request.data.get('food_id')
        food = get_object_or_404(Food, pk=food_id)
        food.food_name = request.POST.get('food_name')
        food.serving_size = request.POST.get('serving_size')
        food.serving_unit = request.POST.get('serving_unit')
        food.protein = request.POST.get('protein')
        food.carbs = request.POST.get('carbs')
        food.fat = request.POST.get('fat')
        food.calories = request.POST.get('calories')
        food.save()
        data = {
            'food_name': food.food_name,
            'serving_size': food.serving_size,
            'serving_unit': food.serving_unit,
            'protein': food.protein,
            'carbs': food.carbs,
            'fat': food.fat,
            'calories': food.calories
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'user': 'Not authenticated.'})


# DELETE food by ID
def delete_food(request):
    if request.user.is_authenticated:
        food_id = request.data.get('food_id')
        food = get_object_or_404(Food, pk=food_id)
        food.delete()
        return JsonResponse({'message': 'Food deleted successfully.'})
    else:
        return JsonResponse({'user': 'Not authenticated.'})




# GET meal record by ID
@api_view(['GET'])
def get_meal_record(request):
    if request.user.is_authenticated:
        meal_id = request.data.get('meal_id')
        meal_record = get_object_or_404(Meal_Record, pk=meal_id)
        data = {
            'date': meal_record.date,
            'food_info': {
                'food_name': meal_record.food_info.food_name,
                'serving_size': meal_record.food_info.serving_size,
                'serving_unit': meal_record.food_info.serving_unit,
                'protein': meal_record.food_info.protein,
                'carbs': meal_record.food_info.carbs,
                'fat': meal_record.food_info.fat,
                'calories': meal_record.food_info.calories,
            },
            'user': meal_record.user.id
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'user': 'Not authenticated.'})


# ADD new meal record
@api_view(['POST'])
def add_meal_record(request):
    if request.user.is_authenticated:
        date = request.POST.get('date')
        food_info = request.POST.get('food_info')
        user = request.POST.get('user')
        meal_record = Meal_Record.objects.create(
            date=date,
            food_info=food_info,
            user=user
        )
        meal_record.save()
        return HttpResponse(status=201)
    else:
        return JsonResponse({'user': 'Not authenticated.'})


@api_view(['PUT'])
def update_meal_record(request):
    if request.user.is_authenticated:
        meal_id = request.data.get('meal_id')
        meal_record = get_object_or_404(Meal_Record, pk=meal_id)
        if request.user.email != meal_record.user.email:
            return HttpResponse(status=403)
        data = request.data
        food_info = get_object_or_404(Food, pk=data['food_info'])
        meal_record.date = data['date']
        meal_record.food_info = food_info
        meal_record.save()
        return HttpResponse(status=204)
    else:
        return JsonResponse({'user': 'Not authenticated.'})


@api_view(['DELETE'])
def delete_meal_record(request):
    if request.user.is_authenticated:
        meal_id = request.data.get('meal_id')
        meal_record = get_object_or_404(Meal_Record, pk=meal_id)
        if request.user.email != meal_record.user.email:
            return HttpResponse(status=403)
        meal_record.delete()
        return HttpResponse(status=204)
    else:
        return JsonResponse({'user': 'Not authenticated.'})




@api_view(['GET'])
def get_daily_totals(request, date):
    if request.user.is_authenticated:
        user = get_object_or_404(App_User, email=request.user.email)
        daily_totals = get_object_or_404(Daily_Totals, date=date, user=user)
        data = {
            'protein_total': daily_totals.protein_total,
            'carbs_total': daily_totals.carbs_total,
            'fat_total': daily_totals.fat_total,
            'calories_total': daily_totals.calories_total,
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'user': 'Not authenticated.'})





@api_view(['PUT'])
def update_user_profile(request):
    if request.user.is_authenticated:
        user_profile = get_object_or_404(User_Profile, user=request.user)
        data = request.data
        user_profile.height = data['height']
        user_profile.weight = data['weight']
        user_profile.age = data['age']
        user_profile.gender = data['gender']
        user_profile.activity_level = data['activity_level']
        user_profile.fitness_goal = data['fitness_goal']
        user_profile.daily_protein_goal = data['daily_protein_goal']
        user_profile.daily_carbs_goal = data['daily_carbs_goal']
        user_profile.daily_fat_goal = data['daily_fat_goal']
        user_profile.daily_calories_goal = data['daily_calories_goal']
        user_profile.save()
        return HttpResponse(status=204)
    else:
        return JsonResponse({'user': 'Not authenticated.'})
