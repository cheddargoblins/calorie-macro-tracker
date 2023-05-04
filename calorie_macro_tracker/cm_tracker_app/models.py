from django.db import models
from django.contrib.auth.models import AbstractUser
from django.apps import apps

# Create your models here.
class App_User(AbstractUser):
    email = models.EmailField(blank = False, null = False, unique = True)
   
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
  
apps.register_model(App_User, model=AbstractUser)




class Food(models.Model):
    food_name = models.CharField(max_length=255)
    serving_size = models.FloatField(default=0)
    serving_unit = models.CharField(max_length=6, choices=[("lb", "LB"), ("oz", "OZ"), ("g", "G")])
    protein = models.FloatField(default=0)
    carbs = models.FloatField(default=0)
    fat = models.FloatField(default=0)
    calories = models.FloatField(default=0)


class Meal_Record(models.Model):
    date = models.DateField(max_length=255, null=True, blank=True)
    food_info = models.ForeignKey(Food, on_delete=models.CASCADE)
    user = models.ForeignKey(App_User, on_delete=models.CASCADE, related_name="history")


class Daily_Totals(models.Model):
    date = models.DateField(max_length=255, null=True, blank=True)
    protein_total = models.FloatField(default=0)
    carbs_total = models.FloatField(default=0)
    fat_total = models.FloatField(default=0)
    calories_total = models.FloatField(default=0)
    user = models.ForeignKey(App_User, on_delete=models.CASCADE, related_name="daily_totals")

    class Meta:
        unique_together = ('date', 'user')




class User_Profile(models.Model):
    height = models.PositiveIntegerField(default=1)
    weight = models.PositiveIntegerField(default=1)
    age = models.PositiveIntegerField(default=1)
    gender = models.CharField(max_length=6, choices=[("male", "Male"), ("female", "Female"), ("other", "Other")])
    activity_level = models.CharField(max_length=6, choices=[("sedentary", "Sedentary"), ("moderate", "Moderate"), ("active", "Active")])
    fitness_goal = models.CharField(max_length=255)
    daily_protein_goal = models.FloatField(default=0)
    daily_carbs_goal = models.FloatField(default=0)
    daily_fat_goal = models.FloatField(default=0)
    daily_calories_goal = models.FloatField(default=0)
    user = models.OneToOneField(App_User, on_delete=models.CASCADE, related_name='profile')

