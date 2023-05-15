from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.apps import apps
from django.utils.translation import gettext_lazy as _


class App_User(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True)
    name = models.CharField(max_length=255, null=False, blank=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    groups = models.ManyToManyField(
        Group,
        blank=True,
        related_name='app_users', # Add a related_name argument
        verbose_name=_('groups'),
        help_text=_('The groups this user belongs to. A user will get all permissions granted to each of their groups.'),
        related_query_name='app_user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        blank=True,
        related_name='app_users', # Add a related_name argument
        verbose_name=_('user permissions'),
        help_text=_('Specific permissions for this user.'),
        related_query_name='app_user',
    )
    
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
    activity_level = models.CharField(max_length=9, choices=[("sedentary", "Sedentary"), ("moderate", "Moderate"), ("active", "Active")])
    fitness_goal = models.CharField(max_length=255)
    daily_protein_goal = models.FloatField(default=0)
    daily_carbs_goal = models.FloatField(default=0)
    daily_fat_goal = models.FloatField(default=0)
    daily_calories_goal = models.FloatField(default=0)
    user = models.OneToOneField(App_User, on_delete=models.CASCADE, related_name='profile')

